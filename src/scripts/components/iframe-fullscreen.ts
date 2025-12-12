export default function initIframeFullScreen() {
  const allFullScreenButtons = document.querySelectorAll(
    ".fullscreen-button[iframe]"
  ) as NodeListOf<HTMLButtonElement>;

  allFullScreenButtons.forEach((button) =>
    addEventListenerToFullScreenButton(button)
  );
}

function addEventListenerToFullScreenButton(button: HTMLButtonElement) {
  const topParent = button.parentElement?.parentElement;

  if (topParent) {
    const iframe = topParent.querySelector("iframe");
    if (iframe) {
      button.addEventListener("click", () => {
        iframe.requestFullscreen();
      });
    }
  }
}
