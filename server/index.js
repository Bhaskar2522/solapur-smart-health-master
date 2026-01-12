const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// Use local MongoDB or Mongo Atlas URI from .env
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/solapur_smart_health';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('Solapur Municipal Corporation Smart Health API Running');
});

// Example Model and Route for testing
const IncidentSchema = new mongoose.Schema({
    title: String,
    description: String,
    severity: String, // Low, Medium, High
    location: String,
    date: { type: Date, default: Date.now }
});

const Incident = mongoose.model('Incident', IncidentSchema);

app.get('/api/incidents', async (req, res) => {
    try {
        const incidents = await Incident.find().sort({ date: -1 });
        res.json(incidents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/incidents', async (req, res) => {
    const incident = new Incident({
        title: req.body.title,
        description: req.body.description,
        severity: req.body.severity,
        location: req.body.location
    });

    try {
        const newIncident = await incident.save();
        res.status(201).json(newIncident);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
