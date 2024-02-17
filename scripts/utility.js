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

function removeBGById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400', 'text-black');
}

function getValueById(elementId){
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text; 
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