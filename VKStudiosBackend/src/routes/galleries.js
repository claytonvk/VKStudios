const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all galleries for a user
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const [galleries] = await db.execute("SELECT * FROM galleries WHERE user_id = ?", [userId]);
    res.json(galleries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new gallery
router.post("/", async (req, res) => {
  const { userId, title, description } = req.body;
  try {
    await db.execute(
      "INSERT INTO galleries (user_id, title, description) VALUES (?, ?, ?)",
      [userId, title, description]
    );
    res.status(201).json({ message: "Gallery created successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
