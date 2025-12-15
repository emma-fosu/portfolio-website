export default function initTooltip() {
    const tooltipElems = getAllTooltips() as NodeListOf<HTMLElement>;
    tooltipElems.forEach(tooltipElem => {
        const hintTooltipElem = insertHintTooltipWithName(tooltipElem);
        addEventListenerForTooltips(tooltipElem, hintTooltipElem);
    })
}

function getAllTooltips() {
    return document.querySelectorAll("[tooltip]");
}

function insertHintTooltipWithName(elem: HTMLElement) {
    const tooltipName = elem.getAttribute("tooltip");
    const hintTooltipElem = document.createElement("div");
    hintTooltipElem.classList.add("tooltip");
    hintTooltipElem.setAttribute("popover", "hint");
    hintTooltipElem.textContent = tooltipName;
    elem.appendChild(hintTooltipElem);
    return hintTooltipElem;
}

function addEventListenerForTooltips(elem: HTMLElement, hintTooltip: HTMLElement) {
    elem.addEventListener("mouseover", () => hintTooltip.showPopover({source: elem}));
    elem.addEventListener("mouseout", () => hintTooltip.hidePopover());
    elem.addEventListener("focus", () => hintTooltip.showPopover({source: elem}));
    elem.addEventListener("blur", () => hintTooltip.hidePopover());
}