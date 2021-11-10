const teamSwiper = new Swiper('#team-swiper', {
    // Optional parameters
    slidesPerView: 3, //Cuantos se ven
    slidesPerGroup: 3, // De a cuantos avanza
    centeredSlides: true,
    //spaceBetween: 30, // Fuerza separacion entre ellos sin clase
    //freeMode: true, // te deja moverlo libremente y no por grupo ( probalo )
    loop: true,
    loopFillGroupWithBlank: false,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    autoplay: {
        delay: 3500,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
const partnerSwiper = new Swiper('#partner-swiper', {
    // Optional parameters
    slidesPerView: 2, //Cuantos se ven
    slidesPerGroup: 3, // De a cuantos avanza
    //spaceBetween: 30, // Fuerza separacion entre ellos sin clase
    //freeMode: true, // te deja moverlo libremente y no por grupo ( probalo )
    loop: true,
    loopFillGroupWithBlank: false,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 6,
            spaceBetween: 30,
        }
    },
    autoplay: {
        delay: 3500,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});