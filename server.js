const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/nurturenest', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// User Model
const User = mongoose.model('User', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}));

// ➕ Signup Route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    return res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    console.error("❌ Signup Error:", err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Login Route (Returns Proper JSON Always)
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login attempt:", email, password);

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("✅ Login successful:", user.name);

    return res.status(200).json({
      message: "Login successful",
      user: { name: user.name, email: user.email }
    });

  } catch (err) {
    console.error("❌ Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

// 🔒 Catch-All for 404s (Prevents HTML responses)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
