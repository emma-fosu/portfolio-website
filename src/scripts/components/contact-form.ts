import { politeAnnounce } from "../services/live-announcer";
import initEmailService, { sendEmail as sendFormEmail } from "../services/email-service";
/**
 *
 * @param form The form element to check for validation
 */
export function initForm(form: HTMLFormElement) {
  initEmailService();
  form.addEventListener("input", (ev) => {
    const field = ev.target as HTMLInputElement | HTMLTextAreaElement;
    validateField(field);
  });

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let isFormValid = false;
    const fields = (ev.currentTarget as HTMLFormElement).elements;

    for (const field of fields) {
      const validField = fields.namedItem(
        (field as HTMLInputElement | HTMLTextAreaElement).name
      );
      if (!validField) continue;

      isFormValid = validateField(
        validField as HTMLInputElement | HTMLTextAreaElement
      );

      if (!isFormValid) return;
    }

    console.log("sent");
    sendEmail(form);
  });
}

function validateField(field: HTMLInputElement | HTMLTextAreaElement) {
  const errorDisplay = field.parentElement!.querySelector(
    '[id*="error"]'
  ) as HTMLElement;
  const name = field.name || "this field";
  const example = field.dataset.example || "";

  if (field.validity.valid) {
    if (errorDisplay) setErrorDisplay(errorDisplay);
    politeAnnounce();
    return true;
  }

  if (field.validity.valueMissing) {
    const msg = `${name} is required.`;
    if (errorDisplay) setErrorDisplay(errorDisplay, msg);
    politeAnnounce(msg);
    return false;
  }

  if (field.validity.patternMismatch) {
    const msg = `${name} does not match the required pattern${
      example ? ` (${example})` : ""
    }.`;
    if (errorDisplay) setErrorDisplay(errorDisplay, msg);
    politeAnnounce(msg);
    return false;
  }

  return false;
}

function sendEmail(form: HTMLFormElement) {
  sendFormEmail(form);
}

function setErrorDisplay(errorDisplay: HTMLElement, msg = "") {
  errorDisplay.textContent = msg;
}
