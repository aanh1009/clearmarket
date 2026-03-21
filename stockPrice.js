async function getStockPrice(ticker, apiKey) {
  if (!ticker || typeof ticker !== "string") {
    throw new Error("Invalid ticker: ticker must be a non-empty string.");
  }

  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("Invalid API key: apiKey must be a non-empty string.");
  }

  const normalizedTicker = ticker.trim().toUpperCase();

  if (!normalizedTicker) {
    throw new Error("Invalid ticker: ticker cannot be empty.");
  }

  const url = `https://financialmodelingprep.com/api/v3/quote-short/${encodeURIComponent(
    normalizedTicker
  )}?apikey=${encodeURIComponent(apiKey)}`;

  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    throw new Error(`API call failed: ${error.message}`);
  }

  if (!response.ok) {
    throw new Error(`API call failed with status ${response.status}.`);
  }

  let data;
  try {
    data = await response.json();
  } catch (error) {
    throw new Error("API response is not valid JSON.");
  }

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error(`Invalid ticker or no data found for "${normalizedTicker}".`);
  }

  const quote = data[0];

  if (
    !quote ||
    typeof quote.symbol !== "string" ||
    typeof quote.price !== "number" ||
    typeof quote.volume !== "number"
  ) {
    throw new Error(`Unexpected API response format for "${normalizedTicker}".`);
  }

  return {
    ticker: quote.symbol,
    price: quote.price,
    volume: quote.volume,
  };
}

getStockPrice("AAPL", process.env.FMP_API_KEY)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
