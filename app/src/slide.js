let class_show = "show";
var running = false;
let slideDown = (ele) => {
  let display = window.getComputedStyle(ele).display;
  if (display === 'none') {
    ele.classList.add(class_show);
  }
  let height = ele.scrollHeight
  ele.style.height = 0;
  ele.scrollHeight;
  ele.style.height = height + 'px';

  ele.addEventListener('transitionend', clearStyling );
}

let slideUp = (ele) => {
  let display = window.getComputedStyle(ele).display;
  if (display !== 'none') {
    ele.style.height = ele.scrollHeight + 'px';
    ele.scrollHeight;
    ele.style.height = '0';
  }
  ele.addEventListener('transitionend', clearStyling );
}

let slideToggle = (ele) => {
  (!running) ? slideDown(ele) : slideUp(ele);
  running = !running;
}

function clearStyling() {
  if (this.offsetHeight == 0) {
    this.classList.remove(class_show);
    // alert('Slide Up Done');
  }
  else {
    this.classList.add(class_show);
    // alert('Slide Down Done');
  }
  this.removeEventListener('transitionend', clearStyling );
  this.removeAttribute('style');
}

export {
  slideDown,
  slideUp,
  slideToggle,
}