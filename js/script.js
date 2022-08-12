const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
let points = document.querySelector('.points');

let score = 0;


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500)

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 120) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '../images/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.left = `${cloudsPosition}px`;


        clearInterval(loop);
        clearInterval(scoreRecords);
    }

}, 10);


/*POINTS RECORDS*/
const scoreRecords = setInterval(() => {
    score += 1;
    points.innerText = `Score: ${score} Seconds`
    console.log(`points = ${score} `)

}, 1000);




document.addEventListener('keydown', jump);

