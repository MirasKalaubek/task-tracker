const db = require('./db');

const getAllTasks = async () => {
    const res = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
    return res.rows;
};

const createTask = async (title, description) => {
    const res = await db.query(
        'INSERT INTO tasks (title, description, created_at) VALUES ($1, $2, NOW()) RETURNING *',
        [title, description]
    );
    return res.rows[0];
};

module.exports = {
    getAllTasks,
    createTask
};
