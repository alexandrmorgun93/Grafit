/*MENU HEADER*/
let btn = document.querySelector('.btn_mobile');
let menu = document.querySelector('.menu');
let menuClose = document.querySelector('.icon-cancel');

function menuOpen(btn, menu) {
    btn.addEventListener('click', () => {
        menu.classList.add('active');
    });
}

menuOpen(btn, menu);

/*BEGIN PARALLAX*/
const Parallax = require('scroll-parallax');
let p = new Parallax('.parallax', {
    intensity: 30
}).init();

/*END PARALLAX*/
// BEGIN MENU LIST
let menuListOpen = document.querySelectorAll('.icon-right-open');
let menuList = document.querySelectorAll('.more_list');

function menuOpenHand(menuListOpen, menuList) {
    for (let i = 0; i < menuListOpen.length; i++) {
        menuListOpen[i].addEventListener('click', function () {
            menuList.classList.add('active');
        });
    }
}

menuOpenHand(menuListOpen, menuList);

// END MENU LIST

// function menuCansel(menuClose) {
//     menuClose.addEventListener('click', () => {
//         this.classList.toggle('active');
//     });
// }
// menuCansel(menuClose);


/*slider*/
// let sliderText = document.querySelectorAll('.slider_text');
// let sliderImg = document.querySelectorAll('.img');
// let yak = 0;
// let timer = null;
//
//
// function lastElem(arr, int, boll) {
//     if (boll) {
//         return (arr[int + 1]) ? int + 1 : 0;
//     } else {
//         return (arr[int - 1]) ? int - 1 : arr.length - 1;
//     }
// }
//
// function autoSlider(boll, int) {
//     for (let i = 0; i < sliderText.length; i++) {
//         sliderText[i].classList.remove('active');
//
//     }
//     for (let i = 0; i < sliderImg.length; i++) {
//         sliderImg[i].classList.remove('active');
//
//     }
//     if (arguments.length < 2) {
//         yak = lastElem( sliderText,sliderImg, yak, boll);
//         sliderText[yak].classList.add('active');
//         sliderImg[yak].classList.add('active');
//     }
//     else {
//         yak = int;
//         sliderText[int].classList.add('active');
//         sliderImg[int].classList.add('active');
//     }
// }
//
// function defult() {
//     timer = setInterval(() => {
//         autoSlider(true);
//     }, 5000);
// }
//
// sliderText[0].classList.add('active');
// sliderImg[0].classList.add('active');
//
// defult();