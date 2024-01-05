<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ИдёмВКино</title>
</head>

<body>
<header class="page-header">
    <h1 class="page-header__title">Идём<span>в</span>кино</h1>
</header>

<main>
    <section class="ticket">

        <header class="tichet__check">
            <h2 class="ticket__check-title">Электронный билет</h2>
        </header>

        <div class="ticket__info-wrapper">
            <p class="ticket__info">На фильм: <span class="ticket__details ticket__title">Звёздные войны XXIII: Атака клонированных клонов</span></p>
            <p class="ticket__info">Места: <span class="ticket__details ticket__chairs">6, 7</span></p>
            <p class="ticket__info">В зале: <span class="ticket__details ticket__hall">1</span></p>
            <p class="ticket__info">Начало сеанса: <span class="ticket__details ticket__start">18:30</span></p>

            <img class="ticket__info-qr" src="img/qr-code.png">

            <p class="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
            <p class="ticket__hint">Приятного просмотра!</p>
        </div>
    </section>
</main>

</body>
</html>