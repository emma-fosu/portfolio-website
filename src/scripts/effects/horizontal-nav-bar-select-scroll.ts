import observeActiveLinks from "../utils/observe-active-link";


export default function initHorizontalNavBarSelectScrollEffect(nav: HTMLElement, sectionRegionElement: HTMLElement ) {
  observeActiveLinks(nav, sectionRegionElement, moveSlider);
  // Recalculate on resize (for responsive layouts)
  window.addEventListener('resize', () => {
    const active = nav.querySelector('a.active') as HTMLAnchorElement;
    if (active) moveSlider(active, nav);
  });
}

function moveSlider(link: HTMLAnchorElement, nav:HTMLElement) {
  const rect = link.getBoundingClientRect();
  const parentRect = nav.querySelector("ul")!.getBoundingClientRect();
  nav.style.setProperty('--width', `${rect.width}px`);
  nav.style.setProperty('--left', `${rect.left - parentRect.left}px`);
}

// Observe sections entering the viewport


// Attach observer to each section
// document.querySelectorAll('section').forEach(section => observer.observe(section));



// Recalculate on resize (for responsive layouts)
// window.addEventListener('resize', () => {
//   const active = document.querySelector('.nav-link.active');
//   if (active) moveSlider(active);
// });
