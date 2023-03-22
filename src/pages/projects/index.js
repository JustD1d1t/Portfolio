import Swiper, { EffectCards } from "swiper";
var swiper = new Swiper(".mySwiper", {
  modules: [EffectCards],
  effect: "cards",
  grabCursor: true,
});
