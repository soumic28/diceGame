let randomNumber1 =Math.floor (Math.random()*6)+1;
let randomDiceImg = "dice" + randomNumber1 +".png";
let randomImageSrc ="images/"+ randomDiceImg;


let image=document.querySelectorAll("img")[0];
image.setAttribute("src",randomImageSrc);

let randomNumber2 = Math.floor(Math.random()*6)+1;
let randomDiceImg2 = "dice"+ randomNumber2 + ".png";
let randomImageSrc2 = "images/"+ randomDiceImg2;

let images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src",randomImageSrc2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}