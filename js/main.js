// popup
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let popupSuc = document.querySelector('.popup_suc'); // Окно успешно!
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let openSucButtons = document.querySelector('.send'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let closeSucButton = document.querySelector('.close-popup2'); // Кнопка для скрытия окна
let closeSucButton2 = document.getElementById("close"); // Кнопка для скрытия окна  
let element = document.getElementById('politic');  

// проверка на чек
element.addEventListener('click', ()=>{
    
    if(element.checked){
        openSucButtons.removeAttribute('disabled')
        openSucButtons.addEventListener('click', (e) => {
            e.preventDefault();
            popupSuc.classList.add('active');
            popup.classList.remove('active');
            
        });
    }
    else{
        openSucButtons.setAttribute('disabled', true)
        

    }
})

// проверка на чек


openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        const body = document.body;
        body.style.overflowY = 'hidden';
    })
});



openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        const body = document.body;
        body.style.overflowY = 'hidden';
    })
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
    popupSuc.classList.remove('active');
    const body = document.body;
    body.style.height = '';
    body.style.overflowY = '';
});
closeSucButton2.addEventListener('click', () => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popupSuc.classList.remove('active');
    const body = document.body;
    body.style.height = '';
    body.style.overflowY = '';
});

closeSucButton.addEventListener('click', () => {
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active');
    popupSuc.classList.remove('active');
    const body = document.body;
    body.style.height = '';
    body.style.overflowY = '';
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
        popupSuc.classList.remove('active');
        const body = document.body;
        body.style.height = '';
        body.style.overflowY = '';
    }
});
// popup

//tel input
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

// show map
map = document.querySelector('.map')
showMap = document.getElementById('showMap')

showMap.addEventListener('click', () => {
    Fancybox.show([
        {
          src: "https://www.google.com/maps/@59.934390,30.334484,14.12z",
          width: 800,
          height: 600,
          
            preload: false,
        },
    ]);
})

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
        popupSuc.classList.remove('active');
        const body = document.body;
        body.style.height = '';
        body.style.overflowY = '';
    }
});



//show map

// maps par

ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [59.934390, 30.334484],
        zoom: 15,
        controls: []
    });

    // Создание метки с квадратной активной областью.
    var squareLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="square_layout"></div></div>');

    var squarePlacemark = new ymaps.Placemark(
        [59.934390, 30.334484], {

    }, {
        iconLayout: squareLayout,
        // Описываем фигуру активной области "Прямоугольник".
        iconShape: {
            type: 'Rectangle',
            // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
            coordinates: [
                [-25, -25], [25, 25]
            ]
        }
    }
    );
    map.geoObjects.add(squarePlacemark);

});

// maps par

//fixed scroll
window.onscroll = function() {myFunction()};

// Get the header
let header = document.querySelector(".header");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("fix");
  } else {
    header.classList.remove("fix");
  }
}
//fixed scroll