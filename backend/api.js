'use strict';

const alphavantage_key = process.env.AV_API;

async function getSentiment(symbols) {
    var sentiments = {};
    for (const symbol of symbols) {
        const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=${alphavantage_key}&time_from=20260101T0000`;

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        const scores = data?.feed?.map((article) => article?.overall_sentiment_score);
        const score = scores.reduce((acc, val) => acc + val, 0) / scores.length;

        let label;
        if (score <= -0.35) {
            label = "Bearish";
        } else if (score > -0.35 && score <= -0.15) {
            label = "Somewhat Bearish";
        } else if (score > -0.15 && score < 0.15) {
            label = "Neutral";
        } else if (score >= 0.15 && score < 0.35) {
            label = "Somewhat Bullish";
        } else {
            label = "Bullish";
        }

        sentiments[symbol] = { sentiment_score: score, sentiment_label: label };
    }
    return sentiments;
}

async function getTrending() {
    const url = 'https://api.stocktwits.com/api/2/trending/symbols.json';

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
    }
    const data = await res.json();
    return data;
}

module.exports = { getSentiment, getTrending };
