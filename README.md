# 🗂️ Task Tracker API

Простой RESTful API для управления задачами, написанный на **Node.js**, с использованием **Express** и **PostgreSQL**.

## 🚀 Стек технологий

- **Node.js** + **Express** — backend-сервер
- **PostgreSQL** — база данных
- **pg** — библиотека подключения к PostgreSQL
- **dotenv** — переменные окружения
- **nodemon** — автообновление сервера при разработке

---

## 📦 Установка и запуск

```bash
git clone https://github.com/your-username/task-tracker.git
cd task-tracker
npm install
cp .env.example .env      # или создай вручную
npm run dev               # запуск в режиме разработки

структура проекта:
task-tracker/
├── controllers/        # логика обработки запросов
├── models/             # работа с базой данных
├── routes/             # маршруты API
├── app.js              # инициализация Express
├── index.js            # запуск сервера
├── .env                # конфигурация окружения
├── .gitignore
├── README.md
└── package.json