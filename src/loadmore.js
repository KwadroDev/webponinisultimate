
let hideCard_btn = document.getElementById('hideCard_btn');

let hideCard = document.getElementById('hideCard');

hideCard_btn.addEventListener('click', toggleCard);

function toggleCard() {
    hideCard.classList.toggle('show');
}
