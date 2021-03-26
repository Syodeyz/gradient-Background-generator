/*
* to create two inputs which will take color and write the current colors hexa value 
* on the screen. 
*/

var body = document.body;
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var h3 = document.querySelector("h3");
var randomButton = document.getElementById("random");

// update accroding to the selction
function setGradient(){
    //set the background as the color values.
    body.style.background =  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background + "";
}

//create a color with concating # to the random number
function randomColorGenerator(){
    color1.value = "#" + generateRandomNumber();
    color2.value = "#" + generateRandomNumber();
    setGradient();
}

//generate random numbers
function generateRandomNumber(){
    return Math.floor(Math.random()* 1000000)
}

// first update the gradient background according to the color.
setGradient();
//listen to the event
randomButton.addEventListener("click", randomColorGenerator);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
