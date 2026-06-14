console.log("hola hola");

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

