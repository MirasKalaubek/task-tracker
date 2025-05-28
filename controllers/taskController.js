const Task = require('../models/taskModel');
const pool = require('../models/db');

// Получение всех задач
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.getAllTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Создание новой задачи
const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = await Task.createTask(title, description);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Обновление задачи (убран updated_at)
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const result = await pool.query(
            'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *',
            [title, description, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Удаление задачи
const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        res.json({ message: `Task ${id} deleted.` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};
