import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { cn } from "@/lib/cn";

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col h-full bg-transparent transition-all duration-300 select-none",
        className
      )}
    >
      <Link
        href={post.url || "#"}
        className="flex flex-col h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 rounded-2xl"
        aria-label={`Read article: ${post.title}`}
      >
        {/* Top Image (16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-1 pt-5 sm:pt-6">
          {/* Title */}
          <div className="mb-2.5">
            <h3
              title={post.title}
              className="text-[18px] sm:text-[20px] font-bold text-slate-900 leading-[1.3] line-clamp-2 group-hover:underline underline-offset-2 transition-all duration-200"
            >
              {post.title}
            </h3>
          </div>

          {/* Excerpt Paragraph */}
          <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
