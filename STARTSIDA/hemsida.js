document.addEventListener("DOMContentLoaded", () => {
    const startText = document.getElementById("startText");
    
    startText.classList.add("fade-in");
});

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("mouseenter", () => {
        dropdownContent.style.maxHeight = "200px";
        dropdownContent.style.opacity = "1";
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdownContent.style.maxHeight = "0";
        dropdownContent.style.opacity = "0";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.scroll-fade');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
});


/*
document.addEventListener("DOMContentLoaded", () => {
    // Fade-in för startText
    const startText = document.getElementById("startText");
    startText.classList.add("fade-in");

    // Dropdown menyfunktion
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("mouseenter", () => {
        dropdownContent.style.maxHeight = "200px";
        dropdownContent.style.opacity = "1";
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdownContent.style.maxHeight = "0";
        dropdownContent.style.opacity = "0";
    });

    // Header-färgändring vid scroll
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

*/


/*
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
*/