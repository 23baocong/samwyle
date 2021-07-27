
const hamburger = document.getElementById("hamburger");

const navMobile = document.getElementById("nav-main");

const cancelNav = document.getElementById("cancel");

const container = document.getElementById("container");

function handleHamburgerClick(event) {
    if (!navMobile.style.display || navMobile.style.display == "none") {
        navMobile.style.display = "flex";
        hamburger.style.display = "none";
        cancelNav.style.display = "block"
        container.style.height = "100%"
        container.style.overflow = "hidden"
    }
}

function handleCancelButtonClick(event) {
    if (navMobile.style.display == "flex") {
        navMobile.style.display = "none";
        hamburger.style.display = "block";
        cancelNav.style.display = "none";
        container.style.height = "auto"
    }
}


hamburger.addEventListener('click', handleHamburgerClick)


cancelNav.addEventListener('click', handleCancelButtonClick)