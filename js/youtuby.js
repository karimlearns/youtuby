// Start Links
let links = document.querySelectorAll('.ul-links .cont-link');

links.forEach((link) => {

    link.classList.remove('active');

    link.addEventListener('click', (e) => {

        e.target.classList.add('active');

    })

});
// End Links

// Start navbar
let navBarIcon = document.querySelector('#toggler');
let navBar = document.querySelector('.my-side-bar');
let layer = document.querySelector('.layer');
let searchIcon = document.querySelector('.my-form-inline .my-search-icon');
let searchDown = document.querySelector('.my-search-down');

navBarIcon.addEventListener('click', () => {

    navBar.classList.toggle('nav-show');

    if (navBar.classList.contains('nav-show')) {

        layer.style.display = 'block';

    } else {

        layer.style.display = 'none';

    }

});

layer.addEventListener('click', (e) => {

    navBar.classList.toggle('nav-show');

    e.target.style.display = 'none';

});

searchIcon.addEventListener('click', () => {

    searchDown.classList.toggle('down')

});
// End navbar
// Start Close card
let closeCards = document.querySelectorAll('.close-card');
let cardHorizontals = document.querySelectorAll('.card-horizontal');

closeCards.forEach(closeCard => {

    closeCard.addEventListener('click', (e) => {

        e.target.parentElement.remove();

    })

});

// End Close card
