const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Попытка подключения с повторами
async function ensureTableWithRetry(retries = 5, delay = 3000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            await pool.query(`
                CREATE TABLE IF NOT EXISTS tasks (
                    id SERIAL PRIMARY KEY,
                    title TEXT NOT NULL,
                    description TEXT,
                    status TEXT DEFAULT 'pending',
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `);
            console.log("✅ Table 'tasks' ensured");
            return;
        } catch (err) {
            console.log(`❌ Failed to connect (attempt ${attempt}), retrying in ${delay / 1000}s...`);
            if (attempt === retries) {
                console.error("❌ Final attempt failed:", err);
                process.exit(1);
            }
            await new Promise(res => setTimeout(res, delay));
        }
    }
}

ensureTableWithRetry();

module.exports = pool;
