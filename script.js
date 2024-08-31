
// Break text into two spans for animation
function breakText() {
    const h1 = document.querySelector(".heading");
    const h1Text = h1.textContent;
    const halfValue = Math.ceil(h1Text.length / 2);
    h1.innerHTML = h1Text.split("").map((elem, idx) => 
        `<span class="${idx < halfValue ? 'a' : 'b'}">${elem}</span>`
    ).join("");
}
breakText();


// GSAP ANIMATIONS

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

//Home Page Animation
function HomeAnimation() {
    const tl = gsap.timeline();

    tl.from("#navbar .logo", { y: -50, duration: 0.8 })
      .from("#navbar .nav-items a", { y: 100, duration: 0.8, stagger: 0.3 })
      .from(".home-text-content .welcome", { y: -100, opacity: 0, duration: 0.8, delay: 1, stagger: -0.15 },"-=2")
      .from(".heading .a", { y: 100, opacity: 0, duration: 0.5, delay: 0.5, stagger: 0.15 }, "-=2")
      .from(".heading .b", { y: 100, opacity: 0, duration: 0.5, delay: 0.5, stagger: -0.15 }, "-=2")
      .from(".scroll-down img", { y: -10, opacity: 0, duration: 2, repeat: -1 });
}
HomeAnimation();

// Responsive Navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const sidebar = document.getElementById('sidebar');

    if (menuOpen && menuClose && sidebar) {
        menuOpen.addEventListener('click', () => sidebar.classList.add('open'));
        menuClose.addEventListener('click', () => sidebar.classList.remove('open'));

        document.querySelectorAll('.sidebar .scroll-link').forEach(link => {
            link.addEventListener('click', () => sidebar.classList.remove('open'));
        });
    }
});

//Sidebar Animation 
function OpenSidebar() {
    var tl = gsap.timeline()
    tl.from(".sidebar", { x: 400, duration: 0.5, delay: 0.3 , })
    tl.from(".sidebar li", { y: 100, duration: 1, stagger: 0.2, opacity: 0, ease: "elastic.out(1,0.5)" } );
}
document.getElementById("menu-open").addEventListener("click", OpenSidebar);


// Portfolio slide control
document.addEventListener("DOMContentLoaded", function() { 
    const carousel = document.querySelector(".carousel"); 
    const leftArrow = document.getElementById("left");
    const rightArrow = document.getElementById("right");

	const firstCard = carousel.querySelector(".card"); 
	const firstCardWidth = firstCard.offsetWidth; 

    const updateArrowVisibility = () => {
        const scrollLeft = carousel.scrollLeft;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

        // Toggle "active" class based on scroll position
        if (scrollLeft <= 0) {
            leftArrow.classList.remove("active");
        } else {
            leftArrow.classList.add("active");
        }

        if (scrollLeft >= maxScrollLeft) {
            rightArrow.classList.remove("active");
        } else {
            rightArrow.classList.add("active");
        }
    };

    [leftArrow, rightArrow].forEach(btn => { 
        btn.addEventListener("click", () => { 
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth; 
            updateArrowVisibility(); // Update arrow visibility after scroll
        }); 
    });

        // Draggable functionality
        const dragStart = (e) => {
            isDragging = true;
            startX = e.pageX || e.touches[0].pageX;
            startScrollLeft = carousel.scrollLeft;
            carousel.classList.add("dragging");
        };
    
        const dragging = (e) => {
            if (!isDragging) return;
            const x = e.pageX || e.touches[0].pageX;
            const walk = (x - startX); // Distance moved
            carousel.scrollLeft = startScrollLeft - walk;
        };
    
        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
            updateArrowVisibility(); // Ensure arrows are updated after dragging
        };
    
        // Attach mouse and touch events for dragging
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("touchstart", dragStart);
        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("touchmove", dragging);
        carousel.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mouseleave", dragStop);
        carousel.addEventListener("touchend", dragStop);

        // Initial check for arrow visibility
    updateArrowVisibility();

    // Also check arrow visibility when user scrolls manually
    carousel.addEventListener('scroll', updateArrowVisibility);
});

//Portfolio Page Animation
function PortfolioPageAnimation() {
    var tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#portfolio",
            scroller: "body",
            start: "top 80%",
            end: "top 10%",
        }
    })
    tl6.from("#portfolio .title", {
        scale:2,
        opacity:0,
        duration:0.3
    })
    tl6.from(".carousel .card" , {
        y:50,
        opacity:0,
        stagger:0.5,
        duration:0.5,
        scrub:2,
    })

}
PortfolioPageAnimation();


// Service Page Animation
function ServiceAnimation() {
    gsap.timeline({
        scrollTrigger: {
            trigger: "#services",
            start: "top 80%",
            end: "top 10%",
            scrub: 2
        }
    })
    .from(".title", { 
        y: 100, 
        opacity: 0 
    })
    .from(".services_container", { 
        y: 100, opacity: 0, 
        duration: 0.8 
    })
    .from(".services_content h1", { 
        x: -100, 
        opacity: 0, 
        duration: 2 , 
        stagger:0.5
    })
    .from(".services_content img", { 
        y: 100, 
        scale:2, 
        opacity: 0, 
        duration: 0.5 
    });
}
ServiceAnimation();



// Contact Page Animation
function ContactAnimation() {
    gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",
            start: "top 50%",
            end: "top 10%",
            scrub: 2,
            once: true
        }
    })
    .from(".contact_container", {
        rotate: 360,
        duration: 0.5
    })
    .from(".contact_container h1" , {
        scale:2,
        opacity: 0,
        duration: 0.5
    })
    .from(".contact_info i" , {
        scale:2
    })
}
ContactAnimation();


// Scroll to top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    scrollToTopBtn.style.display = window.scrollY > 20 ? "block" : "none";
};
scrollToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};