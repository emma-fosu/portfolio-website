export default function initHorizontalNavBarScrollDisplayEffect(
  nav: HTMLElement
) {
  let previousScrollY = 0;
  let intervalId: number;
  nav.classList.add("floating");

  window.addEventListener("scroll", () => {
    clearInterval(intervalId);

    if (window.scrollY === 0) {
      if (nav.classList.contains("page-up")) {
        nav.classList.remove("page-up");
      }

      return;
    }

    if (previousScrollY > window.scrollY) {
      if (!nav.classList.contains("page-up")) {
        nav.classList.add("page-up");
        nav.removeAttribute("inert");
    }
    
    if (nav.classList.contains("page-down")) {
        nav.classList.remove("page-down");
    }
} else {
    if (!nav.classList.contains("page-down")) {
        nav.classList.add("page-down");
        nav.setAttribute("inert", "");
    }
    
    if (nav.classList.contains("page-up")) {
        nav.classList.remove("page-up");
      }
    }

    previousScrollY = window.scrollY;
    intervalId = removeNavOnInterval(nav, 2000);
  });


}

function removeNavOnInterval(nav: HTMLElement, interval: number): number {
  return setTimeout(() => {
    nav.classList.add("page-down");
    nav.classList.remove("page-up");
  }, interval);
}
