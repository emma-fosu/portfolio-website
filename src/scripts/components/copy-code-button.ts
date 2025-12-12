export default function initCopyCodeButton() {
    const buttons = getAllCopyCodeButtons();
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const text = getCodeBlockText(button);
            copyText(text).then(() => {copyEffect(button)})
        })
    })
}

function getAllCopyCodeButtons() {
    return document.querySelectorAll("[copy-code-button]") as NodeListOf<HTMLElement>;
}

function getCodeBlockText(button: HTMLElement) {
    const codeBlockElem = button.closest(".code-block");
    return codeBlockElem?.querySelector("code")?.textContent ?? "";
}

async function copyText(text: string) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error: any) {
        console.error(error.message);;
    }
}

function copyEffect(button: HTMLElement) {
    button.classList.add("copied");
    setTimeout(() => {
        button.classList.remove("copied")
    }, 1000);
}