const navbar = document.querySelector('.header');
const header = document.querySelector('.rowone');
const navItems = document.querySelectorAll('.nav-link');
const toggleButton = document.querySelector('.navbar-toggler-icon')

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const headerHeight = navbar.clientHeight;
    const scrollThreshold = headerHeight;
    if (scrollY >= scrollThreshold) {
        navbar.style.backgroundColor ="black"
        toggleButton.style.backgroundColor="black"

    } else {
        navItems.forEach(navItem => {
            navbar.style.backgroundColor =""
            navItem.style.color = ''; 
        });
    }
});

