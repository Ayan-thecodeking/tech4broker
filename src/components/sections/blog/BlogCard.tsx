import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
        "group flex flex-col h-full bg-white transition-all duration-300 select-none",
        className
      )}
    >
      <Link
        href={post.url || "#"}
        className="flex flex-col h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 rounded-2xl"
        aria-label={`Read article: ${post.title}`}
      >
        {/* Top Image (4:3 Aspect Ratio with rounded corners matching reference) */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
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
          {/* Title Row with Top-Right Diagonal Arrow */}
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900 leading-[1.3] group-hover:text-blue-600 transition-colors duration-200">
              {post.title}
            </h3>
            <div className="p-0.5 shrink-0 text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
              <ArrowUpRight
                className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Excerpt Paragraph */}
          <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          {/* Author & Metadata Footer (matches bottom of card in uploaded image) */}
          <div className="mt-auto pt-4 flex items-center gap-3 border-t border-slate-100">
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-slate-200 shrink-0 ring-1 ring-slate-200">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col text-xs">
              <span className="font-semibold text-slate-800 leading-tight">
                {post.author.name}
              </span>
              <span className="text-slate-400 mt-0.5">
                {post.date} • {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
