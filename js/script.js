console.log("hola hola");

// GSAP INDEX
document.addEventListener('DOMContentLoaded', function() {
    const circlePath = document.querySelector('.circle-path');
    if (circlePath) {
        gsap.registerPlugin(DrawSVGPlugin);

        gsap.set(circlePath, { drawSVG: "0%" });

        gsap.to(circlePath, {
            drawSVG: "100%",
            duration: 1.2,
            delay: 0.5,
            ease: "power2.inOut"
        });
    }

    const trackCards = document.querySelectorAll('#featured .track-card');
    if (trackCards.length) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(trackCards, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.25,
            clearProps: "transform",
            scrollTrigger: {
                trigger: "#featured",
                start: "top 80%"
            }
        });
    }

    gsap.registerPlugin(SplitText, ScrollTrigger);
    const nameBio = document.querySelector('.name-bio');
    if (nameBio) {
        const splitTitle = new SplitText(nameBio, { type: "chars" });
        gsap.from(splitTitle.chars, {
            opacity: 0,
            y: 20,
            rotation: 10,
            duration: 0.5,
            stagger: 0.03,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: nameBio,
                start: "top 85%"
            }
        });
    }

    const bioTexts = document.querySelectorAll('.bio-text');
    if (bioTexts.length) {
        bioTexts.forEach((el) => {
            const split = new SplitText(el, { type: "lines" });
            gsap.from(split.lines, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%"
                }
            });
        });
    }

    const workTitle = document.querySelector('#hero-work .sect-title');
    if (workTitle) {
        const splitWork = new SplitText(workTitle, { type: "words" });
        gsap.from(splitWork.words, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out"
        });
    }

    const pieceCards = document.querySelectorAll('#prod-panel .work-card');
    if (pieceCards.length) {
        gsap.from(pieceCards, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "transform",
            scrollTrigger: {
                trigger: "#tracks",
                start: "top 80%"
            }
        });
    }

    const contactTitle = document.querySelector('#hero-contact .sect-title');
    if (contactTitle) {
        console.log("contactTitle encontrado:", contactTitle);
        const splitContact = new SplitText(contactTitle, { type: "words" });
        console.log("palabras:", splitContact.words);
        gsap.from(splitContact.words, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out"
        });
    }
});

// MODAL FORMS
$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        const sendModal = new bootstrap.Modal(document.getElementById('sendModal'));
        sendModal.show();

        $('#contact-form')[0].reset();
    });
});

