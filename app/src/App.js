import '../scss/main.scss';
import Navigation from "./Navigation.js";
import Slider from "./Slider";
import ReviewSlider from "./ReviewSlider";
let navigation = new Navigation();
let slider = new Slider();
let reviewSlider = new ReviewSlider();


if (module.hot) {
    module.hot.accept();
}