import refs from "./refs";
const bootstrap = require("bootstrap");

export const myModal = new bootstrap.Modal(refs.modalCalcWork);

const dropdownElementList = [].slice.call(refs.dropdowns);
const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl);
});
