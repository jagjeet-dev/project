import Swiper, { Navigation } from "swiper";
// import "swiper/css";

class Slider {
  constructor() {
    this.main = document.querySelector(".by-slider-main  .swiper");
    const swiper = new Swiper(this.main, {
      modules: [Navigation],
      speed: 500,
      loop: true,
      uniqueNavElements: true,
      navigation: {
        nextEl: ".by-slider-nav-next",
        prevEl: ".by-slider-nav-prev",
      },
    });

    this.events();
  }
  events() {
    // this.openedMenu.addEventListener("click", () => this.toggleMenu());
  }








}
export default Slider;
