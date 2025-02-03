const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Import Routes
const authRoutes = require("./src/routes/auth");
const galleryRoutes = require("./src/routes/galleries");

// Use API Routes
app.use("/api/auth", authRoutes);
app.use("/api/galleries", galleryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
