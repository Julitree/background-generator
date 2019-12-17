
  var css = document.getElementsByTagName("h3")[0];
  var body = document.getElementById("gradient");
  var color1 = document.querySelector(".color1");
  var color2 = document.querySelector(".color2");
 


    var elem = document.getElementById("gradient");
    var theCSSprop = window.getComputedStyle(elem).getPropertyValue("background");
    console.log(theCSSprop)
    document.getElementById("demo").innerHTML = theCSSprop;



function setgradient(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " 
    + color2.value+ ")";
    css.textContent= body.style.background + ";";
   
}

function randomData() {
    document.getElementById("randomNum").innerHTML = Math.random()
}

color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);

