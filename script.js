let buttonreset = document.querySelector(".option-two");
let button = document.querySelector(".option-one");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionThreeScreen = document.querySelector(".option-Three-Screen");
let optionOneButton = document.querySelector(".option-one");
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")

let questionsContainer = document.querySelector(".questions");
let buttonContainer = document.querySelector(".buttons");

let firstInput, secondInput

optionOneButton.onclick = function() {
  firstInput = document.querySelector(".FirstQuestion").value;
  secondInput = document.querySelector(".SecondQuestion").value;

  questionsContainer.style.display = "none";
  buttonContainer.style.display = "none";

  // if(firstInput >= 5 && secondInput === "Jordan") {
  // optionOneScreen.style.display = "block";
  //} 
  // else if (firstInput >=5 && secondInput === "Nike"){
  // optionTwoScreen.style.display = "block";
  //   optiontwo.style.display = "block";
  //} else if (input should be less than 5 and input should be jordan){}
  // else if (input should be less than 5 and input should be nike){}
  
  if (firstInput >= 5) {
    if (secondInput === "Jordan") {
      optionOneScreen.style.display = "block";
      buttonreset.style.display = "block";
    } else if (secondInput === "Nike") {
      optionTwoScreen.style.display = "block";
      buttonreset.style.display = "block";
    }
  }
  else if (firstInput < 5) {
     optionThreeScreen.style.display = "block";
    buttonreset.style.display = "block";


 }
  //title.style.display = "none";
  //openingScreen.style.display = "none";
  //button.style.display = "none";
};


//let results = document.querySelector(".results");
// results.innerHTML("<img src='...'>")
buttonreset.onclick = function() {
  optionThreeScreen.style.display = "none";
  optionTwoScreen.style.display = "none";
  optionOneScreen.style.display = "none";
   questionsContainer.style.display = "block";
  buttonContainer.style.display = "block";
}
