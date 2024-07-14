

const userImg = document.querySelector("#user");
const comImg = document.querySelector("#com");

const StartBtn = document.querySelector(".gameStartBtn");

const playCount = document.querySelectorAll(".playCount");

const playResult = document.querySelector(".text-box");

const gameResult = document.querySelectorAll(".gameResult");



let playNum;

let count = 0;


StartBtn.addEventListener("click", () => {

  playNum = Number(prompt("진행할 판 수를 입력하세요."));

  //isNaN = 숫자타입인데 숫자로 변환을 못하는 경우 true반환
  if(playNum === 0 || isNaN(playNum)) {
    alert("숫자를 입력해주세요.");
    return;
  }

   

  userImg.src = "";
  comImg.src = "";
  count = 0; // start를 눌렀을떄 초기화를 안하면 count값이 누적된거로 인식하여 진행 안됨

  playResult.innerHTML = "";
  
  
  for(let i = 0; i < playCount.length; i++) {
    playCount[i].textContent  = "0";
  }

    

});


// const playImg = document.querySelector(".img-box img");

let choice = ["가위", "바위", "보"];


for(let i = 0; i < gameResult.length; i++) {
 gameResult[i].addEventListener("click", () => {

  // ===은 playNum이 엄격하게 null인 경우에만 true를 반환합니다. 
  // 즉, playNum이 null이고 데이터 유형이 null인 경우에만 true가 됩니다.
  if(playNum == null) {
    alert("GAME START 버튼을 눌러 시작해주세요");
    return;
  }

  if (count >= playNum) {
    alert("게임이 종료되었습니다. 다시 시작하려면 GAME START 버튼을 눌러주세요.");
    return;
  }

  let userChoice = choice[i];
  let randomIndex = Math.floor(Math.random() * 3);
  let comChoice = choice[randomIndex];

  
  userImg.src = `./images/${userChoice}L.png`;

  comImg.src = `./images/${comChoice}R.png`;

  const str = `<span>${userChoice}</span><span>VS</span><span>${comChoice}</span>`

  if(userChoice === comChoice) {
    playCount[1].innerHTML = Number(playCount[1].innerHTML) + 1;
    playResult.innerHTML += `<div><span style="color:green; font-weight: bold;">DRAW</span>${str}</div>`


  }else if((userChoice === "가위" && comChoice === "보") 
        || (userChoice === "바위" && comChoice === "가위") 
        || (userChoice === "보" && comChoice === "바위")) {
    playCount[0].innerHTML = Number(playCount[0].innerHTML) + 1;
    playResult.innerHTML += `<div><span style="color:red; font-weight: bold;">WIN</span>${str}</div>`

  }else {
    playCount[2].innerHTML = Number(playCount[2].innerHTML) + 1;
    playResult.innerHTML += `<div><span style="color:blue; font-weight: bold;">LOSE</span>${str}</div>`
  }



  playCount[i]++;

  count++;

  

 });
 
 
}


