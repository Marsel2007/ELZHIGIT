let nav = document.querySelector('.nav'),
    vMenu = document.querySelector('.visible-menu'),
    hMenu = document.querySelector('.hidden-menu'),
    burger = document.querySelector('.burger'),
    burgerCount = document.querySelector('.burger-count'),
    breaks = [];


function updateNav() {
    let navWidth = burger.classList.contains('hidden') ? nav.offsetWidth : nav.offsetWidth - burger.offsetWidth;
    let vMenuWidth = vMenu.offsetWidth;
    if (vMenuWidth > navWidth) {
        breaks.push(vMenuWidth);
        hMenu.prepend(vMenu.lastElementChild);
        burger.classList.remove('hidden');
        burgerCount.innerText = breaks.length;
        updateNav();

    }
    else {
        if (navWidth > breaks[breaks.length - 1]) {
            breaks.pop();
            vMenu.append(hMenu.firstElementChild);
            burgerCount.innerText = breaks.length;
        }
        if (breaks.length < 1) {
            burger.classList.add('hidden');
            hMenu.classList.remove('active');
        }
    }
}

burger.addEventListener('click', function () {
    hMenu.classList.toggle('active');
    burger.classList.toggle('active');
});

window.addEventListener('resize', updateNav);
document.addEventListener('DOMContentLoaded', updateNav);


var arrLang = {
    'kg': {
        'about': 'Негизги',
        'about Us': 'Биз жөнүндө',
        'Our projects': 'Биздин долбоорлор',
        'Team': 'Команда',
        'Portfolio': 'Портфолио',
        'Partners': 'Партнерлор',
        'Помощь': 'Жардам',
        'Подробнее': 'Кененирээк маалымат',
        'Контакты': 'Байланыштар',
    },
    'ru': {
        'Негизги': 'Главная',
        'Биз жөнүндө': 'О нас',
        'Биздин долбоорлор': 'Наши проекты',
        'Команда': 'Команда',
        'Портфолио': 'Портфолио',
        'Партнерлор': 'Партнеры',
        'Жардам': 'Помощь',
        'Кененирээк маалымат': 'Подробнее',
        'Байланыштар': 'Контакты',
    }
}

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');


        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});
