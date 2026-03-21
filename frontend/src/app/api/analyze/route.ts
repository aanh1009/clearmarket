import { NextRequest, NextResponse } from "next/server";
import { InterpretationResult, SourceType } from "@/lib/types";

interface AnalyzeBody {
  text: string;
  ticker?: string;
  source: SourceType;
}

const negativeKeywords = [
  "downgrade",
  "cut",
  "lower",
  "risk",
  "headwind",
  "compression",
  "decline",
  "weak",
  "concern",
  "investigation",
  "scrutiny",
];
const positiveKeywords = [
  "upgrade",
  "buy",
  "overweight",
  "strong",
  "beat",
  "growth",
  "improve",
  "momentum",
  "outperform",
  "raise",
];

function detectSentiment(text: string): InterpretationResult["sentiment"] {
  const lower = text.toLowerCase();
  const pos = positiveKeywords.filter((w) => lower.includes(w)).length;
  const neg = negativeKeywords.filter((w) => lower.includes(w)).length;
  if (pos > neg) return "positive";
  if (neg > pos) return "negative";
  return "neutral";
}

function detectReasons(text: string): InterpretationResult["reasonTags"] {
  const lower = text.toLowerCase();
  const tags: InterpretationResult["reasonTags"] = [];
  if (/margin|revenue|earning|profit|eps/i.test(lower)) tags.push("earnings");
  if (/macro|economy|gdp|inflation|interest rate/i.test(lower)) tags.push("economy");
  if (/compet|rival|market share/i.test(lower)) tags.push("competition");
  if (/regulat|compliance|sec|fda|nhtsa|investigat/i.test(lower)) tags.push("regulation");
  return tags.length > 0 ? tags : ["earnings"];
}

export async function POST(request: NextRequest) {
  const body: AnalyzeBody = await request.json();

  if (!body.text || body.text.trim().length === 0) {
    return NextResponse.json(
      { error: "Text is required" },
      { status: 400 }
    );
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  const sentiment = detectSentiment(body.text);
  const reasonTags = detectReasons(body.text);

  const sentimentPhrases = {
    positive: {
      simple: "Experts are optimistic about this company's outlook.",
      eli12: "People who study this company think things are looking good for it!",
      context: "This usually makes investors more confident in the stock.",
    },
    negative: {
      simple: "Experts are concerned about this company's near-term prospects.",
      eli12: "The people who study this company are a bit worried about how it'll do.",
      context: "This kind of outlook usually makes investors feel less confident in the stock.",
    },
    neutral: {
      simple: "Experts have a mixed or cautious view on this company right now.",
      eli12: "The experts aren't sure if things will get better or worse for this company.",
      context: "A neutral outlook means investors may wait for more information before acting.",
    },
  };

  const phrases = sentimentPhrases[sentiment];

  const result: InterpretationResult = {
    id: `analysis-${Date.now()}`,
    ticker: body.ticker || "N/A",
    source: body.source,
    originalText: body.text,
    simpleSummary: phrases.simple,
    eli12Summary: phrases.eli12,
    sentiment,
    reasonTags,
    whatItMeans: phrases.context,
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(result);
}
