import { ICONS } from "./constants";

const toggleHighlighted = (icon, show) => document.querySelector(`.${ICONS[icon]}-icon`).classList.toggle("highlighted", show);

export default function initButtons(hanleUserAction) {
  let selectedIcon = 0;
  // make icon can loop around no matter which button you clicked
  function buttonClick({ target }) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (1 + selectedIcon) % ICONS.length;
      toggleHighlighted(selectedIcon, true);
    } else {
      hanleUserAction(ICONS[selectedIcon]);
    }
  }

  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
