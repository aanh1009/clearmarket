require('dotenv').config();
const fetch = require('node-fetch');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getStockPrice(ticker) {
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${process.env.ALPHA_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const quote = data["Global Quote"];

  if (!quote || !quote["05. price"]) {
    throw new Error(`No data found for "${ticker}".`);
  }

  return {
    ticker: quote["01. symbol"],
    price: parseFloat(quote["05. price"]),
    change: quote["10. change percent"],
  };
}

async function explainStock(stockData) {
  const chat = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "user",
        content: `Here is stock data for ${stockData.ticker}:
        - Current Price: $${stockData.price}
        - Change Today: ${stockData.change}
        
        Explain this to someone who has zero knowledge of stocks or finance.
        Use simple everyday language and analogies.
        Keep it short, friendly and easy to understand.`
      }
    ]
  });

  return chat.choices[0].message.content;
}

async function main() {
  const stockData = await getStockPrice("AAPL");
  console.log("Raw Data:", stockData);
  
  const explanation = await explainStock(stockData);
  console.log("\nPlain English Explanation:\n", explanation);
}

main().catch(console.error);
