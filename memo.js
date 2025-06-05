// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <h1>숫자 맞추기 게임</h1>

//   <div id="resultArea">결과값이 여기에 나옵니다.</div>
//   <div id="chanceArea">남은기회 : 5회</div>
//   <input type="number" id="userInput">
//   <button id="playBtn">Go</button>
//   <button id="resetBtn">Reset</button>


//   <script src="main.js"></script>
// </body>
// </html>




































/**
 * getElementbyClassName : 클래스 이름으로 선택
 * getElementbyId : id 이름으로 선택
 * querySelector : id, class 태그 등 다양한 방식으로 선택
 *
 *
 *
 * 랜덤번호지정
 * 🎉유저) 번호 입력
 * 🎉유저) go버튼 클릭
 *
 * 시스템)
 * 🎉랜덤숫자 맞추면 --> 맞췄습니다!
 * 🎉랜덤숫자 > 유저입력 --> Down
 * 🎉랜덤숫자 < 유저입력 --> Up
 * 🎉Reset버튼 클릭시 --> 게임 리셋
 * 🎉처음 5번 기회제공 (모두 소진시 종료, 버튼 disabled)
 * 🎉유저가 1~100 범위 밖 숫자 입력시 --> 안내 (기회차감x)
 * 유저가 이미 입력한 숫자를 재입력시 --> 안내 (기회차감x)
 *
//  */

// let computerNum = 0;
// let playBtn = document.getElementById("playBtn");
// let userInput = document.getElementById("userInput");
// let resultArea = document.getElementById("resultArea");
// let resetBtn = document.getElementById("resetBtn");
// let chances = 5;
// let gameOver = false;
// let chanceArea = document.getElementById("chanceArea");
// let history = [];

// playBtn.addEventListener("click", play);
// resetBtn.addEventListener("click", reset);
// userInput.addEventListener("focus", function(){userInput.value="";})

// function pickRandomNum() {
//   computerNum = Math.floor(Math.random() * 100);
//   console.log("정답 : ", computerNum);
// }
// pickRandomNum();

// function play() {
//   let userValue = userInput.value;
//   if (userValue < 0 || userValue > 100) {
//     resultArea.textContent = "1~100사이의 숫자를 입력해주세요.";
//     return;
//   }
//   if (history.includes(userValue)) {
//     resultArea.textContent = "이미 입력한 숫자입니다. 다른숫자를 입력해주세요.";
//     return;
//   }
//   chances--;
//   console.log(chances);
//   if (userValue < computerNum) {
//     resultArea.textContent = "Up!!~";
//     chanceArea.textContent = `남은기회 : ${chances}`;
//   } else if (userValue > computerNum) {
//     resultArea.textContent = "Down!!~";
//     chanceArea.textContent = `남은기회 : ${chances}`;
//   } else {
//     resultArea.textContent = "맞췄다잉!~~";
//     chanceArea.textContent = `남은기회 : ${chances}`;
//     playBtn.disabled = true;
//   }

//   history.push(userValue);
//   console.log(history);

//   if (chances < 1) {
//     gameOver = true;
//   }
//   if (gameOver == true) {
//     playBtn.disabled = true;
//   }
//   userInput.textContent = "";
// }

// function reset() {
//   /**
//    * userInput창 정리     *
//    * 새로운 랜덤번호 생성
//    */
//   userInput.value = "";
//   pickRandomNum();
//   resultArea.textContent = "결과값이 여기에 나옵니다.";
//   playBtn.disabled = false;
//   chanceArea.textContent = "남은기회 : 5회"
// }
