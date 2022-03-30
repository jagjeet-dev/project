import { slideUp, slideDown } from "./slide.js";
import { animate } from "./animate";
class Navigation {
  constructor() {
    this.navbarMenu = document.querySelector(".by-header .by-header__navbar");
    this.openedMenu = document.querySelector(".by-header .navbar-toggler--open");
    this.closedMenu = document.querySelector(".by-header .navbar-toggler--close");
    this.menuOverlay = document.querySelector(".by-header .navbar-overlay");
    this.navOpenClass = "navbar-opened";

    this.events();
  }
  events() {
    this.openedMenu.addEventListener("click", () => this.toggleMenu());
    this.closedMenu.addEventListener("click", () => this.toggleMenu());
    this.menuOverlay.addEventListener("click", () => this.toggleMenu());

    this.navbarMenu.addEventListener("click", (event) =>
      this.menuItemClick(event)
    );

    window.addEventListener("resize", () => this.resizeScreen());
  }

  toggleMenu() {
      document.body.classList.toggle(this.navOpenClass);
      animate(this.menuOverlay);
      animate(this.navbarMenu);
  }

  menuItemClick(event) {
    if (event.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
      // Prevent Default Anchor Click Behavior
      event.preventDefault();
      const menuItem = event.target.parentElement;
      var sub_menu = menuItem.querySelector(".submenu");

      if (sub_menu) {
        if (menuItem.classList.contains("active")) {
          menuItem.classList.remove("active");
          slideUp(sub_menu);
        } else {
          menuItem.parentElement
            .querySelectorAll(".menu__item--has-submenu.active .submenu")
            .forEach((i) => {
              slideUp(i);
              i.parentElement.classList.remove("active");
            });
          slideDown(sub_menu);
          menuItem.classList.add("active");
        }
      }
    }
  }

  collapseSubMenu() {
    this.navbarMenu
      .querySelectorAll(".menu__item--has-submenu.active .submenu")
      .forEach((i) => {
        i.classList.remove("show");
        i.parentElement.classList.remove("active");
      });
  }

  resizeScreen() {
    if (window.innerWidth > 992) {
      // If navbarMenu is Open, Close It
      if (document.body.classList.contains(this.navOpenClass)) {
        this.toggleMenu();
      }
      // If menuItemHasChildren is Expanded, Collapse It
      if (this.navbarMenu.querySelector(".menu__item--has-submenu.active")) {
        this.collapseSubMenu();
      }
    }
  }
}
export default Navigation;
