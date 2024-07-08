
/* class를 이용한 요소(DOM 객체) 접근 방법 */
function classTest() {

  const divs = document.getElementsByClassName("cls-test");
  

  // 0부터 divs 길이 미만까지 반복
  for(let i=0 ; i<divs.length ; i++){ // i == 0,1,2
    // 요소.innerText = "값";  // 요소 내용으로 "값" 대입
    // 요소.innerText;         // 요소 내용 얻어오기

    console.log(divs[i].innerText);

    divs[i].style.backgroundColor = divs[i].innerText;
  }
}

/* input에 입력된 숫자 모두 얻어와 합계 구하기 */
function classTest2() {
  
  /* input 요소에 업력된 값 얻어오는 방법
    -> input요소.value

    HTML 요소에서 얻어온 값의 자료형은
    -> 모두 string(문자열)

    합계 구하는 방법
    -> let sum = 0; 선언 후 누적
    
    HTML 문서에서 class 속성값이 일치하는 요소 모두 얻어오기
    -> document.getElementsByClassName("class 속성 값")
      -> HTMLCollection (유사배열) 형태로 변환
  */


  // 클래스가 "cls-test2"인 요소를 모두 얻어옴
  // -> HTMLCollection (유사배열) 형태로 변환
  const elements = document.getElementsByClassName("cls-test2");

  let sum = 0;

  for(let i = 0; i < elements.length; i++) {
    // elements[i] == input 요소 하나

    sum += Number(elements[i].value);

    
  }
  alert(`합계 : ${sum}`);
}

/* 태그명으로 요소 접근하기 */
function tagNameTest() {

  /* document.getElementsByTagName */

  const tagList = document.getElementsByTagName("li");
  // -> 요소 4개짜리 배열 반환

  for(let i = 0; i < tagList.length; i++) {
    // 글자색 변경
    tagList[i].style.color = tagList[i].innerText;

    // 테두리 변경
    tagList[i].style.border = `3px solid ${tagList[i].innerText}`;
  }

}

/* name으로 요소 접근하기 (취미 선택) */
function nameTest() {

  /* documnet.getElementsByName("name 속성 값") 
    -> NodeList (유사 배열)반환
  */

  // name 속성 값이 "hobby"인 요소를 모두 얻어와 저장
  const hobbyList = document.getElementsByName("hobby");

  let str = ''; // 체크된 input에 value를 누적
  let count = 0;  // 체크된 input의 개수를 카운트

  // i == 0,1,2,3,4,5 (길이는 6, 마지막 인덱스는 5(길이-1))
  for(let i = 0; i < hobbyList.length; i++) {

    /* 요소.checked -> checkbox, radio 타입 전용 속성 
    
      요소.checked = true; -> 해당 요소 체크
      요소.checked = false; -> 해당 요소 체크 해제
      요소.checked; -> 체크 여부 반환
                        (체크o -> true, 체크 x -> false)

    */

    // i번쨰 input 요소가 체크되어 있을 경우
    if(hobbyList[i].checked === true) {
      // console.log(hobbyList[i].value);
      str += `${hobbyList[i].value} `; // value 누적
      count ++;
    }
  } // for end

  // 클래스가 name-div인 요소에 str, count 출력

  // document.getElementsByClassName("name-div");
  // -> 요소가 한개밖에 없어도 배열 형태로 반환
  // -> 0번 인덱스만 별도 변수에 저장해서 사용
  const div = document.getElementsByClassName("name-div")[0];

  div.innerHTML = `${str} <br><br> 선택된 취미 개수 : ${count}개`;
}


/* css 선택자로 요소 접근 */
function cssTest1() {

  // target-div 속성 값이 css-div인 요소 하나 선택
  const container = document.querySelector('[target-div = css-div');

  container.style.width = "200px";
  container.style.height = "200px";
  container.style.border = "10px solid orange";

  // target-div 속성 값이 css-div인 요소의
  // 자식 중 div 요소를 모두 선택해 얻어옴
  const divs = document.querySelectorAll('[target-div = css-div] > div');

  // i == 0,1
  for(let i = 0; i < divs.length; i++) {
    divs[i].style.height = "50%";

    divs[i].style.display = "flex";

    divs[i].style.justifyContent = "center";

    divs[i].style.alignItems = "center";

    divs[i].style.border = "1px solid #333";
    

  }

  // index별로 배경색 따로 지정
  divs[0].style.backgroundColor = "pink";
  divs[1].style.backgroundColor = "yellowgreen";

  // divs 사용하지 말고
  // "test1"이 작성된 요소를 선택해
  // fontSize = "30px"로 변경

  /* querySelector */
  // "[target-div = css-div] > div" 들 중에서
  // 첫 번째 요소만 선택
  const test1 = document.querySelector('[target-div = css-div] > div');

  test1.style.fontSize ="30px";
}























