"use strict";

const buttons = $("button[data-tab]");
const tabs = $(".ba-tab__content[data-tab]");

buttons.on("click", function () {
  if (this.getAttribute("data-tab") == "disabled") {
    $('button[data-tab="active"]').get(0).setAttribute("data-tab", "disabled");
    $('.ba-tab__content[data-tab="active"]')
      .get(0)
      .setAttribute("data-tab", "disabled");
    this.setAttribute("data-tab", "active");

    let tab = tabs.get(buttons.index(this));
    tab.setAttribute("data-tab", "active");
  }
});

const sliderProduct = $(".ba-section__slider");
sliderProduct.slick({
fade: true,
slide: ".ba-slider",
autoplay: 2000,
speed: 1000,
slidesToShow: 3,
slidesToScroll: 1,
responsive: [
    {
      breakpoint: 1300,
      settings: {
         slidesToShow: 4,
        slidesToScroll: 2,
       },
     },
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
       },
     },
     {
       breakpoint: 640,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
    },
   ],
});

const accordions = $(".ba-accordion");
accordions.find("dt").on("click", function () {
  let currentDD = $(this).next("dd");
  let clickedDT = $(this);

  clickedDT.siblings("dd:visible").not(currentDD).slideUp();
  currentDD.slideToggle();
});

// const testimonialsSlider = $(".ba-testimonials-slider__item");
// testimonialsSlider.slick({
//   arrows: false,
//   autoplay: true,
// });
