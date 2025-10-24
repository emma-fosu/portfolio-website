const politeAnnouncer = document.getElementById("polite-live-announcer") as HTMLSpanElement;
const assertiveAnnouncer = document.getElementById("assertive-live-announcer") as HTMLSpanElement;

export default {politeAnnouncer, assertiveAnnouncer}
export function politeAnnounce(msg = "") {
    politeAnnouncer.textContent = msg;
}

export function assertiveAnnounce(msg = "") {
    assertiveAnnouncer.textContent = msg;
}