let theButton = document.querySelector("button");
let theBackground = document.querySelector("body");
let colors = ["yellow", "lightblue", "orange", "purple", "green"]
theButton.addEventListener("click", function(){
  let random = Math.floor(Math.random() * colors.length);
  console.log(random);
  theBackground.style.backgroundColor = colors[random];
})
