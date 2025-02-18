const mobileNavMenu = document.querySelector('.mobile-nav-menu')
const burgerIcon = document.querySelector('.burger-icon')
const navCloseButton = document.querySelector('.mobile-nav-menu .mobile-nav-header .close')




burgerIcon.addEventListener('click', () => {
    mobileNavMenu.classList.add('active')
})
navCloseButton.addEventListener('click', () => {
    mobileNavMenu.classList.remove('active')
})