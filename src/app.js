require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes");
const sequelize = require("./config/sequelize");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", schoolRoutes);

// 🔄 Sync models with DB
sequelize
  .sync()
  .then(() => {
    console.log("✅ All models synchronized with the database.");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Failed to sync models:", err.message);
  });
