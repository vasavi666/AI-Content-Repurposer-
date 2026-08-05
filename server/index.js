require('dotenv').config();
const express = require('express');
const cors = require('cors');

const repurposeRoutes = require('./routes/repurpose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow all origins for dev
app.use(express.json({ limit: '50kb' }));

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is healthy' });
});

// API Routes
app.use('/api/repurpose', repurposeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
