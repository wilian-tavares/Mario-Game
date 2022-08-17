const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
let points = document.querySelector('.points');

let score = 0;
let listScore = [];

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

        //alert(`Seu score foi: ${score}`)

        const name = prompt('Your Name: ')

        listScore.push(name, score);




        clearInterval(loop);
        clearInterval(scoreRecords);
        //console.log(listScore)

        const listComplete = localStorage.setItem(name, score);
        const teste = localstorage.getItem(name)
        console.log(teste)

    }


}, 10);



/*POINTS RECORDS*/
const scoreRecords = setInterval(() => {
    score += 1;
    points.innerText = `Score: ${score} Seconds`


}, 1000);

document.addEventListener('keydown', jump);


//console.log('teste ' + listScore)



