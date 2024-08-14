document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header) => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector(".accordion-icon");

            if (content.style.display === "block") {
                content.style.display = "none";
                header.classList.remove("active");
            } else {
                content.style.display = "block";
                header.classList.add("active");
            }
        });
    });
});