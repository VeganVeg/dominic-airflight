const mySwiperOne = new swiper(".swiper", {
    direction: 'horizontal',
    grabCursor: true,
    effect: 'flip',

    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },

});