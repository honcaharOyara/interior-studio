import refs from "./refs";
import debounce from "lodash.debounce";
import { formHandler, filevalidation } from "./form-handler";
import "./swiper-settings";
import "./bootstrap-settings";

refs.formCaclWork.addEventListener("submit", formHandler);
refs.formFileInput.addEventListener("change", filevalidation);
window.addEventListener("scroll", debounce(headerBgHandler, 100));

function headerBgHandler() {
  let scrollYValue = window.pageYOffset;

  scrollYValue > 10
    ? refs.header.classList.add("bg-transparent")
    : refs.header.classList.remove("bg-transparent");
}
