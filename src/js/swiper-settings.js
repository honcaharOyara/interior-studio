import refs from "./refs";
import Swiper from "swiper";

const bannerSliderOptions = {
  loop: false,
  speed: 400,
  spaceBetween: 0,
  width: 1225,
  simulateTouch: false,
};

if (refs.slider) {
  const bannerSlider = new Swiper(refs.slider, bannerSliderOptions);

  refs.sliderBtnPrev.addEventListener("click", () => {
    bannerSlider.slidePrev();
    setSlideBtnVal();
  });

  refs.sliderBtnNext.addEventListener("click", () => {
    bannerSlider.slideNext();
    setSlideBtnVal();
  });
}

function setSlideBtnVal() {
  const swiperSlides = document.querySelector(".swiper-wrapper").children;
  const btnPrev = document.querySelector(".js-slide-btn-prev");
  const btnNext = document.querySelector(".js-slide-btn-next");

  for (let i = 0; i < swiperSlides.length; i++) {
    const slide = swiperSlides[i];

    if (slide.classList.contains("swiper-slide-active")) {
      btnPrev.innerHTML = pad(i);
      btnNext.innerHTML = pad(swiperSlides.length - i - 1);
    }
  }
}

function pad(value) {
  return String(value).padStart(2, "0");
}


const swiper = new Swiper(refs.newsSlider, {
  speed: 400,
  spaceBetween: 48,
  slidesPerView: 3,
  centeredSlides: true,
});