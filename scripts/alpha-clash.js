// function play(){
//     //step-1: hide the home screen. in section
//     const home = document.getElementById('home');
//     home.classList.add('hidden');


//     //step-2: show the playground
//     const playground = document.getElementById('play-ground');
//     playground.classList.remove('hidden');
//     console.log('play start now')
// }

function continueGame(){
    // step-1: generate random alphabet
    const alphabet = getARandomAlpha();
    console.log(alphabet)
}

function play(){
    hideElementById('home');//section hide er jonno onno function e pathay disse
    showElementById('play-ground');
    continueGame();
}

function getARandomAlpha(){
    // create an alpha arra
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alphas = alphaString.split('');

    // get e random index between 0-25
    const number = Math.round(Math.random()*25);
    // console.log(number);
    const randomAlpha = alphas[number];
    return randomAlpha;

}