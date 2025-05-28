# 📝 Task Tracker API

Task Tracker — это простой RESTful API-сервис для управления задачами. Проект разработан на **Node.js**,
**Express** и **PostgreSQL**, с развёртыванием через **Docker Compose**.

## 🚀 Что реализовано

- 📥 **POST /tasks** — создать задачу
- 📋 **GET /tasks** — получить список всех задач
- 🛠 **PUT /tasks/:id** — обновить задачу по ID
- 🗑 **DELETE /tasks/:id** — удалить задачу по ID

## 🧱 Стек технологий

- **Backend:** Node.js, Express
- **База данных:** PostgreSQL
- **ORM / DB-клиент:** native `pg`
- **Инфраструктура:** Docker, Docker Compose
- **Postman:** для тестирования API

## 📦 Структура проекта

```bash
.
├── docker-compose.yml     # Настройка контейнеров
├── Dockerfile             # Сборка backend-приложения
├── index.js               # Точка входа
├── models
│   ├── db.js              # Подключение к базе данных
│   └── taskModel.js       # Запросы к таблице tasks
├── controllers
│   └── taskController.js  # Логика API-эндпоинтов
├── routes
│   └── taskRoutes.js      # Роуты Express
├── package.json
└── README.md
