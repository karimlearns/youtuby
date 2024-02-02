// Start myNavbarNav
let myNavbarNav = document.querySelector('.my-navbar-nav');
let myNavItems = document.querySelectorAll('.my-nav-item');
// let myNavLinks = document.querySelectorAll('.my-nav-link');

myNavItems.forEach((myNavItem) => {

    myNavItem.addEventListener('click', (e) => {

        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

    })

});
// End myNavbarNav