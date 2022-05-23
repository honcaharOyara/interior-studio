import refs from "./refs";
import debounce from "lodash.debounce";
import { formHandler, filevalidation } from "./form-handler";
import "./swiper-settings";
import "./bootstrap-settings";

window.addEventListener("scroll", debounce(headerBgHandler, 100));
refs.formCaclWork.addEventListener("submit", formHandler);
refs.formFileInput.addEventListener("change", filevalidation);

function headerBgHandler() {
  let scrollYValue = window.pageYOffset;

  scrollYValue > 10
    ? refs.header.classList.add("bg-dark-transparent")
    : refs.header.classList.remove("bg-dark-transparent");
}
