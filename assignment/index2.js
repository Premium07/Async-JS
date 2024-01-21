// Set Interval
document.querySelector("#start").addEventListener("click", function(){
    const sayDate = function(str){
        console.log(str, Date.now());
    }
    const intervalId = setInterval(sayDate, 1000, "hi Prem");
    document.querySelector("#stop").addEventListener("click", function(){
        clearInterval(intervalId);
    })    
})


