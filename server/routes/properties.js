import { Router } from 'express';
import Property from '../models/Property.js';

const router = Router();

// GET /api/properties — list all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch properties', details: err.message });
  }
});

// GET /api/properties/:slug — fetch one property by name (case-insensitive)
router.get('/:name', async (req, res) => {
  try {
    const property = await Property.findOne({
      name: new RegExp(`^${req.params.name}$`, 'i'),
    });
    if (!property) return res.status(404).json({ error: 'Property not found' });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch property', details: err.message });
  }
});

export default router;
