import emailjs from "@emailjs/browser";

export default function initEmailService() {
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    blockHeadless: true,
    limitRate: {
      id: "app",
      throttle: 10000,
    },
  });
}

export function sendEmail(form: HTMLFormElement) {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form).then(
    () => {
        // TODO: UI informant
      console.log("SUCCESS!");
    },
    (error) => {
        // TODO: UI informant
      console.log("FAILED...", error);
    }
  );
}
