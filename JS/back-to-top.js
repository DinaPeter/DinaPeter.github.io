const backToTopButton = document.getElementById("back-to-top");

// Mikor görget az oldal
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // 300px lejjebb görgetve jelenik meg
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

// Gomb kattintás
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // sima, animált visszagörgetés
    });
});