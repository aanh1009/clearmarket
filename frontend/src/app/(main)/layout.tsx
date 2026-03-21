import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-card-border">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold">
                C
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                ClearMarket
              </span>
            </Link>
            <div className="hidden sm:flex items-center gap-1">
              <Link
                href="/get-started"
                className="px-3 py-1.5 text-sm text-muted hover:text-foreground transition-colors"
              >
                Analyze
              </Link>
              <Link
                href="/get-started"
                className="px-3 py-1.5 text-sm text-muted hover:text-foreground transition-colors"
              >
                Stocks
              </Link>
              <Link
                href="/get-started"
                className="px-3 py-1.5 text-sm text-muted hover:text-foreground transition-colors"
              >
                Paper Trading
              </Link>
              <Link
                href="/get-started"
                className="px-3 py-1.5 text-sm text-muted hover:text-foreground transition-colors"
              >
                News
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-full border border-foreground bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/login"
              className="inline-flex h-9 items-center justify-center rounded-full border border-card-border px-5 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-card-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-foreground text-background text-[10px] font-bold">
              C
            </span>
            <span className="text-sm font-semibold text-foreground">
              ClearMarket
            </span>
          </div>
          <span className="text-xs text-muted">
            Clarity, not prediction. &copy; {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
}
