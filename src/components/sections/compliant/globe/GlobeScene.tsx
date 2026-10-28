"use client";

import React, { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { RotateCcw } from "lucide-react";
import {
  createLandPoints,
  createWorldMapTexture,
  createCircleTexture,
  latLonToVector3,
} from "./createLandPoints";
import {
  GLOBE_JURISDICTIONS,
  GLOBE_ARCS,
  type GlobeJurisdiction,
} from "./globeData";
import type { GlobeThemeColors } from "@/hooks/useGlobeTheme";

export interface GlobeSceneProps {
  colors: GlobeThemeColors;
  prefersReducedMotion?: boolean;
  activeJurisdictionId?: string | null;
  onSelectJurisdiction?: (id: string | null) => void;
  onHoverJurisdiction?: (id: string | null) => void;
  className?: string;
}

export function GlobeScene({
  colors,
  prefersReducedMotion = false,
  activeJurisdictionId = null,
  onSelectJurisdiction,
  onHoverJurisdiction,
  className,
}: GlobeSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Track active jurisdiction internally for smooth animations
  const activeIdRef = useRef<string | null>(activeJurisdictionId);
  useEffect(() => {
    activeIdRef.current = activeJurisdictionId;
  }, [activeJurisdictionId]);

  // References for runtime tweening and controls
  const controlsRef = useRef<{
    focusJurisdiction: (lat: number, lon: number) => void;
    resetView: () => void;
  } | null>(null);

  // Setup Three.js scene
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const isMobile = window.innerWidth < 768;
    // CompliantSection is dark themed (#0b0f19) matching the footer
    const isDark = true;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 510;
    const height = container.clientHeight || 510;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.7);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }
    const maxDpr = isMobile ? 1.5 : 2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr));
    renderer.setSize(width, height, false);

    // Master tilt group (~12 degrees on Z)
    const masterGroup = new THREE.Group();
    masterGroup.rotation.z = THREE.MathUtils.degToRad(12);
    scene.add(masterGroup);

    // Inner rotating globe group (controls yaw Y and pitch X)
    const globeGroup = new THREE.Group();
    masterGroup.add(globeGroup);

    const sphereRadius = 2.0;

    // 2. Base Sphere: Frosted Glass Ocean with Rim & Depth
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 64, 64);
    const oceanVertexShader = `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const oceanFragmentShader = `
      uniform vec3 uBaseColor;
      uniform vec3 uDeepColor;
      uniform vec3 uRimColor;
      uniform float uIsDark;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Fresnel calculation for 3D sphere curvature
        float fresnel = 1.0 - max(dot(viewDir, normal), 0.0);
        float edgeRim = pow(fresnel, 2.2);

        // Soft lighting gradient for gentle 3D volume
        vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0));
        float diff = max(dot(normal, lightDir), 0.0) * 0.30 + 0.70;

        // Specular highlight for pearl/ceramic white sheen
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 32.0) * 0.20;

        // Pure luminous white body
        vec3 oceanBody = mix(uDeepColor, uBaseColor, diff) + spec;
        // Subtle soft rim contour for delicate edge definition on white bg
        vec3 finalColor = mix(oceanBody, uRimColor, edgeRim * 0.35);

        // Fully solid white in light mode, dark translucent in dark mode
        float alpha = uIsDark > 0.5 ? mix(0.40, 0.75, edgeRim) : 1.0;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const oceanBaseColor = isDark ? new THREE.Color("#141D32") : new THREE.Color("#FFFFFF");
    const oceanDeepColor = isDark ? new THREE.Color("#0B0F19") : new THREE.Color("#FFFFFF");
    const rimColor = isDark ? new THREE.Color("#38BDF8") : new THREE.Color("#E2E8F0");

    const sphereMat = new THREE.ShaderMaterial({
      vertexShader: oceanVertexShader,
      fragmentShader: oceanFragmentShader,
      uniforms: {
        uBaseColor: { value: oceanBaseColor },
        uDeepColor: { value: oceanDeepColor },
        uRimColor: { value: rimColor },
        uIsDark: { value: isDark ? 1.0 : 0.0 },
      },
      transparent: true,
      depthWrite: true,
    });

    const baseSphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(baseSphere);

    // 3. High-Definition World Map Texture Mesh (Continents + Coastlines + Graticule)
    const mapTexture = createWorldMapTexture(isDark);
    const mapGeo = new THREE.SphereGeometry(sphereRadius + 0.008, 64, 64);
    const mapMat = new THREE.MeshBasicMaterial({
      map: mapTexture,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });
    const mapMesh = new THREE.Mesh(mapGeo, mapMat);
    globeGroup.add(mapMesh);

    // 4. Regular 3D Dotted Land Matrix (only active in dark mode to keep light mode pristine white)
    const circleTexture = createCircleTexture();
    const landPositions = createLandPoints(isMobile, sphereRadius + 0.02);
    const landGeo = new THREE.BufferGeometry();
    landGeo.setAttribute("position", new THREE.BufferAttribute(landPositions, 3));

    const landDotColor = isDark ? new THREE.Color("#94A3B8") : new THREE.Color("#FFFFFF");

    const landMat = new THREE.PointsMaterial({
      size: isMobile ? 0.040 : 0.044,
      map: circleTexture,
      transparent: true,
      opacity: isDark ? 0.95 : 0.0,
      color: landDotColor,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const landPoints = new THREE.Points(landGeo, landMat);
    landPoints.visible = isDark;
    globeGroup.add(landPoints);

    // 5. Atmospheric Outer Fresnel Glow Shell
    const haloGeo = new THREE.SphereGeometry(sphereRadius + 0.06, 48, 48);
    const haloVertexShader = `
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;
    const haloFragmentShader = `
      uniform vec3 uGlowColor;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
        gl_FragColor = vec4(uGlowColor, fresnel * 0.25);
      }
    `;
    const haloMat = new THREE.ShaderMaterial({
      vertexShader: haloVertexShader,
      fragmentShader: haloFragmentShader,
      uniforms: {
        uGlowColor: { value: isDark ? new THREE.Color("#38BDF8") : new THREE.Color("#FFFFFF") },
      },
      transparent: true,
      blending: THREE.NormalBlending,
      side: THREE.BackSide,
      depthWrite: false,
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    globeGroup.add(haloMesh);

    // 6. Interactive 3D Jurisdiction Beacons & Hit Boxes
    const pinObjects: {
      id: string;
      jurisdiction: GlobeJurisdiction;
      hitMesh: THREE.Mesh;
      pinMesh: THREE.Group;
      pulseRing: THREE.Mesh;
      worldPos: THREE.Vector3;
    }[] = [];

    const pinsGroup = new THREE.Group();
    globeGroup.add(pinsGroup);

    const hitGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });

    // Shared pulse ring geometry
    const ringGeo = new THREE.RingGeometry(0.04, 0.12, 24);
    const pinStemGeo = new THREE.CylinderGeometry(0.012, 0.016, 0.12, 8);
    const pinHeadGeo = new THREE.SphereGeometry(0.042, 12, 12);

    GLOBE_JURISDICTIONS.forEach((item) => {
      const pos = latLonToVector3(item.lat, item.lon, sphereRadius + 0.02);
      const normal = pos.clone().normalize();

      const singlePinGroup = new THREE.Group();
      singlePinGroup.position.copy(pos);
      singlePinGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);

      // Vertical pin stem & glowing head
      const stemMat = new THREE.MeshBasicMaterial({
        color: isDark ? "#94A3B8" : "#475569",
      });
      const stem = new THREE.Mesh(pinStemGeo, stemMat);
      stem.position.y = 0.06;
      singlePinGroup.add(stem);

      const headMat = new THREE.MeshBasicMaterial({
        color: "#2563EB",
      });
      const head = new THREE.Mesh(pinHeadGeo, headMat);
      head.position.y = 0.12;
      singlePinGroup.add(head);

      // Radar pulse ring on the surface
      const pulseRingMat = new THREE.MeshBasicMaterial({
        color: "#3B82F6",
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const pulseRing = new THREE.Mesh(ringGeo, pulseRingMat);
      pulseRing.rotation.x = Math.PI / 2;
      pulseRing.position.y = 0.005;
      singlePinGroup.add(pulseRing);

      pinsGroup.add(singlePinGroup);

      // Invisible hit-test sphere for Raycaster
      const hitMesh = new THREE.Mesh(hitGeo, hitMat);
      hitMesh.position.copy(pos);
      hitMesh.userData = { id: item.id };
      globeGroup.add(hitMesh);

      pinObjects.push({
        id: item.id,
        jurisdiction: item,
        hitMesh,
        pinMesh: singlePinGroup,
        pulseRing,
        worldPos: pos,
      });
    });

    // 7. Global Compliance Network Arcs & Light Pulses
    const arcsGroup = new THREE.Group();
    globeGroup.add(arcsGroup);

    interface ArcTracker {
      curve: THREE.QuadraticBezierCurve3;
      photon: THREE.Mesh;
      progress: number;
      speed: number;
    }
    const arcTrackers: ArcTracker[] = [];

    const photonGeo = new THREE.SphereGeometry(0.025, 8, 8);
    const photonMat = new THREE.MeshBasicMaterial({
      color: "#2563EB",
    });

    const jurMap = new Map<string, GlobeJurisdiction>(
      GLOBE_JURISDICTIONS.map((j) => [j.id, j])
    );

    GLOBE_ARCS.forEach((arc) => {
      const j1 = jurMap.get(arc.from);
      const j2 = jurMap.get(arc.to);
      if (!j1 || !j2) return;

      const p1 = latLonToVector3(j1.lat, j1.lon, sphereRadius + 0.02);
      const p2 = latLonToVector3(j2.lat, j2.lon, sphereRadius + 0.02);

      const dist = p1.distanceTo(p2);
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const elevation = sphereRadius + Math.min(0.55, dist * 0.22);
      mid.normalize().multiplyScalar(elevation);

      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const curvePoints = curve.getPoints(24);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);

      const arcMat = new THREE.LineBasicMaterial({
        color: isDark ? "#94A3B8" : "#64748B",
        transparent: true,
        opacity: 0.65,
        linewidth: 1,
      });

      const line = new THREE.Line(arcGeo, arcMat);
      arcsGroup.add(line);

      // Photon light pulse
      const photon = new THREE.Mesh(photonGeo, photonMat);
      photon.position.copy(p1);
      arcsGroup.add(photon);

      arcTrackers.push({
        curve,
        photon,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.004,
      });
    });

    // 8. Interactive Drag to Rotate with Momentum & Inertia
    let isDragging = false;
    let pointerStartX = 0;
    let pointerStartY = 0;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let velocityY = 0;
    let velocityX = 0;
    let lastInteractionTime = Date.now();
    let isHoveringPin = false;

    const targetRotation = {
      x: 0,
      y: 0,
    };

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      pointerStartX = e.clientX;
      pointerStartY = e.clientY;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      velocityY = 0;
      velocityX = 0;
      lastInteractionTime = Date.now();
      container.style.cursor = "grabbing";
      canvas.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - lastPointerX;
        const deltaY = e.clientY - lastPointerY;

        velocityY = deltaX * 0.0055;
        velocityX = deltaY * 0.0055;

        globeGroup.rotation.y += velocityY;
        globeGroup.rotation.x += velocityX;

        // Clamp pitch so the poles don't flip upside down
        globeGroup.rotation.x = THREE.MathUtils.clamp(
          globeGroup.rotation.x,
          -Math.PI / 3,
          Math.PI / 3
        );

        targetRotation.y = globeGroup.rotation.y;
        targetRotation.x = globeGroup.rotation.x;

        lastPointerX = e.clientX;
        lastPointerY = e.clientY;
        lastInteractionTime = Date.now();
      } else {
        // Raycast against jurisdiction hit boxes on hover (cursor feedback only, no tooltip)
        raycaster.setFromCamera(pointer, camera);
        const hitMeshes = pinObjects.map((p) => p.hitMesh);
        const intersects = raycaster.intersectObjects(hitMeshes);

        if (intersects.length > 0) {
          const hitId = intersects[0].object.userData.id;
          const found = pinObjects.find((p) => p.id === hitId);
          if (found) {
            isHoveringPin = true;
            container.style.cursor = "pointer";
            return;
          }
        }

        if (isHoveringPin) {
          isHoveringPin = false;
          container.style.cursor = "grab";
        }
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (isDragging) {
        isDragging = false;
        container.style.cursor = isHoveringPin ? "pointer" : "grab";
        try {
          canvas.releasePointerCapture(e.pointerId);
        } catch {
          // ignore if already released
        }

        // Check if it was a quick click rather than a drag
        const moveDist = Math.hypot(
          e.clientX - pointerStartX,
          e.clientY - pointerStartY
        );
        if (moveDist < 6) {
          raycaster.setFromCamera(pointer, camera);
          const hitMeshes = pinObjects.map((p) => p.hitMesh);
          const intersects = raycaster.intersectObjects(hitMeshes);
          if (intersects.length > 0) {
            const hitId = intersects[0].object.userData.id;
            onSelectJurisdiction?.(hitId);
          }
        }
      }
    };

    container.style.cursor = "grab";
    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    // 9. Focus Jurisdiction Animation Function
    const focusJurisdiction = (lat: number, lon: number) => {
      lastInteractionTime = Date.now() + 5000; // prevent auto-rotation override
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
      const desktopOffset = isDesktop ? THREE.MathUtils.degToRad(32) : 0;
      const targetY = -lon * (Math.PI / 180) + desktopOffset;
      const targetX = THREE.MathUtils.clamp(
        (lat * 0.75) * (Math.PI / 180),
        -Math.PI / 3.5,
        Math.PI / 3.5
      );

      gsap.to(globeGroup.rotation, {
        y: targetY,
        x: targetX,
        duration: 1.3,
        ease: "power2.out",
        onUpdate: () => {
          targetRotation.y = globeGroup.rotation.y;
          targetRotation.x = globeGroup.rotation.x;
        },
      });
    };

    const resetView = () => {
      lastInteractionTime = Date.now();
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
      const desktopOffset = isDesktop ? THREE.MathUtils.degToRad(32) : 0;
      gsap.to(globeGroup.rotation, {
        y: desktopOffset,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          targetRotation.y = globeGroup.rotation.y;
          targetRotation.x = globeGroup.rotation.x;
        },
      });
      onSelectJurisdiction?.(null);
    };

    controlsRef.current = { focusJurisdiction, resetView };

    // 10. Animation Loop & Tooltip Screen-Space Projection
    let pulseTime = 0;
    const baseRotationSpeed = prefersReducedMotion ? 0 : 0.003;
    let isVisibleOnScreen = true;

    const tempV = new THREE.Vector3();

    const renderTick = () => {
      if (!isVisibleOnScreen || document.hidden) return;

      pulseTime += 0.035;

      // 10a. Pulse rings expansion & opacity oscillation
      const ringScale = 1.0 + (Math.sin(pulseTime) + 1.0) * 0.45;
      const ringOpacity = 0.85 - (Math.sin(pulseTime) + 1.0) * 0.35;
      pinObjects.forEach((p) => {
        p.pulseRing.scale.set(ringScale, ringScale, 1);
        (p.pulseRing.material as THREE.MeshBasicMaterial).opacity = ringOpacity;

        // Highlight active jurisdiction pin
        if (activeIdRef.current === p.id) {
          p.pinMesh.scale.set(1.4, 1.4, 1.4);
        } else {
          p.pinMesh.scale.set(1.0, 1.0, 1.0);
        }
      });

      // 10b. Advance photons along flight curves
      arcTrackers.forEach((tracker) => {
        tracker.progress += tracker.speed;
        if (tracker.progress > 1) tracker.progress = 0;
        tracker.photon.position.copy(tracker.curve.getPoint(tracker.progress));
      });

      // 10c. Physics Inertia & Auto-Rotation
      if (!isDragging) {
        if (Math.abs(velocityY) > 0.0001 || Math.abs(velocityX) > 0.0001) {
          globeGroup.rotation.y += velocityY;
          globeGroup.rotation.x += velocityX;

          globeGroup.rotation.x = THREE.MathUtils.clamp(
            globeGroup.rotation.x,
            -Math.PI / 3,
            Math.PI / 3
          );

          velocityY *= 0.94;
          velocityX *= 0.94;
          targetRotation.y = globeGroup.rotation.y;
          targetRotation.x = globeGroup.rotation.x;
        } else {
          // If no interaction for 2.2 seconds, resume smooth gentle spin
          if (Date.now() - lastInteractionTime > 2200 && !activeIdRef.current) {
            globeGroup.rotation.y += baseRotationSpeed;
            targetRotation.y = globeGroup.rotation.y;
          }
        }
      }

      // 10d. Screen-Space Tooltip Projection for Active Pin
      renderer.render(scene, camera);
    };

    gsap.ticker.add(renderTick);

    // 11. Intersection Observer (pause rendering when off-screen)
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleOnScreen = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 12. Resize Observer
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      }
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Initial render
    renderer.render(scene, camera);

    // 13. Cleanup
    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      gsap.ticker.remove(renderTick);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);

      sphereGeo.dispose();
      sphereMat.dispose();
      mapGeo.dispose();
      mapMat.dispose();
      mapTexture.dispose();
      landGeo.dispose();
      landMat.dispose();
      circleTexture.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      hitGeo.dispose();
      hitMat.dispose();
      ringGeo.dispose();
      pinStemGeo.dispose();
      pinHeadGeo.dispose();
      photonGeo.dispose();
      photonMat.dispose();
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  // Handle external selection change: smooth spin to jurisdiction
  useEffect(() => {
    if (activeJurisdictionId && controlsRef.current) {
      const found = GLOBE_JURISDICTIONS.find((j) => j.id === activeJurisdictionId);
      if (found) {
        controlsRef.current.focusJurisdiction(found.lat, found.lon);
      }
    }
  }, [activeJurisdictionId]);

  const handleReset = useCallback(() => {
    controlsRef.current?.resetView();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none ${className || ""}`}
      style={{
        width: "var(--globe-size)",
        height: "var(--globe-size)",
        aspectRatio: "1 / 1",
      }}
    >
      <canvas
        ref={canvasRef}
        aria-label="Interactive 3D compliance globe. Drag to rotate and explore global regulatory jurisdictions."
        className="w-full h-full block touch-none"
      />

      {/* Interactive Controls Overlay: Reset button if active jurisdiction */}
      {activeJurisdictionId && (
        <div className="absolute bottom-2 right-3 pointer-events-none">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-300 hover:text-white hover:border-white/20 shadow-sm pointer-events-auto transition-colors"
            title="Reset globe view"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      )}
    </div>
  );
}
