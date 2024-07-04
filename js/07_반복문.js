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

function check7() {

  for(let num = 3; num <= 30; num+=3) {
    console.log(num);
  }


}