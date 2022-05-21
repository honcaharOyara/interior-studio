import "bootstrap/dist/js/bootstrap.bundle";
import debounce from "lodash.debounce";
import "./swiper-settings";
import refs from "./refs";
import { formHandler, filevalidation } from "./form-handler";

window.addEventListener("scroll", debounce(headerBgHandler, 100));
refs.formCaclWork.addEventListener("submit", formHandler);
refs.formFileInput.addEventListener("change", filevalidation);

function headerBgHandler() {
  let scrollYValue = window.pageYOffset;

  scrollYValue > 10
    ? refs.header.classList.add("bg-dark-transparent")
    : refs.header.classList.remove("bg-dark-transparent");
}
