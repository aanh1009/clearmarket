import Link from "next/link";
import { getMockResultsForTicker, availableTickers } from "@/lib/mockData";
import StockOpinionList from "@/components/StockOpinionList";
import SentimentDistribution from "@/components/SentimentDistribution";

interface StockPageProps {
  params: Promise<{ ticker: string }>;
}

export default async function StockPage({ params }: StockPageProps) {
  const { ticker } = await params;
  const upperTicker = ticker.toUpperCase();
  const opinions = getMockResultsForTicker(upperTicker);

  return (
    <div className="mx-auto max-w-2xl px-6 py-10 space-y-8">
      <div className="space-y-5">
        <div className="space-y-1">
          <p className="text-xs text-muted">Alphabetical Index of</p>
          <h1 className="text-2xl font-bold tracking-tight font-mono text-foreground">
            {upperTicker}
          </h1>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {availableTickers.map((t) => (
            <Link
              key={t}
              href={`/dashboard/stocks/${t}`}
              className={`rounded-full px-3.5 py-1.5 text-sm font-mono font-medium border transition-colors ${
                t === upperTicker
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent border-card-border text-muted hover:text-foreground hover:border-muted"
              }`}
            >
              {t}
            </Link>
          ))}
        </div>

        <p className="text-sm text-muted">
          {opinions.length} opinion{opinions.length !== 1 ? "s" : ""} available
        </p>
      </div>

      <SentimentDistribution opinions={opinions} />

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-medium text-muted">
            Recent Opinions
          </h2>
        </div>
        <StockOpinionList opinions={opinions} />
      </div>
    </div>
  );
}
