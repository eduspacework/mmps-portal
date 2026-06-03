
document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "MMPS Academic Calendar Loaded"
    );

    const cards =
    document.querySelectorAll(
        ".exam-card"
    );

    cards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {
                card.style.transform =
                "translateY(-8px)";
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {
                card.style.transform =
                "translateY(0)";
            }
        );

    });

});
