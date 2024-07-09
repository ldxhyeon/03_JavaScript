
// const key = document.querySelectorAll(".key-value");


// document.addEventListener("keydown",function(e){

//   let index;

//   switch(e.key.toLowerCase()) {
//     case 'q' : index = 0; break;
//     case 'w' : index = 1; break;
//     case 'e' : index = 2; break;
//     case 'r' : index = 3; break;
//   }
//   key[index].style.backgroundColor = 'pink';
// });


// document.addEventListener("keyup",function(e){

//   let index;

//   switch(e.key.toLowerCase()) {
//     case 'q' : index = 0; break;
//     case 'w' : index = 1; break;
//     case 'e' : index = 2; break;
//     case 'r' : index = 3; break;
//   }

//   key[index].style.backgroundColor = 'white';
// });










const coInput = document.querySelectorAll(".color-input");
const boxs = document.querySelectorAll(".box");

const changeBtn = document.querySelector("#changeButton");

changeBtn.addEventListener("click", function(){

  const checkBtn =  document.querySelector("[name = opacity-btn]:checked");

  let op;
  if(checkBtn == null) {
    op = 1;
  }else {
    op = checkBtn.value;
  }

  for(let i = 0; i < boxs.length; i++) {

    boxs[i].style.backgroundColor = coInput[i].value

    boxs[i].style.opacity = op;
  }
});































































