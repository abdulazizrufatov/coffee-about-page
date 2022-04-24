const elHamburgerBtn = document.querySelector(".header__hamburger")

const elHeader = document.querySelector(".site-header")

elHamburgerBtn.addEventListener("click", () => {
    elHeader.classList.toggle("header--open")
})