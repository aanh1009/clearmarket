"use client";

import { useState } from "react";
import { SourceType } from "@/lib/types";

interface OpinionInputProps {
  onSubmit: (data: {
    text: string;
    ticker: string;
    source: SourceType;
  }) => void;
  loading: boolean;
}

const sourceOptions: { value: SourceType; label: string }[] = [
  { value: "analyst_report", label: "Analyst Report" },
  { value: "news", label: "Financial News" },
  { value: "earnings_summary", label: "Earnings Summary" },
];

export default function OpinionInput({ onSubmit, loading }: OpinionInputProps) {
  const [text, setText] = useState("");
  const [ticker, setTicker] = useState("");
  const [source, setSource] = useState<SourceType>("analyst_report");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit({ text: text.trim(), ticker: ticker.trim().toUpperCase(), source });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="opinion-text"
          className="block text-xs font-medium text-muted mb-2"
        >
          Expert opinion
        </label>
        <textarea
          id="opinion-text"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='e.g. "Goldman Sachs downgraded the stock citing margin compression and macro headwinds."'
          className="w-full rounded-xl border border-card-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 resize-y transition-colors"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="ticker"
            className="block text-xs font-medium text-muted mb-2"
          >
            Ticker <span className="text-muted-dim">(optional)</span>
          </label>
          <input
            id="ticker"
            type="text"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            placeholder="AAPL"
            className="w-full rounded-xl border border-card-border bg-background px-4 py-2.5 text-sm font-mono text-foreground placeholder:text-muted-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="source"
            className="block text-xs font-medium text-muted mb-2"
          >
            Source type
          </label>
          <select
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value as SourceType)}
            className="w-full rounded-xl border border-card-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-colors"
          >
            {sourceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !text.trim()}
        className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-8 text-white text-sm font-medium hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Analyzing...
          </span>
        ) : (
          "Simplify"
        )}
      </button>
    </form>
  );
}
