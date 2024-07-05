
// let amonut = '';

// let balance = 10000;

// const password = '1234';

// let amount = document.getElementById("amount");
// let output = document.getElementById("output");

// document.getElementById("output").innerText = balance;

// function deposit() {

//   const num1 = Number(amount.value);

//   balance += num1;

//   output.innerText = balance;

//   amount.value='';
// }

// function withdrawal() {

//   const num1 = Number(amount.value);

//   const pw = prompt("비밀번호를 입력해주세요.")

//   if(pw !== password) {
//     alert("비밀번호가 일치하지 않습니다.")
//     amount.value='';
//     return;
//   }

//   if(num1 > balance) {
//     alert("출금 금액이 잔액보다 클 수 없습니다");
//     amount.value='';
//     return;
//   }

//   balance -= num1;

//   output.innerText = balance;

//   amount.value='';
  
//   if(num1 <= balance) {

//     //  잔액이 금액보다 크거나 같다
//     alert(`${num1}원이 출금 되었습니다. 남은 잔액 : ${balance} `);
//   }
 
// }


let balance = 10000;

const password = '1234';



const output = document.getElementById("output");
const amount = document.getElementById("amount");

document.getElementById("output").innerText = balance;



function deposit() {

  const num1 = Number(amount.value);

  balance += num1;

  output.innerText = balance;
  
  amount.value = '';

}  





function withdrawal() {

  const pw = prompt("비밀번호를 입력해주세요.");

  if(pw !== password) {
    alert("비밀번호가 맞지 않습니다.");
    amount.value = '';
    return;
  }

  const num1 = Number(amount.value);

  if(num1 > balance) {
    alert("출금 금액이 잔액보다 클 수 없습니다");
    amount.value = '';
    return;
  }

  balance -= num1;

  output.innerText = balance;

    alert(`${num1}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);
    amount.value = '';
    return;

  
} 





















