

const userImg = document.querySelector("#user");
const comImg = document.querySelector("#com");

const StartBtn = document.querySelector(".gameStartBtn");

const playCount = document.querySelectorAll(".playCount");

const playResult = document.querySelectorAll(".text-box");




StartBtn.addEventListener("click", () => {

  let playNum = Number(prompt("진행할 판 수를 입력하세요."));

  //isNaN = 숫자타입인데 숫자로 변환을 못하는 경우 true반환
  if(playNum == 0 || isNaN(playNum)) {
    alert("숫자를 입력해주세요.");
    return;
  }

   

  userImg.src = "";
  comImg.src = "";
  
  for(let i = 0; i < playCount.length; i++) {
    playCount[i].textContent  = "0";
  }

  for(let x = 0; x < playResult.length; x++) {
    playResult[x].innerHTML = "";
  }

    

});

const scissorsBtn = document.querySelector(".scissors");

const playImg = document.querySelector(".img-box img");



scissorsBtn.addEventListener("click", () => {
  
  playImg.src = "./images/바위L.png";

});


