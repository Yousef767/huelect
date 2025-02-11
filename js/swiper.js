
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 1.7,
    },
    950: {
      slidesPerView: 2,
    },
    1140: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".nextBtn",
    prevEl: ".prevBtn",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return `<img class="${className}" src="${this.slides[index].firstElementChild.src}"></img>`;
  //   },
  // },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});