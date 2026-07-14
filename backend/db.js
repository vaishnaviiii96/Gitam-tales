const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_6RMQtn9KXjoa@ep-muddy-fire-a1yir6go-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
