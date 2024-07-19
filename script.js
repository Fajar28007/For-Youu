const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
    question.textContent = 'Aaaaaa, I Like you too';
    gif.src = 'https://raw.githubusercontent.com/DzarelDeveloper/img/main/gif.webp';
});

noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxY = window.innerHeight - noBtnRect.height;
    const maxX = window.innerWidth - noBtnRect.width;

    const randomY = Math.floor(Math.random() * maxY);
    const randomX = Math.floor(Math.random() * maxX);

    noBtn.Style.left = randomX + "px";
    noBtn.Style.top =  randomY + "px";
});