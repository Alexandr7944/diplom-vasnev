### Сервис бронирования билетов

Запуск проекта:
- git clone git@github.com:Alexandr7944/diplom-vasnev.git
- composer install
- npm install
- в локальном окружении указать:
    - APP_URL=http://127.0.0.1:8000/
    - DB_CONNECTION=sqlite
    - DB_USERNAME=root
    - DB_PASSWORD=
- npm run dev
- php artisan serve
- перейти по ссылке: http://127.0.0.1:8000/admin
- [Структура БД](https://docs.google.com/document/d/1SFfQw8PF2IPQAfqiCPJPaU7ZjDXm3w_dufyo4AVr9Yo/edit?usp=sharing)

### Основные сложности и вопросы:
- вопрос по структуре, если использовать API, то не понимаю как реализовать авторизацию в части роутинга, поэтому стал комбинировать, но на мой взгляд так быть не должно
- также появилась проблема сохранения массива данных (в SeatController закоментированы разные способы), в результате чтобы не терять время я перенес цикл на клиент (ConfigCinema)
- еще не решил, как реализовать изменение количества мест в уже существующем зале
