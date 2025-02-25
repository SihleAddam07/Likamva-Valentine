document.addEventListener("DOMContentLoaded", function() {
    const poem = document.querySelector(".poem");
    poem.addEventListener("mouseover", function() {
        poem.style.color = "#d63384";
        poem.style.transform = "scale(1.05)";
    });
    poem.addEventListener("mouseout", function() {
        poem.style.color = "#333";
        poem.style.transform = "scale(1)";
    });
});
