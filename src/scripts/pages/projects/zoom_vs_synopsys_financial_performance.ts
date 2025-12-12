import "../../../styles/tailwind.css";
import "../../../styles/pages/projects/zoom_vs_synopsys_financial_performance.css";
import 'prismjs/themes/prism-tomorrow.css';
import "prismjs";

import initDocumentationNav from "../../components/documentation-nav";
import observeActiveLinks from "../../utils/observe-active-link";

const documentationArea = document.getElementById("documentation");
const documentationNav = document.getElementById("documentation-nav");
const showTechnicalDocButton = document.getElementById("show-technical");

if (showTechnicalDocButton) {
    showTechnicalDocButton.addEventListener("click", (ev) => {
        showTechnicalDoc(documentationArea as HTMLElement, documentationNav as HTMLElement);
        (ev.target as HTMLElement).classList.add("hidden");
    })
}

if (documentationArea && documentationNav) {
    initDocumentationNav(documentationArea, documentationNav);
    observeActiveLinks(documentationNav, documentationArea);
}


function showTechnicalDoc(documentationArea: HTMLElement, documentationNav: HTMLElement) {
    const technicalSections = documentationArea.querySelectorAll("section[technical]");
    technicalSections.forEach(section => section.classList.remove("hidden"));

    const technicalLinks = documentationNav.querySelectorAll("a[technical]");
    technicalLinks.forEach(link => {
        link.removeAttribute("technical");
});
    const firstLink = technicalLinks[0] as HTMLElement;
    firstLink.click();
}