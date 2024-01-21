// Async JavaScript
//  Set timeout

const sayPrem = function(){
    console.log("PremSG");
}

const changeText = function(){
    document.querySelector("h1").innerHTML = "TectBit Prem WEB DEVELOPER"
}

const changeMe = setTimeout(changeText, 2000)
setTimeout(sayPrem, 2000)

document.querySelector("#stop").addEventListener("click", function(){
    clearTimeout(changeMe)
    console.log("stoppeddd!!!");
})