let myButton = document.querySelector('.my-button');
let myCardText = document.querySelector('.my-card-text');

myButton.addEventListener('click', (e) => {

    myCardText.classList.toggle('my-card-text');

    if (myCardText.classList.contains('my-card-text')) {

        myButton.innerHTML = 'عرض المزيد';

    } else {

        myButton.innerHTML = 'عرض عناصر أقل';

    }

})

let myInswers = document.querySelectorAll('.my-answer');
let myCards = document.querySelectorAll('.my-card');

let arrayAnswer = Array.from(myInswers);

let arrayCards = Array.from(myCards);

arrayAnswer.forEach((myInswer) => {

    myInswer.addEventListener('click', (e) => {

        arrayCards[arrayAnswer.indexOf(e.target)].classList.toggle('block-answer');

    })

});

