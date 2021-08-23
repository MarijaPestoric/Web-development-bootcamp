var buttonSet = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonSet; i++) {
//Detector of Button Pressed
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {  //selektujemo sve buttons sa dokumenta koji imaju klasu .drum i dodajemo im eventlistener koji ce da oslusne sta je kliknuto (type CLICK)
    var buttonInnerHTML = this.innerHTML;                             //kreiramo promjenljivu u koju smjestamo ono dugme koje je kliknuto sa odredjenim slovom
    makeSound(buttonInnerHTML);                                   //pozivamo funkciju makeSound (kreirali smo je dolje) sa inputom buttonInnerHTML
    buttonAnimation(buttonInnerHTML);
  });
}
//Detector of KeyBoard Pressed
document.addEventListener("keydown", function(event) {   //na citavom dokumentu dodajemo eventlistener koju osluskuje tastaturu, koje dugme sa tastature je kliknuto
  makeSound(event.key);                             //pozivamo funkciju make sound ali ovaj put sa eventom key (on nam govori koje dugme je pritisnuto)
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w": //ako smo pritisnuli dugme sa innerHtml (tekstom) w onda:
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a": //ako smo pritisnuli dugme sa innerHtml (tekstom) w onda:
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s": //ako smo pritisnuli dugme sa innerHtml (tekstom) w onda:
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d": //ako smo pritisnuli dugme sa innerHtml (tekstom) w onda:
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j": //ako smo pritisnuli dugme sa innerHtml (tekstom) w onda:
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k": //ako smo pritisnuli dugme sa innerHtml (tekstom) w onda:
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l": //ako smo pritisnuli dugme sa innerHtml (tekstom) w onda:
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log("hello");
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")}, 100
  );
}
