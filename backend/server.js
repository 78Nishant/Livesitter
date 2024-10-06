const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/overlayDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema for Overlay settings
const overlaySchema = new mongoose.Schema({
  text: String,
  position: String,
  size: String,
  videoURL: String,
});

const Overlay = mongoose.model('Overlay', overlaySchema);

// Create Overlay
app.post('/overlays', async (req, res) => {
  const { text, position, size, videoURL } = req.body;
  const newOverlay = new Overlay({ text, position, size, videoURL });
  await newOverlay.save();
  res.status(201).json(newOverlay);
});

// Get all Overlays
app.get('/overlays', async (req, res) => {
  const overlays = await Overlay.find();
  res.status(200).json(overlays);
});

// Update Overlay
app.put('/overlays/:id', async (req, res) => {
  const { id } = req.params;
  const { text, position, size, videoURL } = req.body;
  const updatedOverlay = await Overlay.findByIdAndUpdate(id, { text, position, size, videoURL }, { new: true });
  res.status(200).json(updatedOverlay);
});

// Delete Overlay
app.delete('/overlays/:id', async (req, res) => {
  const { id } = req.params;
  await Overlay.findByIdAndDelete(id);
  res.status(200).json({ message: 'Overlay deleted' });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
