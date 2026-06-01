document.body.classList.add("motion-ready");

const revealItems = document.querySelectorAll(".reveal");

const isAlreadyVisible = (item) => {
    const rect = item.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.92;
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
    });

    revealItems.forEach((item) => {
        if (isAlreadyVisible(item)) {
            item.classList.add("is-visible");
        } else {
            observer.observe(item);
        }
    });
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}
