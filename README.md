# 📝 Task Tracker API

**Task Tracker** — это простой, но мощный RESTful API-сервис для управления задачами.  
Разработан на **Node.js + Express**, с базой данных **PostgreSQL** и развёртыванием через **Docker Compose**.

---

## 🚀 Что реализовано

- 🔹 `POST /tasks` — создать новую задачу  
- 🔹 `GET /tasks` — получить список всех задач  
- 🔹 `PUT /tasks/:id` — обновить задачу по ID  
- 🔹 `DELETE /tasks/:id` — удалить задачу по ID  

---

## 🛠️ Стек технологий

| Компонент         | Технология             |
|-------------------|------------------------|
| Язык программирования | Node.js              |
| Веб-фреймворк     | Express                |
| База данных       | PostgreSQL             |
| DB-клиент         | `pg` (без ORM)         |
| Инфраструктура    | Docker, Docker Compose |
| Тестирование API  | Postman                |

---

## 📁 Структура проекта

```bash
task-tracker/
├── docker-compose.yml     # Конфигурация Docker
├── Dockerfile             # Билд Node.js-приложения
├── index.js               # Точка входа, запуск сервера
├── app.js                 # Express-приложение
├── models/
│   ├── db.js              # Подключение к PostgreSQL
│   └── taskModel.js       # SQL-запросы к таблице tasks
├── controllers/
│   └── taskController.js  # Логика обработки API
├── routes/
│   └── taskRoutes.js      # Определение маршрутов
├── package.json
└── README.md
```

---

## ⚙️ Как запустить

1. Убедитесь, что установлен **Docker**
2. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/MirasKalaubek/task-tracker.git
   cd task-tracker
   ```
3. Создайте `.env` файл по примеру:
   ```env
   PGHOST=localhost
   PGPORT=5432
   PGDATABASE=taskdb
   PGUSER=postgres
   PGPASSWORD=your_password
   ```
4. Запустите проект:
   ```bash
   docker-compose up --build
   ```
5. Проверьте API в Postman:  
   👉 `http://localhost:3000/tasks`

---

## 🔒 Примечание

Файл `.env` добавлен в `.gitignore` и **не публикуется в репозиторий** по соображениям безопасности.

---

## 📧 Автор

**Miras Kalaubek**  
Стремлюсь к реальному опыту разработки и готов к фидбеку.
