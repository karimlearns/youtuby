// Start Search
let filter = document.querySelector('.filter');
let showFilter = document.querySelector('.show-filter');

filter.addEventListener('click', () => {

    showFilter.classList.toggle('d-none');

    showFilter.classList.toggle('block');

});

// End Search