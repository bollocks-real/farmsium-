document.addEventListener("DOMContentLoaded", function () {
    const serverName = "End Community";
    const h1Element = document.getElementById("server-name");

    let i = 0;
    function typeEffect() {
        if (i < serverName.length) {
            h1Element.innerHTML += serverName.charAt(i);
            i++;
            setTimeout(typeEffect, 100); // Typing speed
        }
    }

    typeEffect();
});
