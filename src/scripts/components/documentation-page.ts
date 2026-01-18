import "../../styles/tailwind.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs";
import initDocumentationNav, {
  cleanupCloseNavWhenLinkClicked,
  initCloseNavWhenLinkClicked,
} from "../components/documentation-nav";
import initTooltip from "../components/tooltip";
import observeActiveLinks from "../utils/observe-active-link";
import initIframeFullScreen from "../components/iframe-fullscreen";
import initCopyCodeButton from "../components/copy-code-button";

const documentationArea = document.getElementById("documentation");
const documentationNav = document.getElementById("documentation-nav");
const documentationNavCont = document.getElementById("documentation-nav-cont");
const showTechnicalDocButton = document.getElementById("show-technical");

if (showTechnicalDocButton) {
  showTechnicalDocButton.addEventListener("click", (ev) => {
    showTechnicalDoc(
      documentationArea as HTMLElement,
      documentationNav as HTMLElement
    );
    (ev.target as HTMLElement).classList.add("hidden");
  });
}

if (documentationArea && documentationNav) {
  initDocumentationNav(
    documentationArea,
    documentationNav
  );
  observeActiveLinks(
    documentationNav,
    documentationArea,
    undefined,
    scrollActiveLinkToView
  );
}

if (documentationNav && documentationNavCont) {
  window.addEventListener("resize", () => {
    updateDocNavPopoverState(documentationNav, documentationNavCont);
  });

  window.addEventListener("load", () => {
    updateDocNavPopoverState(documentationNav, documentationNavCont);
  });
}

initTooltip();
initIframeFullScreen();
initCopyCodeButton();

function showTechnicalDoc(
  documentationArea: HTMLElement,
  documentationNav: HTMLElement
) {
  const technicalSections =
    documentationArea.querySelectorAll("section[technical]");
  technicalSections.forEach((section) => section.classList.remove("hidden"));

  const technicalLinks = documentationNav.querySelectorAll("a[technical]");
  technicalLinks.forEach((link) => {
    link.removeAttribute("technical");
    link.removeAttribute("inert");
  });
  const firstLink = technicalLinks[0] as HTMLElement;
  firstLink.click();
}

function scrollActiveLinkToView(elem: HTMLElement, container?: HTMLElement) {
  if (!isElementInView(elem, container)) elem.scrollIntoView();
}

function isElementInView(
  element: HTMLElement,
  container: HTMLElement = document.body
) {
  const elementRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  return (
    elementRect.top >= containerRect.top &&
    elementRect.left >= containerRect.left &&
    elementRect.bottom <= containerRect.bottom &&
    elementRect.right <= containerRect.right
  );
}

function updateDocNavPopoverState(
  documentationNav: HTMLElement,
  documentationNavCont: HTMLElement
) {
  const width = Math.trunc(document.body.getBoundingClientRect().width);
  if (width < 950) {
    documentationNavCont!.setAttribute("popover", "auto");
    initCloseNavWhenLinkClicked(documentationNav, documentationNavCont);
  } else {
    documentationNavCont!.removeAttribute("popover");
    cleanupCloseNavWhenLinkClicked(documentationNav, documentationNavCont);
  }
}
