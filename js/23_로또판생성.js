


const startBtn = document.querySelector("#startBtn");

const lottoBox = document.querySelector(".loto-box");

const mainBox = document.querySelector(".main-box")





startBtn.addEventListener("click", () => {

  // 버튼 눌렀을때 기존 데이터 초기화
  mainBox.innerHTML = '';

  for(let i = 1; i <= 45; i++){
    const number = document.createElement("div"); 
    number.classList.add("number");
    number.textContent = i;
    // mianbox 자식으로 number로 정의된 것을 할당한다
    mainBox.appendChild(number);

    number.addEventListener("click",() => {
      // 클래스 액티브인 요소를 가져온다.
      const selectedNumbers = document.querySelectorAll(".active");
      
      if (selectedNumbers.length >= 6) {
        alert("6개 까지만 선택 가능합니다");
        return;
      }

      // div요소에 active 클래스가 없으면 추가한다 
      // active 클래스가 존재한다면 삭제한다.
      // ex) 한 번 누르면 색상 적용 두 번 누르면 색상 제거
      number.classList.toggle("active");

    });
  }

});



