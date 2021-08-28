const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answers-btn");
const result = document.querySelector(".output");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

submitButton.addEventListener("click", calculateScore);

function calculateScore() {

  const formResult = new FormData(quizForm);
  console.log(formResult.values());
  var score = 0;
  var index = 0;

  for (var value of formResult.values()) {

    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  result.innerText = `The score is ${score}`;
}
