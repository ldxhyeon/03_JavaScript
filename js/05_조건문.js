


function check1() {

  // id가 "input1"인 요소를 얻어와 input1 변수에 저장
  const input1 = document.getElementById('input1');

  // input1.value : input1 요소에 입력된 값 (string)
  // Number(문자열) : 문자열 -> 숫자로 변경
  const value = Number(input1.value);

  // value의 값이 0보다 크면 true
  if(value > 0) {
    alert(`${value} 은/는 양수입니다.`);
  }
  
  // 입력 받은 값이 0보다 작거나 같은 경우
  // == 양수가 아닌 경우
  if (value <= 0) {
    alert(`${value} 은/는 양수가 아닙니다.`)
  }
}

/** if ~ esle 예시 - 0~99 난수 홀/짝 판별 */
function check2() {

  // 난수 발생 : Math.random();
  //    -> 0.0 <= 난수 < 1.0

  // 내림 처리 : Math.floor(실수)
  //             소수점 첫째자리에 내림처리                  
  //           -> 정수 형태로 변환

  // 0~99 사이 난수 발생
  const randomNumber = Math.floor(Math.random() * 100);

  if(randomNumber % 2 == 0) {
    alert(`${randomNumber}은/는 짝수입니다.`)
  }else {
    alert(`${randomNumber}은/는 홀수입니다.`)
  }
}

/** if ~ else if ~ else 예시 - 양수,음수,0 판별 */
function check3() {

  const input3 = document.getElementById('input3');

  const value = Number(input3.value);

  let result; //결과를 저장할 변수

  if(value > 0) {
    result = '양수';
  }else if(value < 0) {
    result='음수';
  }else {
    result = '0'
  }

  alert(`${value} 은/는 ${result} 입니다.`)
}


function ageCheck() {
  const inputage = document.getElementById("inputAge")

  const value = Number(inputage.value);

  if(value <= 13 && value >= 0) {
    alert(`${value} 은/는 어린이입니다.`)
  }else if(value <= 19 && value >= 14 ) {
    alert(`${value} 은/는 청소년입니다.`)
  }else if( value <= 120 && value >= 20) {
    alert(`${value} 은/는 성인입니다.`)
  }else {
    alert(`${value} 잘못 입력하셨습니다.`)
  }
}

//** 어린이, 청소년, 성인 구분하기 Ver2 */
function ageCheck2() {
  const inputage = document.getElementById("inputAge")

  const value = Number(inputage.value);

  let result;

   // 0 미만, 120 초과
  if(value < 0 || value > 120){
    // true가 하나라도 있어야 아래 코드 실행
    result = "잘못 입력 하셨습니다";  
  }else if( value <= 13) {
    result = "어린이."
  }else if( value <= 19) {
    result = "청소년"
  }else if( value <= 120 ) {
    result = "성인"
  }else {
    result = "잘못 입력 하셨습니다."
  }

  alert(result);
}

/** 입력 받은 수가 3의 배수가 맞는지 검사 */
function check4() {
  const input4 = document.getElementById('input4')
  const value = Number(input4.value);

  // 3의 배수가 맞으면 : YES
  // 3의 배수가 아니면 : NO
  // 음수 입력         : 양수만 입력해 주세요.
  // 입력된 값이 없다면 : 값을 입력해 주세요.


 // 입력된 값이 없다면: 값을 입력해 주세요
 if(input4.value.length === 0){
  // 문자열.length == 문자열의 길이를 반환
  alert("값을 입력해 주세요");

} else { // 값 입력 O
  // 여기선 0도 양수로 취급

  if(value >= 0){ // 양수

    if(value % 3 === 0){
      // 3의 배수가 맞으면 : YES
      alert("YES");
    }else{
      // 3의 배수가 아니면 : NO
      alert("NO");
    }

  }else{
    // 음수 입력         : 양수만 입력해 주세요
    alert("양수만 입력해 주세요");
  }
}

}

/* 
  - if ~ else if ~ else 에서
  앞선 if의 조건이 false 가 되면
  해당 범위는 이후 조건에서 제외된다.

  - if, else if, else, for, while 등
  {} 내부에 코드가 한 줄만 존재하는 경우
  {} 생략 가능!
 */



function check5() {
  const a = document.getElementById('input5a');
  const b = document.getElementById('input5b');
   // 1) A와 B중 하나라도 입력되지 않으면
  // -> 입력되지 않은 값이 존재합니다
  if(a.value.length === 0 || b.value.length === 0){
    alert("입력되지 않은 값이 존재합니다");
    return; // Early Reutrn : 함수를 여기서 일찍 끝냄
  }

  // 두 값이 모두 입력되어 있을 경우에만 아래 코드 수행
  const valueA = Number(a.value);
  const valueB = Number(b.value);

  // 2) A가 B보다 작으면 -> A가 B보다 작습니다
  if(valueA < valueB) {
    alert("A가 B보다 작습니다")
    return;
  }

  // 위 if 실행 X -> A가 B보다 크거나 같다
  if(valueA % valueB === 0) {
    alert('배수 맞음')
    return;
  }
    alert('배수 아님');
}


/** switch 버전 계산기 만들기 */
// 매개 변수 (Parameter)
// - 함수 호출 시 전달된 값(전달 인자, Arguments)을
// 저장하는 변수

/** switch 버전 계산기 만들기
 * @param op : 전달 받은 연산 기호
 */

function calc(op) {

  const number1 = document.getElementById("number1");
  const number2 = document.getElementById("number2");

  const value1 = Number(number1.value);
  const value2 = Number(number2.value);

  // 입력된 값, 전달받은 값 확인
  console.log(value1, value2, op);
  
  let result;

  // op값에 따라 알맞은 case 실행
  /* break : 현재 case까지만 해석하고 switch문을 멈춤 
    -> break 미작성 시
    현재 case 수행 후 멈추지 않고
    break가 존재하는 case문까지 계속 수행
    -> 중간에 break 없으면 defalut 까지 수행
  */ 
 
  switch(op) {
    case '+' : result = value1+value2; break;
    case '-' : result = value1-value2; break;
    case '*' : result = value1*value2; break;
    case '/' : result = value1/value2; break;
    case '%' : result = value1%value2; break;

    //알맞은 case가 없으면 default 실행
    default : result = "잘못된 연산자"
  }

  document.getElementById("calcResult").innerText = result;
}


function check6() {
  const input6 = document.getElementById('input6');
  const value = Number(input6.value);

  let result;

  switch(value) {
    case 3 : 
    case 4 : 
    case 5 : result = "봄"; break;

    case 6 : 
    case 7 : 
    case 8 : result = "여름"; break;

    case 9 : 
    case 10 : 
    case 11 : result = "가을"; break;

    case 12 : 
    case 1 : 
    case 2 : result = "겨울"; break;

    default : result = "잘못 입력";
  }
    alert(result);
}


// 연습!!!!

// function calc(op) {
//   const num1 = document.getElementById("num1");
//   const num2 = document.getElementById("num2");

//   let result;
  
//   const value1 = Number(num1.value);
//   const value2 = Number(num2.value);

//   switch(op) {
//     case '+' : result = value1+value2; break;
//   }
  
//   document.getElementById("result").innerText = result;
// }
 




























































































