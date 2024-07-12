

const startBtn = document.querySelector("#startBtn");

const number = document.querySelectorAll(".number");

const mainBox = document.querySelector(".main-box");

mainBox.innerHTML = '';

startBtn.addEventListener("click",() => {

  for (let i = 0; i < number.length; i++) {
    mainBox.appendChild(number[i]); 
    number[i].addEventListener("click",() => {
      number[i].style.backgroundColor = 'pink';
    });
  }
 

});







