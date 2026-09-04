import { Router } from 'express';
import Inquiry from '../models/Inquiry.js';

const router = Router();

// POST /api/inquiries — create a new lead from the enquiry form
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, message, property } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'name and phone are required' });
    }
    const inquiry = await Inquiry.create({ name, phone, email, message, property });
    res.status(201).json(inquiry);
  } catch (err) {
    res.status(500).json({ error: 'Could not save inquiry', details: err.message });
  }
});

// GET /api/inquiries — list leads (admin use)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch inquiries', details: err.message });
  }
});

// PATCH /api/inquiries/:id — update lead status (admin use)
router.patch('/:id', async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!inquiry) return res.status(404).json({ error: 'Inquiry not found' });
    res.json(inquiry);
  } catch (err) {
    res.status(500).json({ error: 'Could not update inquiry', details: err.message });
  }
});

export default router;
