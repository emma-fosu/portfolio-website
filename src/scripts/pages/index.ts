import "../../styles/tailwind.css";
import "../../styles/pages/index.css";
import { initForm } from "../components/contact-form";
import initHorizontalNavBarSelectScrollEffect from "../effects/horizontal-nav-bar-select-scroll";
import initHorizontalNavBarScrollDisplayEffect from "../effects/horizontal-nav-bar-scroll-display";

const form = document.querySelector('form') as HTMLFormElement;
initForm(form);
const nav = document.getElementById("primary-nav") as HTMLElement;

window.addEventListener("load", () => {
    initHorizontalNavBarSelectScrollEffect(nav, document.querySelector("main")!);
    initHorizontalNavBarScrollDisplayEffect(nav);
}
)