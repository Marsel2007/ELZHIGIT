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


//Language//


const select = document.querySelector('select');
const allLang = ['kg', 'ru']

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#kg';
        location.reload();
    };
    select.value = hash;
    document.querySelector('.about').innerHTML = langArr['unit'][hash];
    document.querySelector('.aboutUs').innerHTML = langArr['chip'][hash];
    document.querySelector('.Ourprojects').innerHTML = langArr['uu'][hash];
    document.querySelector('.Team').innerHTML = langArr['nn'][hash];
    document.querySelector('.Portfolio').innerHTML = langArr['ii'][hash];
    document.querySelector('.Partners').innerHTML = langArr['tt'][hash];
    document.querySelector('.Help').innerHTML = langArr['hh'][hash];
    document.querySelector('.Moredetails').innerHTML = langArr['pp'][hash];
    document.querySelector('.Contacts').innerHTML = langArr['jj'][hash];
    document.querySelector('.typ').innerHTML = langArr['ug'][hash];

};

changeLanguage();


