const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");
const result = document.querySelector(".output");

isTriangleButton.addEventListener("click", checkIsTriangle);

function checkIsTriangle() {

  console.log("clicked");
  var angleSum = Number(inputs[0].value) +  Number(inputs[1].value) +  Number(inputs[2].value) ;
  console.log(typeof angleSum);

  if (angleSum === 180) {
    console.log("Yay, the angles form a triangle!");
    result.innerText = "Yay, the angles form a triangle!";

  }else {
    console.log("Oh Oh! The angle doesn't form a triangle");
    result.innerText = "Oh Oh! The angle doesn't form a triangle";
  }
}
