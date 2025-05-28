const app = require('./app');
require('./models/db'); // подключение БД должно быть до listen

const PORT = process.env.PORT || 3000;

// Слушаем на всех интерфейсах внутри контейнера
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
