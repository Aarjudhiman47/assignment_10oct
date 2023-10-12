const navbar = document.querySelector('.header');
const header = document.querySelector('.rowone');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const headerHeight = navbar.clientHeight;
    const scrollThreshold = headerHeight;
    if (scrollY >= scrollThreshold) {
        navbar.style.backgroundColor ="#fffff7"

        // navbar.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)';
    
        navItems.forEach(navItem => {
            navItem.style.color = 'black';
        });
    } else {
        navItems.forEach(navItem => {
            navbar.style.backgroundColor =""
            navItem.style.color = ''; 
        });
    }
});
