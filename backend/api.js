'use strict';

const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// --- Trending ---

async function getTrending() {
    const url = 'https://api.stocktwits.com/api/2/trending/symbols.json';
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    return res.json();
}

// --- Stock Price (Financial Modeling Prep) ---

async function getStockPrice(ticker) {
    if (!ticker || typeof ticker !== 'string') {
        throw new Error('Invalid ticker: must be a non-empty string.');
    }
    const symbol = ticker.trim().toUpperCase();
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHA_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    const data = await res.json();
    const quote = data["Global Quote"];
    if (!quote || !quote["05. price"]) {
        throw new Error(`No data found for "${symbol}".`);
    }
    return {
        ticker: quote["01. symbol"],
        price: parseFloat(quote["05. price"]),
        volume: parseInt(quote["06. volume"]),
        change: quote["10. change percent"],
    };
}
// --- Sentiment (AlphaVantage) ---

async function getSentiment(symbols) {
    const sentiments = {};
    for (const symbol of symbols) {
        const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=${process.env.AV_API}&time_from=20260101T0000`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

        const data = await res.json();
        const scores = data?.feed?.map((article) => article?.overall_sentiment_score);
        const score = scores.reduce((acc, val) => acc + val, 0) / scores.length;

        let label;
        if (score <= -0.35)                          label = 'Bearish';
        else if (score > -0.35 && score <= -0.15)    label = 'Somewhat Bearish';
        else if (score > -0.15 && score < 0.15)      label = 'Neutral';
        else if (score >= 0.15 && score < 0.35)      label = 'Somewhat Bullish';
        else                                          label = 'Bullish';

        sentiments[symbol] = { sentiment_score: score, sentiment_label: label };
    }
    return sentiments;
}

// --- AI Explanation (Groq) ---

async function explainStock(stockData) {
    const chat = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages: [{
            role: 'user',
            content: `Here is stock data for ${stockData.ticker}:
- Current Price: $${stockData.price}
- Change Today: ${stockData.change ?? 'N/A'}

Explain this to someone who has zero knowledge of stocks or finance.
Use simple everyday language and analogies.
Keep it short, friendly and easy to understand.`
        }]
    });
    return chat.choices[0].message.content;
}

module.exports = { getTrending, getStockPrice, getSentiment, explainStock };
