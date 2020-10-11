for (let i = 0; i < 7; i++) {
  const buttons = document.querySelectorAll(".drums")[i];
  buttons.addEventListener("click", function () {
    const innerLetter = document.querySelectorAll(".drums p")[i];
    playSound(innerLetter.innerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  playSound(event.key);
});

function playSound(letter) {
  switch (letter) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      document.querySelector(".tom1 p").style.color = "black";
      document.querySelector(".tom1").style.border = "5px solid black";
      setTimeout(function () {
        document.querySelector(".tom1 p").style.color = "rgb(0, 255,0)";
        document.querySelector(".tom1").style.border = "5px solid grey";
      }, 100);
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      document.querySelector(".tom2 p").style.color = "black";
      document.querySelector(".tom2").style.border = "5px solid black";
      setTimeout(function () {
        document.querySelector(".tom2 p").style.color = "rgb(0, 255,0)";
        document.querySelector(".tom2").style.border = "5px solid grey";
      }, 100);
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      document.querySelector(".tom3 p").style.color = "black";
      document.querySelector(".tom3").style.border = "5px solid black";
      setTimeout(function () {
        document.querySelector(".tom3 p").style.color = "rgb(0, 255,0)";
        document.querySelector(".tom3").style.border = "5px solid grey";
      }, 100);
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      document.querySelector(".tom4 p").style.color = "black";
      document.querySelector(".tom4").style.border = "5px solid black";
      setTimeout(function () {
        document.querySelector(".tom4 p").style.color = "rgb(0, 255,0)";
        document.querySelector(".tom4").style.border = "5px solid grey";
      }, 100);
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      document.querySelector(".snare p").style.color = "black";
      document.querySelector(".snare").style.border = "5px solid black";
      setTimeout(function () {
        document.querySelector(".snare p").style.color = "rgb(0, 255,0)";
        document.querySelector(".snare").style.border = "5px solid grey";
      }, 100);
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      document.querySelector(".crash p").style.color = "black";
      document.querySelector(".crash").style.border = "5px solid black";
      setTimeout(function () {
        document.querySelector(".crash p").style.color = "rgb(0, 255,0)";
        document.querySelector(".crash").style.border = "5px solid grey";
      }, 100);
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      document.querySelector(".kick p").style.color = "black";
      document.querySelector(".kick").style.border = "5px solid black";
      setTimeout(function () {
        document.querySelector(".kick p").style.color = "rgb(0, 255,0)";
        document.querySelector(".kick").style.border = "5px solid grey";
      }, 100);
      break;
    default:
      console.log("Not in range");
  }
}
