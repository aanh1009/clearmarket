import Link from "next/link";
import { mockNews, categoryLabels, getTimeAgo } from "@/lib/mockNews";

const previewArticles = mockNews.filter((a) => a.trending).slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28 grid sm:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-[52px] font-bold tracking-tight leading-[1.1] text-foreground">
              Understand
              <br />
              Financial Opinions
            </h1>
            <p className="text-base text-muted leading-relaxed max-w-md">
              Get insights from professional analysts and financial reports.
              Simplified into plain language anyone can understand.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <Link
                href="/login"
                className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-white text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                Sign up
              </Link>
              <Link
                href="/get-started"
                className="inline-flex h-11 items-center text-accent text-sm font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden>
            <div className="rounded-2xl bg-surface border border-card-border p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-bold text-sm">
                  GS
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Goldman Sachs</p>
                  <p className="text-xs text-muted">Analyst Report</p>
                </div>
              </div>
              <div className="border-t border-card-border pt-4 space-y-3">
                <p className="text-xs text-muted italic leading-relaxed">
                  &ldquo;Downgraded due to margin compression and macro headwinds.&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span className="text-xs text-muted">Simplified</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  Experts think the company may make less profit, and the overall economy isn&rsquo;t helping.
                </p>
                <div className="flex gap-1.5">
                  <span className="rounded-full bg-negative-bg text-negative px-2.5 py-0.5 text-[11px] font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-negative" />
                    Negative
                  </span>
                  <span className="rounded-full bg-surface border border-card-border px-2.5 py-0.5 text-[11px] text-muted">
                    Earnings
                  </span>
                  <span className="rounded-full bg-surface border border-card-border px-2.5 py-0.5 text-[11px] text-muted">
                    Economy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features row */}
      <section className="border-t border-card-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Simplify expert opinions",
                description:
                  "Paste any analyst quote or financial headline. We translate Wall Street jargon into plain language instantly.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Learn why the markets are moving",
                description:
                  "See whether an opinion is positive, negative, or neutral with color-coded sentiment indicators and reason tags.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Understand the impact",
                description:
                  'Every analysis includes a "What this means" section so you understand how it could affect investors.',
              },
            ].map((feature) => (
              <div key={feature.title} className="space-y-3">
                <span className="text-accent">{feature.icon}</span>
                <h3 className="text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-card-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-lg space-y-4 mb-12">
            <p className="text-sm font-medium text-accent">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground">
              Access powerful
              <br />
              investing tools
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-card-border bg-card p-8 space-y-4">
              <h3 className="text-base font-semibold text-foreground">
                Paste or fetch expert opinion
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Start with any professional financial opinion -- analyst summaries,
                upgrades/downgrades, or earnings call highlights. Just paste and go.
              </p>
            </div>
            <div className="rounded-2xl border border-card-border bg-card p-8 space-y-4">
              <h3 className="text-base font-semibold text-foreground">
                One-click simplification
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Get a simplified version, sentiment classification, reason tags, and
                beginner-friendly context explaining what the opinion means for investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="border-t border-card-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid sm:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p className="text-sm font-medium text-accent">Stay informed</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-foreground">
                Financial news,
                <br />
                simplified
              </h2>
              <p className="text-sm text-muted leading-relaxed max-w-md">
                Get the latest market headlines with one-click simplification and
                key takeaways -- so you always understand what&rsquo;s moving the markets.
              </p>
              <Link
                href="/get-started"
                className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-white text-sm font-medium hover:bg-accent-hover transition-colors mt-2"
              >
                Read the news &rarr;
              </Link>
            </div>

            <div className="space-y-3">
              {previewArticles.map((article) => (
                <Link
                  key={article.id}
                  href="/get-started"
                  className="flex gap-4 rounded-xl border border-card-border bg-card p-4 hover:shadow-sm hover:border-accent-border transition-all group"
                >
                  <div
                    className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-lg items-center justify-center"
                    style={{ background: `${article.imageColor}15` }}
                  >
                    <span
                      className="text-[10px] font-bold font-mono"
                      style={{ color: article.imageColor }}
                    >
                      {article.tickers[0] || categoryLabels[article.category].slice(0, 3).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2 text-[10px] text-muted">
                      <span className="font-medium">{article.source}</span>
                      <span>&middot;</span>
                      <span>{getTimeAgo(article.timestamp)}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-1 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-1">
                      {article.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-card-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Start understanding the markets
          </h2>
          <p className="text-muted text-sm max-w-md mx-auto">
            Analyze financial opinions in seconds. No account required.
          </p>
          <Link
            href="/get-started"
            className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-8 text-white text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}
