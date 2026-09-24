/* Author: Syed Adnan Haider */
"use strict";

const copyStatus = document.querySelector(".lesson-copy-status");

document.querySelectorAll("button[data-copy-target]").forEach((button) => {
  const code = document.getElementById(button.dataset.copyTarget);
  if (!code) return;
  button.hidden = false;
  button.addEventListener("click", async () => {
    const label = button.getAttribute("aria-label");
    button.disabled = true;
    try {
      await navigator.clipboard.writeText(code.textContent.trimEnd() + "\n");
      button.textContent = "Copied";
      if (copyStatus) copyStatus.textContent = "Commands copied. Paste them into Ubuntu.";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = "Selected";
      if (copyStatus) copyStatus.textContent = "Automatic copying is unavailable. The commands are selected; use your device's copy command.";
    }
    button.setAttribute("aria-label", `${label}: ${button.textContent.toLowerCase()}`);
    window.setTimeout(() => {
      button.textContent = "Copy";
      button.setAttribute("aria-label", label);
      button.disabled = false;
    }, 2200);
  });
});
