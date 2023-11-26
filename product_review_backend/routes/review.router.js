const express = require('express');
const Review = require('../models/review.model'); 
const Product = require('../models/product.model'); 

const ReviewRouter = express.Router();

// Add a Review for a Product
ReviewRouter.post('/:productId/reviews', async (req, res) => {
  try {
    const review = new Review(req.body);
    const product = await Product.findById(req.params.productId);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.reviews.push(review);
    await Promise.all([review.save(), product.save()]);

    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a Review
ReviewRouter.delete('/:productId/reviews/:reviewId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.reviews.pull({ _id: req.params.reviewId });
    await product.save();

    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Virtual Population of Reviews for a Product
ReviewRouter.get('/:productId/reviews', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate('reviews');
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product.reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = ReviewRouter;
