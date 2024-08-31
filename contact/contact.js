// Custom cursor follow effect
document.addEventListener('DOMContentLoaded', () => {
    const follower = document.getElementById('follower');
    let isHovering = false;

    document.addEventListener('mousemove', (event) => {
        follower.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });

    document.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('hover-target')) {
            event.target.classList.add('hovered');
            follower.classList.add('hovering');
        }
    });

    document.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('hover-target')) {
            event.target.classList.remove('hovered');
            follower.classList.remove('hovering');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const loadingOverlay = document.getElementById("loadingOverlay");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission


        loadingOverlay.style.display = "flex";


        const formData = new FormData(form);
        const data = new URLSearchParams(formData).toString();

        fetch("https://script.google.com/macros/s/AKfycbz5vdMpt83-WIr9XK4yTjOz7-6yrCvUmnNHI4ttrFriO43y2OQ3WOw4t3h5k4LC98s/exec", { // Replace with your Web App URL
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(response => response.text())
        .then(() => {
             // Hide loading overlay and show the success modal
             loadingOverlay.style.display = "none";
            showModal(); // Show the success modal
            form.reset();
            
        })
        .catch(error => {
            console.error("Error:", error);
            loadingOverlay.style.display = "none";
        });
    });

    function showModal() {
        const modal = document.getElementById("successModal");
        const span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});