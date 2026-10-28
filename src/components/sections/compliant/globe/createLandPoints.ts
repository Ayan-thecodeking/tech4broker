import * as THREE from "three";
import * as topojson from "topojson-client";
import { geoEquirectangular, geoPath, geoGraticule } from "d3-geo";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const worldData = require("world-atlas/countries-110m.json");

const CANVAS_WIDTH = 2048;
const CANVAS_HEIGHT = 1024;

let cachedRasterData: Uint8ClampedArray | null = null;
let cachedLightTexture: THREE.CanvasTexture | null = null;
let cachedDarkTexture: THREE.CanvasTexture | null = null;

/**
 * Converts Geographic Latitude and Longitude to 3D Cartesian coordinates
 * on a sphere of given radius.
 *
 * Aligns Greenwich (lat 0, lon 0) directly towards +Z (facing camera).
 * Longitude increases Eastward towards +X (right).
 * Latitude increases Northward towards +Y (top).
 */
export function latLonToVector3(
  lat: number,
  lon: number,
  radius: number = 2.0
): THREE.Vector3 {
  const latRad = (lat * Math.PI) / 180;
  const lonRad = (lon * Math.PI) / 180;
  const x = radius * Math.cos(latRad) * Math.sin(lonRad);
  const y = radius * Math.sin(latRad);
  const z = radius * Math.cos(latRad) * Math.cos(lonRad);
  return new THREE.Vector3(x, y, z);
}

/**
 * Internal helper to generate and cache the 2D raster mask for fast land lookup.
 */
function getLandRaster(): Uint8ClampedArray | null {
  if (cachedRasterData) return cachedRasterData;
  if (typeof document === "undefined") return null;

  try {
    const canvas = document.createElement("canvas");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const land = topojson.feature(worldData, worldData.objects.land as any);

    const projection = geoEquirectangular()
      .scale(CANVAS_WIDTH / (2 * Math.PI))
      .translate([CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pathGenerator = geoPath(projection, ctx as any);

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pathGenerator(land as any);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    cachedRasterData = imageData.data;
    return cachedRasterData;
  } catch (err) {
    console.error("Failed to rasterize land data", err);
    return null;
  }
}

/**
 * Creates a high-definition equirectangular world map texture
 * with crisp filled continents, sharp coastlines, and delicate graticules.
 */
export function createWorldMapTexture(isDark: boolean): THREE.CanvasTexture {
  if (isDark && cachedDarkTexture) return cachedDarkTexture;
  if (!isDark && cachedLightTexture) return cachedLightTexture;

  const canvas = document.createElement("canvas");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // Clear transparent background
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const projection = geoEquirectangular()
      .scale(CANVAS_WIDTH / (2 * Math.PI))
      .translate([CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pathGenerator = geoPath(projection, ctx as any);

    // 1. Draw delicate latitude/longitude graticule lines (subtle silver/slate)
    ctx.strokeStyle = "rgba(148, 163, 184, 0.25)";
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pathGenerator(geoGraticule()() as any);
    ctx.stroke();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const landFeature = topojson.feature(worldData, worldData.objects.land as any);
    const coastlinesMesh = topojson.mesh(
      worldData,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      worldData.objects.land as any
    );
    const bordersMesh = topojson.mesh(
      worldData,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      worldData.objects.countries as any,
      (a, b) => a !== b
    );

    // 2. Draw continent land fills (soft whitish-silver fill)
    ctx.fillStyle = "rgba(226, 232, 240, 0.50)";
    ctx.beginPath();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pathGenerator(landFeature as any);
    ctx.fill();

    // 3. Draw continent coastlines (clean refined outline)
    ctx.strokeStyle = "rgba(100, 116, 139, 0.70)";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pathGenerator(coastlinesMesh as any);
    ctx.stroke();

    // 4. Draw country borders (subtle delineation)
    ctx.strokeStyle = "rgba(148, 163, 184, 0.35)";
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pathGenerator(bordersMesh as any);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  // Offset by 0.25 so Greenwich (u=0.5) is centered at Z+ facing camera
  texture.offset.x = 0.25;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  if (isDark) {
    cachedDarkTexture = texture;
  } else {
    cachedLightTexture = texture;
  }

  return texture;
}

/**
 * Creates soft circular particle sprite texture for dots and beacon pins.
 */
export function createCircleTexture(): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1.0)");
    gradient.addColorStop(0.65, "rgba(255, 255, 255, 0.85)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

/**
 * Generates an organized, regular concentric latitude/longitude dot matrix
 * for all global landmasses with high contrast.
 */
export function createLandPoints(
  isMobile: boolean = false,
  radius: number = 2.015
): Float32Array {
  const raster = getLandRaster();
  const latStep = isMobile ? 2.4 : 1.7;
  const landCoords: number[] = [];

  for (let lat = -76; lat <= 78; lat += latStep) {
    const latRad = (lat * Math.PI) / 180;
    const cosLat = Math.cos(latRad);
    if (cosLat < 0.04) continue;

    const lonStep = latStep / cosLat;

    for (let lon = -180; lon < 180; lon += lonStep) {
      let isLand = false;

      if (raster) {
        const px = Math.min(
          CANVAS_WIDTH - 1,
          Math.max(0, Math.floor(((lon + 180) / 360) * CANVAS_WIDTH))
        );
        const py = Math.min(
          CANVAS_HEIGHT - 1,
          Math.max(0, Math.floor(((90 - lat) / 180) * CANVAS_HEIGHT))
        );
        const pixelIndex = (py * CANVAS_WIDTH + px) * 4;
        isLand = raster[pixelIndex] > 128;
      }

      if (isLand) {
        const pos = latLonToVector3(lat, lon, radius);
        landCoords.push(pos.x, pos.y, pos.z);
      }
    }
  }

  return new Float32Array(landCoords);
}
