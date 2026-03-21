require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getSentiment, getTrending } = require('./api');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// GET /api/trending
// Returns trending stock symbols from Stocktwits
app.get('/api/trending', async (req, res) => {
    const data = await getTrending();
    res.json(data);
});

// GET /api/sentiment?symbols=AAPL,TSLA,MSFT
// Returns sentiment score and label for each symbol
app.get('/api/sentiment', async (req, res) => {
    if (!req.query.symbols) {
        return res.status(400).json({ error: 'symbols query param required' });
    }
    const symbols = req.query.symbols.split(',');
    const data = await getSentiment(symbols);
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
