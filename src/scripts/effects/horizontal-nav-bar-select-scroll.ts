import observeActiveLinks from "../utils/observe-active-link";


export default function initHorizontalNavBarSelectScrollEffect(nav: HTMLElement, sectionRegionElement: HTMLElement ) {
  observeActiveLinks(nav, sectionRegionElement, undefined, moveSlider);
  // Recalculate on resize (for responsive layouts)
  window.addEventListener('resize', () => {
    const active = nav.querySelector('a.active') as HTMLAnchorElement;
    if (active) moveSlider(active, nav);
  });
}

function moveSlider(link: HTMLAnchorElement, nav?:HTMLElement) {
  const rect = link.getBoundingClientRect();

  if (nav) {
    const parentRect = nav.querySelector("ul")!.getBoundingClientRect();
    nav.style.setProperty('--width', `${rect.width}px`);
    nav.style.setProperty('--left', `${rect.left - parentRect.left}px`);
  }
}
