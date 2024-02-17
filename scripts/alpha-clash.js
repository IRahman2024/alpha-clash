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
    addBGById(alphabet);

    // step-2: display random alphabet
    const currentAlpha = document.getElementById('current-alpha');
    currentAlpha.innerText = alphabet;
}

function play(){
    hideElementById('home');//section hide er jonno onno function e pathay disse
    showElementById('play-ground');
    continueGame();
}
