import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/css";

class ReviewSlider {
  constructor() {
    this.main = document.querySelector(".review-slider .swiper");
    const swiper = new Swiper(this.main, {
      modules: [Navigation, Autoplay, Pagination],
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      speed: 900,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      uniqueNavElements: true,
      navigation: {
        nextEl: ".by-slider-nav-next",
        prevEl: ".by-slider-nav-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });

    this.events();
  }
  events() {
    // this.openedMenu.addEventListener("click", () => this.toggleMenu());
  }
}
export default ReviewSlider;
