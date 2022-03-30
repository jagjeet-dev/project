
let animate = (ele) => {
   ele.classList.add("animating");
   ele.addEventListener('animationend', clearAnimation );
}

function clearAnimation() {
  this.classList.remove("animating");
  this.removeEventListener("animationend", clearAnimation);
}

export { animate };