

function createTable() {


  // 시작 단
  const startInput = document.getElementById("start");

  // 종료 단
  const endInput = document.getElementById("end");

  // 테이블 머리(제목)을 작성하는 영역(행)
  const theadRow = document.getElementById("thead-row");


  // 테이블 몸통(내용, 데이터)를 작성하는 부분
  const tbody = document.getElementById("tbody")
  
  // -------------------------------------------------------
  // 이전 #thead-row, #tbody에 작성된 내용을 모두 삭제

  theadRow.innerHTML = "";
  tbody.innerHTML = "";
  
  // -------------------------------------------------------

  /* 입력 받은 단을 숫자로 number 타입으로 변경 */
  const start = Number(startInput.value);
  const end = Number(endInput.value);

  sum = 0; 

  // --------------------------------------------------------

  // 단(제목) 만들기

  // 시작 단 ~ 종료 단 반복문
  for(let dan = start ; dan <= end ; dan++) {

    theadRow.innerHTML += `<th>${dan}단</th>`
  };

  // start * 1~9
  // end * 1~9


  // --------------------------------------------

  // 구구단(내용) 만들기

  // 구구단에 곱해지는 수 (1~-) 반복 == 행
  for(let num =1 ; num <= 9; num++) {

    // 한 줄을 저장할 변수 선언
    let tr = "<tr></tr>";

    for(let dan = start; dan <= end; dan++) {
      tr += `<td>${dan} x ${num} = ${dan * num}</td>`;
    }

    tr += "</tr>";

    // 만들어진 한 줄을 #tbody에 누적
    tbody.innerHTML += tr;

  }

  // for(let dan = 1 ; dan <= 9 ; dan++) {
  //   let sum = dan;
  //   tbody.innerHTML += `<td>${dan} x ${sum} =  </td>`
  //   console.log(sum);
  // }
    
}