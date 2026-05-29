const cards = document.querySelectorAll('.card');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function showSlide(i){

    cards.forEach(card => {
        card.style.transform = `translateX(-${i * 100}%)`;
    });

}

next.addEventListener('click', () => {

    index++;

    if(index >= cards.length){
        index = 0;
    }

    showSlide(index);

});

prev.addEventListener('click', () => {

    index--;

    if(index < 0){
        index = cards.length - 1;
    }

    showSlide(index);

});