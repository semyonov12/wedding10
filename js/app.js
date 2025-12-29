(() => {
    "use strict";
    let documentBody = document.documentElement;
    const play = document.querySelector(".hero__button");
    play?.addEventListener("click", (function(e) {
        const audio = document.querySelector(".audio");
        if (audio) if (audio.paused) {
            documentBody.classList.add("play");
            audio.play();
        } else {
            documentBody.classList.remove("play");
            audio.pause();
        }
    }));
})();