const mobileNavMenu = document.querySelector('.mobile-nav-menu')
const burgerIcon = document.querySelector('.burger-icon')
const navCloseButton = document.querySelector('.mobile-nav-menu .mobile-nav-header .close')




burgerIcon.addEventListener('click', () => {
    mobileNavMenu.classList.add('active')
})
navCloseButton.addEventListener('click', () => {
    mobileNavMenu.classList.remove('active')
})



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".modular-solutions, .payments, .billing, .connect, .issuing");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let sectionName = entry.target.dataset.section;
                    console.log(`Currently viewing: ${sectionName}`, );

                    // Update z-index of the active right-side div
                    entry.target.querySelector(".right-side").style.zIndex = "1";
                } else {
                    entry.target.querySelector(".right-side").style.zIndex = "-2";

                }
            });
        },
        {
            root: null, // Viewport
            threshold: 0.7, // Trigger when 70% is visible
        }
    );

    sections.forEach((section) => observer.observe(section));
});

