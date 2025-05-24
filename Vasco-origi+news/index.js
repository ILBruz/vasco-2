

// andiamo a selezionare gli elementi nell html

const track = document.querySelector('.carusel-track');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const cards = document.querySelectorAll('.card');
const carusel = document.querySelector('.carusel');


const gap = 16; // imposta il gap che hai nel CSS
const cardWidth = cards[0].offsetWidth + gap;

let index = 0;

function update() {
    const visibleArea = carusel.offsetWidth;
    const cardsVisible = Math.max(1, Math.floor(visibleArea / cardWidth));
    const maxIndex = Math.max(0, cards.length - cardsVisible);

    track.style.transform = `translateX(-${index * cardWidth}px)`;

    // Limita gli indici
    next.disabled = index >= maxIndex;
    prev.disabled = index <= 0;
}

next.addEventListener('click', () => {
    index++;
    update();
});

prev.addEventListener('click', () => {
    index--;
    update();
});

window.addEventListener('resize', update);

