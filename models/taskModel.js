const db = require('./db');

const getAllTasks = async () => {
    const res = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
    return res.rows;
};

const createTask = async (title, description) => {
    const res = await db.query(
        'INSERT INTO tasks (title, description, status, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *',
        [title, description, 'pending']
    );
    return res.rows[0];
};

module.exports = {
    getAllTasks,
    createTask
};
