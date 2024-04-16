let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});



const anmtion = document.querySelector('.anmtion');
const logo = document.querySelector('.logo');
const logospan = document.querySelectorAll('.logo1');

window.addEventListener('DOMContentLoaded', function () {

  setTimeout(() => {
    logospan.forEach(function (span, idx) {
      setTimeout(function () {
        span.classList.add('active');
      }, (idx + 1) * 300)
    });
    setTimeout(function () {
      logospan.forEach(function (span, idx) {
        setTimeout(function () {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
    }, 1500);
    setTimeout(function () {
      anmtion.style.top = '-100vh';
    }, 1500)
  })
})



const menu_btn = document.querySelector('.hamburger');
const mobile_nav = document.querySelector('.mobile-nav');

menu_btn.addEventListener("click", function () {

  menu_btn.classList.toggle('is-active');
  mobile_nav.classList.toggle('is-active');
})
