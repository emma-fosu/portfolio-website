declare global {
  interface HTMLElement {
    showPopover({source: HTMLElement}): void; 
    add(): void;
  }
}

export {}