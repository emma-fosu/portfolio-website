export default function observeActiveLinks(nav: HTMLElement, sectionRegionElement: HTMLElement, observerCallback?: (link: HTMLAnchorElement, nav: HTMLElement) => void) {
    // if (!CSS.supports('scroll-target-group', 'auto')) return;

    const OPTIONS: IntersectionObserverInit = {
        root: sectionRegionElement, 
    }

    const setLinkActiveStyle: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const newActive = nav.querySelector(`a[href="#${id}"]`) as HTMLAnchorElement;
                const oldActive = nav.querySelector('a.active') as HTMLAnchorElement; 
                if (oldActive)
                    oldActive.classList.remove('active');
                if (newActive) {
                    newActive.classList.add('active');
                    if (observerCallback) {
                        observerCallback(newActive, nav);
                    }
                }
                    
            }
        });
    }

    const observer = new IntersectionObserver(setLinkActiveStyle, OPTIONS);
    const sectionElements = sectionRegionElement.querySelectorAll(':scope > section[id]');
    sectionElements.forEach(sectionElem => observer.observe(sectionElem));
}