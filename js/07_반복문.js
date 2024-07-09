/* 
 for([1]초기식 ; [2]조건식 ; [4]증감식){
  [3]조건식이 true인 경우 반복 수행할 코드;
}
 */

/** 12345 출력 */
function check1() {

  // num이 1부터 시작해서
  // 1씩 증가 하다가
  // num 값이 5 이하가 아닌 순간 반복을 종료하는 반복문
  for(let num = 1; num < 6 ; num++) {
    console.log(num);
  }
}


function check2() {

  for(let num = 1; num <= 10; num++ ) {
    console.log(num);
  }
}

function check3() {

  for(let num = 5; num <= 13; num++ ) {
    console.log(num);
  }
}

function check4() {

  let result = '';

  for(let num = 1; num <= 5; num++ ) {
    result += num;
    
  }

  console.log(result);
}



function check5() {

  // shift + alt + r = 같은 단어 한번에 변경 단축키

  let sum = 0; // 더했을 때 영향이 없는 숫자 0을

  for(let num = 1; num <= 10; num++) {
    sum += num;
  }

  alert(sum);
}


function check6() {

  for(let num = 1; num <= 10; num+=2) {
    console.log(num);
  }

}



// function check7() {

//   for(let num = 3; num <= 30; num+=3) {
//     console.log(num);
//   }
// }


function check7(){
  for(let i = 3; i <=30; i+=3) {
    console.log(i);
  }
}

/** 1부터 20까지 4의 배수만 출력하고 합계도 구하기 */
function check8() {

  let sum = 0;

  for(let num = 1; num <= 20; num++) {
    if(num % 4 === 0) {
      console.log(num);
      sum += num;
    }
  }
  console.log("합계 : ", sum);

}

// //  다른 방식의 풀이
// function check8() {
  
//   let sum = 0;

//   for(let i = 4; i <=20; i+=4) {
//     console.log(i);
//     sum += i;
//   }
//   console.log("합계 : ", sum);
// } 



// /* 입력 받은 범위 내 지정된 배수 출력 / 합계 구하기 */
// function check9() {

//   const start9 = document.getElementById("start9");
//   const end9 = document.getElementById("end9");
//   const multiple9 = document.getElementById("multiple9");

//   // input 요소에 작성된 값을 얻어와 숫자로 변환해서 저장
//   const s = Number(start9.value);
//   const e = Number(end9.value);
//   const m = Number(multiple9.value);


//   let sum = 0;

//   for(let num = s; num <= e; num++ ) {
//     if(num % m === 0) {
//       console.log(num);
//       sum += num;
//     }
//   }
//   console.log("합계 :", sum);
// }


function check9() {
  const start9 = document.getElementById("start9");
  const end9 = document.getElementById("end9");
  const multiple9 = document.getElementById("multiple9");

   const startnum1 = Number(start9.value);
   const endnum2 = Number(end9.value);
   const mutiplenum3 = Number(multiple9.value);

   let sum = 0;



   for(let num = startnum1; num <= endnum2; num += mutiplenum3) {
    console.log(num);
    sum += num;
   }

   console.log("합계 : ", sum);
}


/* 입력 받은 단(2~9)의 구구단 */
function check10() {

  const input = document.getElementById("dan");

  let sum = 0;

  // 단이 입력되지 않은 경우
  if(input.value.length === 0) {
    alert("단을 입력해 주세요.")
    return;
  }

  const dan = Number(input.value);

  // 단이 2~9 사이가 아닌 경우
  if(dan < 2 || dan > 9 ) {
    alert("2~9 사이 숫자를 입력해 주세요.");
    return;
  }
    
  for(let num = 1; num <= 9; num++) {
    console.log(`${dan} X ${num}`);
  }
}



// check10 다른 방식의 풀이
// function check10() {

//   const dan = document.getElementById("dan");

//   const num = Number(dan.value);

//   if(num < 2 || num > 9)  {
//     alert("2~9사이 숫자를 입력해주세요.");
//   }


//   for(let row = 1; row <= 9; row++) {
//     let sum = num * row;
//     console.log(`${num} X ${row} = ${sum}`);
//   }
 
// }




function check11() {
  for(let i = 10; i >= 1; i--) {
    console.log(i);
  }
}



// function check12() {

//   const input = document.getElementById("dan12");

//   let sum = 0;

//   // 단이 입력되지 않은 경우
//   if(input.value.length === 0) {
//     alert("단을 입력해 주세요.")
//     return;
//   }

//   const dan = Number(input.value);

//   // 단이 2~9 사이가 아닌 경우
//   if(dan < 2 || dan > 9 ) {
//     alert("2~9 사이 숫자를 입력해 주세요.");
//     return;
//   }
    
//   for(let num = 9; num >= 1; num--) {
//     console.log(`${dan} X ${num}`);
//   }
// }



// function check13() {

//   const input13 = document.getElementById("input13");
//   const output13 = document.getElementById("output13");
//   const result = document.getElementById("result13");

//   const multiple = Number(input13.value);

//   const shape = output13.value;

//   let str = '';

//   for(let num = 1; num <= 20; num++) {

//     if(num % multiple === 0) {
//       // console.log(shape);
//       str += `${shape} `
//     }else {
//       // console.log(num);
//       str += `${num} `;
//     }

//     // num === 10일때 줄을 변경하는 <br>추가
//     if(num === 10)
//     str += "<br>";

//   }

//   result.innerHTML = str
// }

function check13() {
  const input13 = document.getElementById("input13");

  const output13 = document.getElementById("output13");

  const result = document.getElementById("result13");

  let str = '';
  
  const dan = Number(input13.value);

  for(let i = 1; i <= 20; i++) {
    console.log(i);
    str += i;
  }

  result.innerHTML = str;


}

    


/* 다음 모영 출력하기
  1234
  1234
  1234
 */

function check14() {
  // 행은 3번 반복
  // 1행 마다 4번 반복

  for(let row = 1; row <= 4; row++) {

    let str = ''; // 한 행의 출력될 문자열을 저장할 변수

    for(let col = 1; col<= 4; col++) {
      console.log(col);
      str += col;
    }

    // 안쪽 for문 반복 결과를 출력
    console.log(str);
    console.log("-------");
  }
  
}

function check15() {
  // 행은 3번 반복
  // 1행 마다 4번 반복

  for(let row = 0; row < 4; row++) { 

    let str = ''; // 한 행의 출력될 문자열을 저장할 변수

    for(let col = 0; col < 5; col++) {  
      str += col;
      // str = '' + 0
    }
    
    // 안쪽 for문 반복 결과를 출력
    console.log(str);
    console.log("-------");
  }
  
}


function check16(){
  
  for(let row=0 ; row<3 ; row++){ // 0,1,2 3회 반복

    let str = '';
    for(let col=6 ; col >=1 ; col--){
      str += col;
    }
    console.log(str);
    console.log("-------");

  }
}


function check17(){
  
  for(let row=0 ; row<3 ; row++){ 

    let str = '';
    for(let col=6 ; col >=1 ; col--){
      str += col;
    }
    console.log(str);
    console.log("-------");

  }
}

function check18(){

  for(let row = 1 ; row <= 4 ; row++){

    let str = '';
    for(let col = 1 ; col <= row ; col++){
      str += '*'; // 숫자 대신 '*' 누적
    }
    console.log(str);
  }
}

function check19() {
  for(let row = 5 ; row >= 1 ; row--){

    let str = '';

    for(let col = 1 ; col <= row ; col++){
      str += col;
    }
    console.log(str);

  }
}

/** 1부터 30 사이의 정수 중 4의 배수의 개수 구하기  */
function check20() {

  let count = 0;


  for(let num = 1; num <= 30 ; num++) {
    if(num % 4 === 0) {
      count++;
    }
  }
  alert(`count : ${count}`);
}


function check21() {

  let count = 0;
  
  const input21 = document.getElementById("input21");

  const num1 = Number(input21.value);

 
  for(let num = 1; num <= 100 ; num++) {
    if(num % num1 === 0) {
      count++;
    }
  }
  alert(`count : ${count}`);
}

/** count를 이용해 다음 모양 출력하기 */
function check22() {

  let count = 1;

  for(let row = 1; row <= 3; row++) {

    let str ='';

    for(let col = 1; col <= 4; col++) {
      str += count++;
    }

  console.log(str);
  console.log("-------");
  }
}

/** while문 */
/** 0이 입력될 때 까지 입력된 값 누적하기 */
function check23() {
  let sum = 0;

  let value;

  // 입력된 숫자가 0이 아니면 반복해라
  while( (value = Number(prompt("숫자 입력"))) != 0 ) {
    sum += value;
  }

  alert(`합계 : ${sum}`)
}

/** 메뉴 주문하기 */
function check24() {

  // 메뉴 가격을 저장한 변수 선언
  const gimbap = 4000;
  const ramen = 4500;
  const donkkaseu = 9000;

  // 주문 개수 카운트

  let gimbapCount = 0; // 김밥 주문 개수 카운트하는 변수
  let ramenCount = 0; // 라면
  let donkkaseuCount = 0; // 돈까스

  let input; // 선언만 한 경우 undefined

  // input이 undefiend이기 때문에
  // while문 첫 반복은 무조건 수행됨!!
  while(input !== null) { // input이 null이 아니면 반복
    
    // prompt -> 확인 : 작성한 값 반환
    // prompt -> 취소 : null
    //        -> 취소 선택 시 
    //            while문 다음 반복 수행 X
    input = prompt("메뉴 번호 입력");
    
    // input 값에 따라서 알맞는 case 수행
    switch(input) {
      case '1' : gimbapCount++; break;
      case '2' : ramenCount++; break;
      case '3' : donkkaseuCount++; break;
      case null : alert("주문 완료"); break;
      default : alert("메뉴에 작성된 번호만 입력해 주세요."); break;
    }
  } // while end

  let html = ''; // 화면에 출력될 html 코드를 저장할 변수

  if(gimbapCount > 0) {
    html += `<li>김밥(${gimbapCount}개) :: ${gimbapCount * gimbap}</li>`
  }

  if(ramenCount > 0) {
    html += `<li>라면(${ramenCount}개) :: ${ramenCount * gimbap}</li>`
  }

  if(donkkaseuCount > 0) {
    html += `<li>돈까스(${ramenCount}개) :: ${ramenCount * gimbap}</li>`
  }
  
  // 주문한 메뉴 합계 저장
  const sum = (gimbapCount * gimbap)
              + (ramenCount * ramen) 
              + (donkkaseuCount * donkkaseu);

  html += `<li>합계 : ${sum}원</li>`;

   // id가 "result24"인 요소에 내용으로 html 변수 값 추가
  // + HTML 태그 해석
  document.getElementById("result24").innerHTML = html;


}

