

const number = document.querySelectorAll(".number");
const numberText = document.querySelector(".numberText");

const initialBtn = document.querySelector(".initialBtn");



for(let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {

    if(numberText.textContent.length >= 10) {
      alert("10글자 까지만 입력 가능");
      return;
    }

    numberText.textContent += e.target.textContent;
                              // number[i].textContent 도 가능!
  });
  
}

initialBtn.addEventListener("click", () => {
  numberText.innerText = '';
});