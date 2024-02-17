function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBGById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400', 'text-black');

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