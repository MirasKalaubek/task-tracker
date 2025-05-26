const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config(); // Загружаем переменные из .env

const app = express();

// Мидлвары
app.use(express.json()); // для работы с JSON

// Роуты
app.use('/tasks', taskRoutes);

// Обработка корневого запроса (необязательно, но полезно)
app.get('/', (req, res) => {
    res.send('Task Tracker API is running');
});

module.exports = app;
