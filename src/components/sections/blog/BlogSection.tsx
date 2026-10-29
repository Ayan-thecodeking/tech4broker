"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogCard } from "./BlogCard";
import { blogContent as defaultBlogContent } from "@/content/blog";
import { BlogSectionData } from "@/types/blog";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export interface BlogSectionProps {
  data?: BlogSectionData;
  className?: string;
}

export function BlogSection({
  data = defaultBlogContent,
  className,
}: BlogSectionProps) {
  const { eyebrow, heading, description, posts } = data;

  const [cardsPerView, setCardsPerView] = useState<number>(3);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Responsive cards per view calculation (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, posts.length - cardsPerView);

  // Clamp current index if resize decreases total possible slides
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    const threshold = 50; // min swipe distance in px
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section
      id="blog"
      aria-label="Blog and Industry Insights"
      className={cn(
        "py-[90px] lg:py-[130px] text-slate-900 relative w-full overflow-hidden",
        className
      )}
    >
      <Container className="relative">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-16">
         
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-bold tracking-tight text-slate-900 leading-[1.18]">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-[16px] sm:text-[17px] text-slate-600 leading-relaxed font-normal max-w-[620px] mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Carousel Row with Prev Button at Start & Next Button at End */}
        <div className="relative flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Start / Previous Button (Shown if there are more items than visible cards) */}
          {posts.length > cardsPerView && (
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous blog posts"
              className={cn(
                "hidden sm:flex w-12 h-12 rounded-full border border-slate-200/90 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.05)] items-center justify-center text-slate-700 transition-all duration-200 shrink-0 select-none z-10",
                canGoPrev
                  ? "hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                  : "opacity-35 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200"
              )}
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>
          )}

          {/* Cards Track Container (3 in a row on desktop) */}
          <div
            className="w-full overflow-hidden py-3"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="px-2.5 sm:px-3 lg:px-3.5 shrink-0"
                  style={{
                    width: `${100 / cardsPerView}%`,
                    flex: `0 0 ${100 / cardsPerView}%`,
                  }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* End / Next Button (Shown if there are more items than visible cards) */}
          {posts.length > cardsPerView && (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next blog posts"
              className={cn(
                "hidden sm:flex w-12 h-12 rounded-full border border-slate-200/90 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.05)] items-center justify-center text-slate-700 transition-all duration-200 shrink-0 select-none z-10",
                canGoNext
                  ? "hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                  : "opacity-35 cursor-not-allowed bg-slate-50 text-slate-400 border-slate-200"
              )}
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </button>
          )}
        </div>

        {/* Mobile Navigation Controls (Start & End buttons below for mobile screens <640px) */}
        {posts.length > cardsPerView && (
          <div className="flex sm:hidden items-center justify-center gap-4 mt-6 px-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous blog post"
              className={cn(
                "flex items-center gap-1.5 px-4 h-10 rounded-full border border-slate-200 bg-white text-xs font-semibold shadow-xs select-none",
                canGoPrev
                  ? "text-slate-800 active:scale-95 hover:bg-slate-50 cursor-pointer"
                  : "opacity-35 text-slate-400 cursor-not-allowed"
              )}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next blog post"
              className={cn(
                "flex items-center gap-1.5 px-4 h-10 rounded-full border border-slate-200 bg-white text-xs font-semibold shadow-xs select-none",
                canGoNext
                  ? "text-slate-800 active:scale-95 hover:bg-slate-50 cursor-pointer"
                  : "opacity-35 text-slate-400 cursor-not-allowed"
              )}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
