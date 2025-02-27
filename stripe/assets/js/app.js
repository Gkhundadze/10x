document.addEventListener("DOMContentLoaded", function () {
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    const burgerIcon = document.querySelector('.burger-icon');
    const navCloseButton = document.querySelector('.mobile-nav-menu .mobile-nav-header .close');

    // Mobile Nav Menu Toggle
    burgerIcon?.addEventListener('click', () => {
        mobileNavMenu?.classList.add('active');
    });

    navCloseButton?.addEventListener('click', () => {
        mobileNavMenu?.classList.remove('active');
    });

    // Section Visibility Detection
    const sections = document.querySelectorAll(".modular-solutions, .payments, .billing, .connect, .issuing");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const rightSide = entry.target.querySelector(".right-side");

                if (rightSide) {
                    if (entry.isIntersecting) {
                        console.log(`Currently viewing: ${entry.target.dataset.section}`);
                        console.log(entry.target);

                        rightSide.style.zIndex = "1";
                        rightSide.classList.toggle('hidden', false);
                    } else {
                        rightSide.style.zIndex = "-2";
                        rightSide.classList.toggle('hidden', true);
                    }
                }
            });
        },
        {
            root: null, // Viewport
            threshold: 0.8, // Trigger when 80% is visible
        }
    );

    sections.forEach((section) => observer.observe(section));
});
