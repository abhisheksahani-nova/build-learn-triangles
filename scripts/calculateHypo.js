var sides = document.querySelectorAll(".side-input");
var calculateButton = document.querySelector("#cal-hypotenuse-btn");
var result = document.querySelector(".output");

calculateButton.addEventListener("click", calculateHypotenuse );

function calculateHypotenuse() {
  var sideSquareSum = Number(sides[0].value)*Number(sides[0].value) + Number(sides[1].value)*Number(sides[1].value);
  console.log(sideSquareSum);

  var hypotenuse = Math.sqrt(sideSquareSum);
  console.log(hypotenuse);

  result.innerText = "The length of hypotenuse is " + hypotenuse ;
}
