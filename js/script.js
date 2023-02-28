const toggleButton = document.getElementsByClassName("toggle-button")[0];
const links = document.getElementsByClassName("navbar__links")[0];

toggleButton.addEventListener("click", () => {
    // DROPDOWN
    links.classList.toggle("active");
    // BARS ANIMATION
    toggleButton.classList.toggle("active-bars");
});

