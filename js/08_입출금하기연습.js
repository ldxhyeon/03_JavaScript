
let amonut = '';

let balance = 10000;

const password = '1234';

let amount = document.getElementById("amount");
let output = document.getElementById("output");

document.getElementById("output").innerText = balance;

function deposit() {

  const num1 = Number(amount.value);

  balance += num1;

  output.innerText = balance;

  amount.value='';
}

function withdrawal() {

  const num1 = Number(amount.value);
  const num2 = Number(output.value);

  if(num1 > balance) {
    alert("출금 금액이 잔액보다 클 수 없습니다");
    return;
  }

  if(num1 >= balance) {
    var minus = balance - num1;
    alert(`${num1}원이 출금 되었습니다. 남은 잔액 : ${minus} `);
  }


  balance -= num1;

  output.innerText = balance;

  amount.value='';
}