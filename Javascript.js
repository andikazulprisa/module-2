document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hamburger").addEventListener("click", function() {
        document.querySelector(".navbar").classList.toggle("active");
    });
});