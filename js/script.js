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
});

// MODAL FORMS
$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        const sendModal = new bootstrap.Modal(document.getElementById('sendModal'));
        sendModal.show();

        $('#contact-form')[0].reset();
    });

    // ANIMACIONES GSAP :(
    document.getElementById('sendModal').addEventListener('shown.bs.modal', function () {
        console.log("modal abierto");
        
        gsap.from('.send-icon', {
            scale: 0,
            rotation: -360,
            duration: 1,
            ease: "back.out(1.7)"
        });
    });
});

