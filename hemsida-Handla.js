document.addEventListener("DOMContentLoaded", () => {
    const startText = document.getElementById("handlaText");
    
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