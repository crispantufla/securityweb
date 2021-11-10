const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
        triggerElement: ".trigger",
        duration: 200,
        offset: 250
    }).setTween("#animate", 1, {
        opacity: "0"
    })
    .addTo(controller);