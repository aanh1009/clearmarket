export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  simplified: string;
  keyTakeaway: string;
  source: string;
  category: NewsCategory;
  tickers: string[];
  timestamp: string;
  readTime: number;
  trending: boolean;
  imageColor: string;
}

export type NewsCategory =
  | "markets"
  | "earnings"
  | "economy"
  | "crypto"
  | "tech"
  | "commodities";

export const categoryLabels: Record<NewsCategory, string> = {
  markets: "Markets",
  earnings: "Earnings",
  economy: "Economy",
  crypto: "Crypto",
  tech: "Tech",
  commodities: "Commodities",
};

export const mockNews: NewsArticle[] = [
  {
    id: "n1",
    title: "S&P 500 Hits All-Time High as Tech Rally Extends Into Third Week",
    summary:
      "Major indexes surged on Thursday as investor optimism around AI spending and strong earnings from mega-cap tech companies fueled a broad market rally.",
    simplified:
      "The stock market is doing really well right now. Big tech companies are making lots of money, especially from AI, and that's making investors happy and pushing prices up.",
    keyTakeaway:
      "Tech stocks are driving the market to record highs. If you own tech stocks, they're likely up. If you don't, this rally may make buying in more expensive.",
    source: "Reuters",
    category: "markets",
    tickers: ["SPY", "AAPL", "MSFT", "NVDA"],
    timestamp: "2026-03-21T14:30:00Z",
    readTime: 3,
    trending: true,
    imageColor: "#4c5ee4",
  },
  {
    id: "n2",
    title: "Federal Reserve Signals Potential Rate Cut in June Meeting",
    summary:
      "Fed Chair Jerome Powell indicated the central bank is closely monitoring inflation data and may begin easing monetary policy sooner than previously expected.",
    simplified:
      "The person in charge of America's central bank hinted that interest rates might go down soon. Lower rates usually mean cheaper loans and can help the economy grow.",
    keyTakeaway:
      "A rate cut would make borrowing cheaper, which is usually good for stocks and housing but may weaken savings account returns.",
    source: "Bloomberg",
    category: "economy",
    tickers: [],
    timestamp: "2026-03-21T12:15:00Z",
    readTime: 4,
    trending: true,
    imageColor: "#00b853",
  },
  {
    id: "n3",
    title: "NVIDIA Reports Record Q4 Revenue, Beats Estimates by 12%",
    summary:
      "NVIDIA posted $38.2 billion in quarterly revenue driven by unprecedented demand for AI chips. Data center revenue alone grew 93% year-over-year.",
    simplified:
      "NVIDIA made way more money than anyone expected, mostly because everyone wants their AI chips. Their data center business nearly doubled compared to last year.",
    keyTakeaway:
      "NVIDIA continues to dominate the AI chip market. Strong earnings like this often boost the stock price and signal that AI spending is still accelerating.",
    source: "CNBC",
    category: "earnings",
    tickers: ["NVDA"],
    timestamp: "2026-03-21T10:00:00Z",
    readTime: 5,
    trending: true,
    imageColor: "#76b900",
  },
  {
    id: "n4",
    title: "Bitcoin Surpasses $95,000 Amid Institutional Inflows",
    summary:
      "Bitcoin reached new highs as spot ETF inflows topped $2.1 billion this week. Analysts point to growing institutional adoption and upcoming halving effects.",
    simplified:
      "Bitcoin hit a new record price because big investment firms are pouring money into Bitcoin funds. There's also a supply-reducing event coming up that could push prices higher.",
    keyTakeaway:
      "Institutional money is flowing into Bitcoin at scale. This suggests growing mainstream acceptance, but prices at all-time highs also carry higher risk.",
    source: "CoinDesk",
    category: "crypto",
    tickers: ["BTC"],
    timestamp: "2026-03-21T08:45:00Z",
    readTime: 3,
    trending: true,
    imageColor: "#f7931a",
  },
  {
    id: "n5",
    title: "Apple Unveils Next-Gen AI Features for iPhone at Spring Event",
    summary:
      "Apple announced a suite of on-device AI capabilities including a revamped Siri, real-time language translation, and AI-powered photo editing tools.",
    simplified:
      "Apple showed off new AI features for iPhones -- a smarter Siri, instant language translation, and smart photo editing, all running directly on the phone.",
    keyTakeaway:
      "Apple is betting big on AI to sell more iPhones. These features could drive an upgrade cycle and help Apple compete with Google and Samsung in the AI space.",
    source: "The Verge",
    category: "tech",
    tickers: ["AAPL"],
    timestamp: "2026-03-20T18:00:00Z",
    readTime: 4,
    trending: false,
    imageColor: "#333333",
  },
  {
    id: "n6",
    title: "Oil Prices Climb as OPEC+ Extends Production Cuts Through Q3",
    summary:
      "Brent crude rose 3.2% after OPEC+ members agreed to maintain current production limits, tightening global supply amid geopolitical uncertainty.",
    simplified:
      "Oil prices went up because the countries that produce oil decided to keep making less of it. When there's less oil available, the price goes up.",
    keyTakeaway:
      "Higher oil prices can increase costs for businesses and consumers (gas, shipping, travel). Energy stocks may benefit, but it could add to inflation.",
    source: "Financial Times",
    category: "commodities",
    tickers: ["USO"],
    timestamp: "2026-03-20T15:30:00Z",
    readTime: 3,
    trending: false,
    imageColor: "#8b6914",
  },
  {
    id: "n7",
    title: "Tesla Deliveries Surge 28% in Q1, Exceeding Wall Street Forecasts",
    summary:
      "Tesla delivered 495,000 vehicles in Q1 2026, surpassing analyst estimates of 460,000. The company cited strong demand for the refreshed Model Y.",
    simplified:
      "Tesla sold a lot more cars than expected this quarter -- almost 500,000. People really like the new version of their popular Model Y car.",
    keyTakeaway:
      "Beating delivery estimates is a strong positive signal for Tesla. It shows demand is healthy and could lead to higher revenue and profit this quarter.",
    source: "Reuters",
    category: "earnings",
    tickers: ["TSLA"],
    timestamp: "2026-03-20T11:20:00Z",
    readTime: 3,
    trending: false,
    imageColor: "#cc0000",
  },
  {
    id: "n8",
    title: "Microsoft Azure Revenue Growth Accelerates to 34% YoY",
    summary:
      "Microsoft's cloud division reported accelerating growth driven by enterprise AI workloads, pushing the company's market cap above $3.5 trillion.",
    simplified:
      "Microsoft's cloud business is growing even faster than before, mostly because companies are using it for AI. Microsoft is now worth over $3.5 trillion.",
    keyTakeaway:
      "Accelerating growth (not just growing, but growing faster) is a rare and bullish signal. It suggests AI demand is creating a new wave of cloud spending.",
    source: "Bloomberg",
    category: "earnings",
    tickers: ["MSFT"],
    timestamp: "2026-03-20T09:00:00Z",
    readTime: 4,
    trending: false,
    imageColor: "#0078d4",
  },
  {
    id: "n9",
    title: "Consumer Confidence Index Rises to 18-Month High",
    summary:
      "The Conference Board reported consumer confidence reached 114.2 in March, reflecting optimism about the labor market and easing inflation expectations.",
    simplified:
      "People are feeling more positive about the economy than they have in a year and a half. They feel good about jobs being available and prices not going up as fast.",
    keyTakeaway:
      "When consumers feel confident, they tend to spend more, which is good for businesses and the economy. This is generally a positive sign for stocks.",
    source: "AP",
    category: "economy",
    tickers: [],
    timestamp: "2026-03-19T16:00:00Z",
    readTime: 2,
    trending: false,
    imageColor: "#2563eb",
  },
  {
    id: "n10",
    title: "JPMorgan Raises S&P 500 Year-End Target to 6,200",
    summary:
      "JPMorgan strategists raised their S&P 500 target citing AI-driven productivity gains, resilient consumer spending, and improving corporate margins.",
    simplified:
      "One of the biggest banks thinks the stock market will keep going up this year. They believe AI is helping companies make more money and people keep spending.",
    keyTakeaway:
      "When major banks raise their targets, it can boost investor confidence. However, targets are predictions, not guarantees -- the market can always move differently.",
    source: "CNBC",
    category: "markets",
    tickers: ["JPM", "SPY"],
    timestamp: "2026-03-19T13:45:00Z",
    readTime: 3,
    trending: false,
    imageColor: "#004e8a",
  },
  {
    id: "n11",
    title: "Gold Hits $2,450 as Investors Hedge Against Geopolitical Risks",
    summary:
      "Gold prices reached record levels driven by central bank buying and increased safe-haven demand amid escalating tensions in Eastern Europe.",
    simplified:
      "Gold is at its highest price ever because investors buy gold when they're worried about world events. Central banks around the world are also stocking up.",
    keyTakeaway:
      "Gold rising sharply usually signals fear in the market. It can be a good portfolio diversifier but doesn't generate income like stocks or bonds.",
    source: "Financial Times",
    category: "commodities",
    tickers: ["GLD"],
    timestamp: "2026-03-19T10:30:00Z",
    readTime: 3,
    trending: false,
    imageColor: "#d4a017",
  },
  {
    id: "n12",
    title: "Ethereum Layer-2 Networks See Record Transaction Volume",
    summary:
      "Arbitrum and Optimism processed over 15 million transactions combined last week as DeFi activity surges on lower-cost Ethereum scaling solutions.",
    simplified:
      "Ethereum's helper networks are handling more transactions than ever because they're cheaper and faster. More people are using them for decentralized finance apps.",
    keyTakeaway:
      "Growing Layer-2 usage is bullish for Ethereum's ecosystem. It shows real adoption, but also means the base Ethereum network may collect less in fees.",
    source: "CoinDesk",
    category: "crypto",
    tickers: ["ETH"],
    timestamp: "2026-03-19T08:00:00Z",
    readTime: 4,
    trending: false,
    imageColor: "#627eea",
  },
];

export function getTimeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}
