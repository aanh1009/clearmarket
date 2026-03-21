import Link from "next/link";

const quickActions = [
  {
    href: "/dashboard/analyze",
    title: "Analyze",
    description: "Paste an expert opinion and get a simplified breakdown with sentiment and context.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    cta: "Analyze an opinion",
  },
  {
    href: "/dashboard/stocks/AAPL",
    title: "Stocks",
    description: "Browse stock opinions with simplified summaries, sentiment scores, and reason tags.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    cta: "View stocks",
  },
  {
    href: "/dashboard/paper-trading",
    title: "Paper Trading",
    description: "Practice with $100,000 in simulated funds. Trade stocks risk-free and track your performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    cta: "Start trading",
  },
  {
    href: "/dashboard/news",
    title: "News",
    description: "Stay up to date with the latest financial news, market trends, and earnings reports.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    cta: "Read the news",
  },
];

export default function DashboardHome() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10 space-y-10">
      {/* Welcome */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Welcome back
        </h1>
        <p className="text-muted text-sm">
          Here&rsquo;s what you can do on ClearMarket.
        </p>
      </div>

      {/* Quick action cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="group rounded-2xl border border-card-border bg-card p-6 space-y-4 hover:border-accent/30 hover:shadow-sm transition-all"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/8 text-accent group-hover:bg-accent/12 transition-colors">
              {action.icon}
            </span>
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-foreground">
                {action.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {action.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-accent group-hover:underline">
              {action.cta}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* Quick stats */}
      <div className="rounded-2xl border border-card-border bg-card p-6 space-y-5">
        <h2 className="text-xs font-medium text-muted uppercase tracking-wider">
          Getting Started
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-surface border border-card-border p-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-positive/10 text-positive inline-flex items-center justify-center text-xs">
                1
              </span>
              <p className="text-sm font-medium text-foreground">
                Analyze an opinion
              </p>
            </div>
            <p className="text-xs text-muted leading-relaxed pl-8">
              Paste any financial headline or analyst quote to see it simplified with sentiment analysis.
            </p>
          </div>
          <div className="rounded-xl bg-surface border border-card-border p-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-positive/10 text-positive inline-flex items-center justify-center text-xs">
                2
              </span>
              <p className="text-sm font-medium text-foreground">
                Browse stock opinions
              </p>
            </div>
            <p className="text-xs text-muted leading-relaxed pl-8">
              Explore recent expert opinions on popular stocks with sentiment breakdowns.
            </p>
          </div>
          <div className="rounded-xl bg-surface border border-card-border p-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-positive/10 text-positive inline-flex items-center justify-center text-xs">
                3
              </span>
              <p className="text-sm font-medium text-foreground">
                Start paper trading
              </p>
            </div>
            <p className="text-xs text-muted leading-relaxed pl-8">
              Use your $100,000 in simulated funds to practice buying and selling stocks.
            </p>
          </div>
          <div className="rounded-xl bg-surface border border-card-border p-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-positive/10 text-positive inline-flex items-center justify-center text-xs">
                4
              </span>
              <p className="text-sm font-medium text-foreground">
                Track your performance
              </p>
            </div>
            <p className="text-xs text-muted leading-relaxed pl-8">
              Monitor your portfolio value, gain/loss, and full trade history over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
