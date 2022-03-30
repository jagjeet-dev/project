import { animate } from "./animate";
class MegaNavigation {
  constructor() {
    this.navbar = document.querySelector(".iya-header__navbar");
    this.navbarOverlay = document.querySelector(".iya-header__overlay");
    this.btnOpen = document.querySelector(".navbar-toggler");
    this.btnClose = this.navbar.querySelector(".main-nav__btn-close");
    this.btnBack = this.navbar.querySelector(".main-nav__btn-back");
    this.menu = this.navbar.querySelector(".main-nav .menu");
    this.bodyClass = "iya-body";
    this.navOpenClass = "navbar-opened";

    this.events();
  }

  events() {
    this.btnOpen.addEventListener("click", () => this.toggleMenu());
    this.btnClose.addEventListener("click", () => this.toggleMenu());
    this.btnBack.addEventListener("click", () => this.backMenu());
    this.navbarOverlay.addEventListener("click", () => this.toggleMenu());

    this.menu.addEventListener("click", (event) => this.menuItemClick(event));

    window.addEventListener("resize", () => this.resizeScreen());
  }

  toggleMenu() {
    if (document.body.classList.contains(this.bodyClass)) {
      document.body.classList.toggle(this.navOpenClass);
      animate(this.navbarOverlay);
      animate(this.navbar);
    }
  }

  menuItemClick(e) {
    e.preventDefault();
    if (
      window.innerWidth <= 992 &&
      document.body.classList.contains(this.navOpenClass)
    ) {
      if (e.target.closest(".menu__item--has-menu")) {
        const hasChildren = e.target.closest(".menu__item--has-menu");
        this.showSubMenu(hasChildren);
      }
    }
  }

  showSubMenu(hasChildren) {
    var subMenu = hasChildren.querySelector(".megamenu");
    subMenu.classList.add("active");
    animate(subMenu);
    const menuTitle = hasChildren.querySelector(".link").textContent;
    this.navbar.querySelector(".main-nav__title").innerHTML = menuTitle;
    this.navbar.querySelector(".main-nav__header").classList.add("active");
  }

  backMenu() {
    if (this.menu.querySelector(".megamenu.active")) {
      var subMenu = this.menu.querySelector(".megamenu.active");
      subMenu.classList.remove("active");
      animate(subMenu);
    }
    this.navbar.querySelector(".main-nav__title").innerHTML = "";
    this.navbar.querySelector(".main-nav__header").classList.remove("active");
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
export default MegaNavigation;
