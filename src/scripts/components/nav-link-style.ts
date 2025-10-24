export default function initNavLinkStyle() {
    if (!CSS.supports('scroll-target-group', 'auto')) return;

    const OPTIONS: IntersectionObserverInit = {
        root: null, 
        
    }
    const setLinkActiveStyle: IntersectionObserverCallback = (entries, observer) => {
        
    }
    const observer = new IntersectionObserver(setLinkActiveStyle, OPTIONS);
    const sectionElements = document.querySelector('main')!.querySelectorAll('section[id]');
    sectionElements.forEach(sectionElem => observer.observe(sectionElem));
}