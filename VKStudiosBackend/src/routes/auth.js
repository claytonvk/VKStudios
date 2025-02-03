const express = require("express");
const router = express.Router();
const db = require("../config/db");

// User Signup
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    await db.execute(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
