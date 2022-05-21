import refs from "./refs";
import Swiper from "swiper";

const bannerSliderOptions = {
  loop: false,
  speed: 400,
  spaceBetween: 0,
  width: 1225,
  simulateTouch: false,
};

const bannerSlider = new Swiper(refs.slider, bannerSliderOptions);

refs.sliderBtnPrev.addEventListener("click", () => {
  bannerSlider.slidePrev();
});

refs.sliderBtnNext.addEventListener("click", () => {
  bannerSlider.slideNext();
});
