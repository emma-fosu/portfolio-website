import "./styles/tailwind.css";
import "./styles/global.css";
import { initForm } from "./scripts/components/contact-form"
import initNavLinkStyle from "./scripts/components/nav-link-style";
initForm(document.querySelector('form')!);
initNavLinkStyle();