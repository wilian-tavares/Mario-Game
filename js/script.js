//export { listScore };


const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const buttonInit = document.querySelector('.buttonInit');
const buttomBack = document.querySelector('.buttom-back');
const points = document.querySelector('.points');
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

        const name = prompt('Your Name: ')

        clearInterval(loop);
        clearInterval(scoreRecords);

        buttomBack.style.visibility = 'visible';

        storage(name, score)

    }
}, 10);




// SAVE SCORE IN LOCAL STORAGE
function storage(name, score) {
    let listScore = localStorage['listScore'] ? JSON.parse(localStorage['listScore']) : [];

    listScore.push({
        name,
        score
    });


    let x = localStorage.getItem('listScore');
    localStorage.setItem('listScore', JSON.stringify(listScore));

    listScore.sort(function (a, b) {
        if (a.score > b.score) {
            return -1;
        }
        else if (a.score < b.score) {
            return 1;
        }
        else {
            return 0;
        }
    });

    console.log(listScore);

} // fim da function STORAGE















function teste(a, b) {
    if (a.score > b.score) {
        return 1;
    }
    else if (a.score < b.score) {
        return -1;
    }
    else {
        return 0;
    }
}









/*POINTS RECORDS*/
const scoreRecords = setInterval(() => {
    score += 1;
    points.innerText = `Score: ${score} Seconds`


}, 1000);

document.addEventListener('keydown', jump);





