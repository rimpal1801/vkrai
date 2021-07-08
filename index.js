var noofdrumbuttons = document.querySelectorAll(".drum").length;

for(var i=0 ; i < noofdrumbuttons ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click" , function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function (event){
  makeSound(event.key);
  buttonAnimation(event.key);
});



function makeSound(key){
  switch (key) {

    case "V":
    var audio = new Audio("tom-1.mp3");
    audio.play();
      break;

      case"i":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;

      case"v":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;

      case"e":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;

      case"k":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;

      case"r":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;

      case"a":
      var audio = new Audio("kick.mp3");
      audio.play();
      break;

      case"I":
      var audio = new Audio("tom-5.mp3");
      audio.play();
      break;

    default: console.log(buttonInnerHTML);

  }

}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

    }
