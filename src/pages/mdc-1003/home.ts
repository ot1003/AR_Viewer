import { MDCRipple } from "@material/ripple";
import { MDCList } from "@material/list";
import { MDCMenu } from "@material/menu";
import { MDCChipSet } from "@material/chips";

document.querySelectorAll(".mdc-evolution-chip-set").forEach((ele) => {
  const chipset = new MDCChipSet(ele);
});

const menus = document.querySelector<HTMLElement>(".mdc-menu");
if (menus) {
  const menu = new MDCMenu(menus);
  document.querySelector("#news_menu")?.addEventListener("click", () => {
    menu.open = true;
  });
}
const selector = ".mdc-button,.mdc-card__primary-action";
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
  return new MDCRipple(el);
});

const buttonRipples = document.querySelector<HTMLElement>(".mdc-button");
if (buttonRipples) {
  const buttonRipple = new MDCRipple(buttonRipples);
}

const lists = document.querySelector<HTMLElement>(".mdc-deprecated-list");
if (lists) {
  lists.style.display = "";
  const list = new MDCList(lists);
  const listItemRipples = list.listElements.map(
    (listItemEl) => new MDCRipple(listItemEl)
  );
}

document.querySelectorAll(".mdc-icon-button").forEach((e) => {
  const iconButtonRipple = new MDCRipple(e);
  iconButtonRipple.unbounded = true;
});