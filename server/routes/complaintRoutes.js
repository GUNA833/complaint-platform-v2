const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

router.post('/', async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.json(complaint);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put('/:id/assign', async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(req.params.id, {
      assignedTo: req.body.assignedTo,
      status: 'Assigned'
    }, { new: true });
    res.json(complaint);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/:id/status', async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    res.json({ status: complaint.status });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
