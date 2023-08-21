const maindiv = document.querySelector('.main');
const changetext = document.querySelector('.color');

const clr = "abcdef1234567890";

function randnumb(){
    return Math.floor(Math.random()*16);
}

function genClr(){
    var newClr = "#";
    for(let i=0;i<6;i++){
        newClr = newClr.concat(clr[randnumb()]);
    }
    return newClr;
}

function next(){
    const clor = genClr();
    maindiv.style.background = clor;
    changetext.innerText = clor;
}
function copi(){
    navigator.clipboard.writeText(changetext.innerText);
}
next();