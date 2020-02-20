let theButton = document.querySelector("button");
let theBackground = document.querySelector("body");
let colors = ["yellow", "lightblue", "orange", "purple", "green"]
theButton.addEventListener("click", function(){
  theBackground.style.backgroundColor = colors[0];
})
