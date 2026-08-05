const express = require('express');
const router = express.Router();
const { repurposeContent } = require('../services/aiService');

router.post('/', async (req, res) => {
  try {
    const { content } = req.body;
    
    // Validate input
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return res.status(400).json({ success: false, error: 'Content is required and must be a non-empty string.' });
    }
    
    if (content.length > 10000) {
      return res.status(400).json({ success: false, error: 'Content exceeds the maximum limit of 10000 characters.' });
    }
    
    const results = await repurposeContent(content);
    
    res.status(200).json({ success: true, results });
  } catch (error) {
    console.error('Error in repurpose route:', error);
    res.status(500).json({ success: false, error: 'An internal server error occurred while processing the request.' });
  }
});

module.exports = router;
