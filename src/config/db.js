const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
  ssl: {
    rejectUnauthorized: false, // Allow self-signed Render SSL cert
  },
});

pool.on("connect", () => {
  console.log("✅ PostgreSQL connected successfully...");
});

module.exports = pool;
