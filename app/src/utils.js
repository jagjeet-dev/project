let parentClass = (el, cls) => {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
 }

 export {
    parentClass,
  }