"use client";

import { useState } from "react";
import { TradeAction } from "@/lib/types";
import { getPrice, getAllTickers } from "@/lib/paperTradingStore";

function fmt(n: number): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

interface TradeFormProps {
  cashBalance: number;
  ownedShares: (ticker: string) => number;
  onTrade: (ticker: string, action: TradeAction, shares: number) => void;
  error: string | null;
  success: string | null;
}

export default function TradeForm({
  cashBalance,
  ownedShares,
  onTrade,
  error,
  success,
}: TradeFormProps) {
  const [ticker, setTicker] = useState(getAllTickers()[0]);
  const [action, setAction] = useState<TradeAction>("buy");
  const [sharesStr, setSharesStr] = useState("");

  const shares = parseInt(sharesStr, 10);
  const price = getPrice(ticker);
  const estimatedTotal =
    price && shares > 0 ? Math.round(price * shares * 100) / 100 : 0;
  const currentlyOwned = ownedShares(ticker);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shares || shares <= 0) return;
    onTrade(ticker, action, shares);
    setSharesStr("");
  };

  return (
    <div className="rounded-2xl border border-card-border bg-card p-6 space-y-5">
      <h3 className="text-sm font-semibold text-foreground">Place a Trade</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Buy / Sell toggle */}
        <div className="flex rounded-lg border border-card-border overflow-hidden">
          {(["buy", "sell"] as TradeAction[]).map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAction(a)}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                action === a
                  ? a === "buy"
                    ? "bg-positive text-white"
                    : "bg-negative text-white"
                  : "bg-transparent text-muted hover:bg-surface"
              }`}
            >
              {a === "buy" ? "Buy" : "Sell"}
            </button>
          ))}
        </div>

        {/* Ticker */}
        <div>
          <label
            htmlFor="pt-ticker"
            className="block text-xs font-medium text-muted mb-2"
          >
            Ticker
          </label>
          <select
            id="pt-ticker"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            className="w-full rounded-xl border border-card-border bg-background px-4 py-2.5 text-sm font-mono text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-colors"
          >
            {getAllTickers().map((t) => {
              const p = getPrice(t);
              return (
                <option key={t} value={t}>
                  {t} &mdash; ${p ? fmt(p) : "N/A"}
                </option>
              );
            })}
          </select>
        </div>

        {/* Shares */}
        <div>
          <label
            htmlFor="pt-shares"
            className="block text-xs font-medium text-muted mb-2"
          >
            Shares
          </label>
          <input
            id="pt-shares"
            type="number"
            min="1"
            step="1"
            value={sharesStr}
            onChange={(e) => setSharesStr(e.target.value)}
            placeholder="0"
            className="w-full rounded-xl border border-card-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-colors"
            required
          />
        </div>

        {/* Order preview */}
        <div className="rounded-xl bg-surface border border-card-border p-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted">Price per share</span>
            <span className="text-foreground font-medium">
              {price ? `$${fmt(price)}` : "—"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Estimated total</span>
            <span className="text-foreground font-medium">
              {estimatedTotal > 0 ? `$${fmt(estimatedTotal)}` : "—"}
            </span>
          </div>
          {action === "buy" && (
            <div className="flex justify-between">
              <span className="text-muted">Buying power</span>
              <span className="text-foreground">${fmt(cashBalance)}</span>
            </div>
          )}
          {action === "sell" && (
            <div className="flex justify-between">
              <span className="text-muted">Shares owned</span>
              <span className="text-foreground">{currentlyOwned}</span>
            </div>
          )}
        </div>

        {error && (
          <div className="rounded-lg border border-negative/20 bg-negative-bg p-3 text-xs text-negative">
            {error}
          </div>
        )}
        {success && (
          <div className="rounded-lg border border-positive/20 bg-positive-bg p-3 text-xs text-positive">
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={!shares || shares <= 0}
          className={`w-full h-11 rounded-full text-sm font-medium text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
            action === "buy"
              ? "bg-positive hover:bg-positive/90"
              : "bg-negative hover:bg-negative/90"
          }`}
        >
          {action === "buy" ? "Buy" : "Sell"} {ticker}
        </button>
      </form>
    </div>
  );
}
