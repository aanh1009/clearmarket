"use client";

import { useState } from "react";
import {
  mockNews,
  categoryLabels,
  type NewsCategory,
} from "@/lib/mockNews";
import TrendingStory from "@/components/news/TrendingStory";
import NewsCard from "@/components/news/NewsCard";

const allCategories: ("all" | NewsCategory)[] = [
  "all",
  "markets",
  "earnings",
  "economy",
  "crypto",
  "tech",
  "commodities",
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | NewsCategory>(
    "all"
  );

  const trending = mockNews.filter((a) => a.trending);
  const filtered =
    activeCategory === "all"
      ? mockNews.filter((a) => !a.trending)
      : mockNews.filter(
          (a) => a.category === activeCategory && !a.trending
        );

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          News
        </h1>
        <p className="text-muted text-sm">
          Latest financial news and market updates.
        </p>
      </div>

      {/* Trending section */}
      {activeCategory === "all" && trending.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-negative opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-negative" />
            </span>
            <h2 className="text-xs font-medium text-muted uppercase tracking-wider">
              Trending Now
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((article) => (
              <TrendingStory key={article.id} article={article} />
            ))}
          </div>
        </div>
      )}

      {/* Category filter */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent border-card-border text-muted hover:text-foreground hover:border-muted"
            }`}
          >
            {cat === "all" ? "All" : categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* News feed */}
      <div className="space-y-3">
        <h2 className="text-xs font-medium text-muted uppercase tracking-wider">
          {activeCategory === "all" ? "Latest" : categoryLabels[activeCategory]}
        </h2>
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-card-border bg-card p-10 text-center">
            <p className="text-muted text-sm">
              No articles in this category right now.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
