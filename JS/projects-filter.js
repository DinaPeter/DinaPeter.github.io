const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".card");

projectCards.forEach(card => {
    card.parentElement.classList.add("project-visible");
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        projectCards.forEach(card => {
            const category = card.dataset.category;
            const projectCol = card.parentElement;

            if (filter === "all" || category === filter) {
                projectCol.classList.remove("project-hidden");
                projectCol.classList.add("project-visible");

                setTimeout(() => {
                    projectCol.style.display = "block";
                }, 10);
            } else {
                projectCol.classList.remove("project-visible");
                projectCol.classList.add("project-hidden");

                setTimeout(() => {
                    projectCol.style.display = "none";
                }, 300);
            }
        });
    });
});