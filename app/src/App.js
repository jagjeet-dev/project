import '../scss/main.scss';
import Navigation from "./Navigation.js";
import Slider from "./Slider";
let navigation = new Navigation();
let slider = new Slider();


if (module.hot) {
    module.hot.accept();
}