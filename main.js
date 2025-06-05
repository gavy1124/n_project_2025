{
  /* <div id="resultArea"></div>

<input type="number" id="inputBox">
<button id="goButton">Go</button>
<button id="resetButton">Rest</button> */
}

let goButton = document.getElementById("goButton");
let inputBox = document.getElementById("inputBox");
let resetButton = document.getElementById("resetButton");
let hint = document.getElementById("hint");
let resultArea = document.getElementById("resultArea");
let random = Math.round(Math.random() * 100);
let count = 5;
let already = [];


goButton.addEventListener("click", go);
resetButton.addEventListener("click", reset);
inputBox.addEventListener("focus", function () {inputBox.value = ''})

console.log(random);

function go() {
  let inputValue = inputBox.value;
  
  //유효성검사
  if (inputValue > 100 || inputValue < 0 || inputValue == "") {
    hint.textContent = "1~100 사이의 숫자를 입력해라";
    resultArea.textContent = `남은기회 : ${count}번`;
    return;
  }
  if (already.includes(inputValue)) {
    
    hint.textContent = "이미 입력된숫자 입니다.";
    resultArea.textContent = `남은기회 : ${count}번`;
    console.log(9999);
    return;
  }

  count--;
  if (inputValue > random) {
    already.push(inputValue);
    resultArea.textContent = `남은기회 : ${count}`;
    hint.textContent = `Down!!`;
  } else if (inputValue < random) {
    already.push(inputValue);
    resultArea.textContent = `남은기회 : ${count}`;
    hint.textContent = `Up!!`;
  } else if (inputValue == random) {
    resultArea.textContent = `남은기회 : ${count}`;
    hint.textContent = `Suecess!!`;
    goButton.disabled = true;
  }

  if (count == 0) {
    goButton.disabled = true;
  }
  console.log(already);
}

function reset() {
  random = Math.round(Math.random() * 100);
  console.log(random);
  goButton.disabled = false;
  count = 5;
  resultArea.textContent = `남은기회 : ${count}`;
  already = [];
  
}
