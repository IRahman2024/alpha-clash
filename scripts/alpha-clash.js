// function play(){
//     //step-1: hide the home screen. in section
//     const home = document.getElementById('home');
//     home.classList.add('hidden');


//     //step-2: show the playground
//     const playground = document.getElementById('play-ground');
//     playground.classList.remove('hidden');
//     console.log('play start now')
// }

function keyPressEvent(event){
    const playerPressed = event.key;//kon key chapsi oita event.key diye dekha jay

    //stop the game if pressed Escape
    if(playerPressed === 'Escape')
        gameOver();


    // console.log('player pressed', playerPressed);

    // get the expected to press
    const currentAlpha = document.getElementById('current-alpha').innerText;
    const expectedAlpha = currentAlpha.toLowerCase();// random take lowercase e korsi.
    // console.log('current alpha', expectedAlpha);

    if(expectedAlpha === playerPressed){
        
        const currentScore = getElementValueById('current-score');
        const score = currentScore + 1;
        setElementValueById('current-score', score);

        // ---------------------------------------------------
        // console.log('good work');
        // //update score
        // //1.get current score

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const score = parseInt(currentScoreText);
        // console.log(score);

        // const currentScore = getElementValueById('current-score');

        // //2.increase the score
        // const newScore = score + 1;
        // //3.show the update score
        // currentScoreElement.innerText = newScore;

        // //start a new round
        // const currentScore = getValueById('current-score');

        removeBGById(expectedAlpha); //je alphabet ta age select korsi oitar bg normal kore dey
        continueGame();
    }
    else{
        console.log('wrong ans');
        // //step-1: get the life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLife = currentLifeElement.innerText;
        // const life = parseInt(currentLife);

        // //step-2: update the life
        // const newLife = life -1;

        // //step-3: show the update
        // currentLifeElement.innerText = newLife;

        const currentLife = getElementValueById('current-life');
        const life = currentLife-1;
        setElementValueById('current-life', life);

        if(life === 0)
            gameOver();

    }
        
}
document.addEventListener('keyup', keyPressEvent);

function continueGame(){
    // step-1: generate random alphabet
    const alphabet = getARandomAlpha();
    addBGById(alphabet);

    // step-2: display random alphabet on screen
    const currentAlpha = document.getElementById('current-alpha');
    currentAlpha.innerText = alphabet;
}

function play(){
    //hide everything show only the playground
    hideElementById('home');//section hide er jonno onno function e pathay disse
    hideElementById('final-score');
    showElementById('play-ground');
    //reset score and life

    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);


    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //show final score
    //1. get the final score
    const lastScore = getElementValueById('current-score');
    setElementValueById('last-score', lastScore);

    //2. clear the last alphabet
    const currentAlpha = getElementTextById('current-alpha');
    removeBGById(currentAlpha);
}