
const boxWidth = document.querySelector(".box-width");

const boxHeight = document.querySelector(".box-height");

const changeBtn = document.querySelector(".changeBtn");

const resultBox = document.querySelector(".result-box");

const fontSize = document.querySelector(".box-font");

const boxBackground = document.querySelector(".box-background");

const messageInput  = document.querySelector(".inp-massage");

const fontColor = document.querySelector(".font-color");





changeBtn.addEventListener("click", function(){

  const widthValue = boxWidth.value;
  const heightValue = boxHeight.value;
  const sizeValue = fontSize.value;
  const backgroundColor = boxBackground.value;
  const massage = messageInput.value;
  const colorValue = fontColor.value;

  let radioFont = document.querySelector('input[name="font-weight"]:checked');
  const defaultFontWeight = 'normal'; // 기본값으로 설정할 폰트 굵기

  let wid = document.querySelector('input[name="width-radio"]:checked');
  const defalutWidth = 'center';

  let hei = document.querySelector('input[name="height-radio"]:checked');
  const defalutHeight = 'center';

  if(!radioFont) {
    alert("폰트 굵기 선택이 없습니다. 기본값으로 설정합니다.");
    radioFont = defaultFontWeight; 
  }else {
    radioFont = radioFont.value; 
  };

  if(!wid) {
    alert("가로 정렬 선택이 없습니다. 기본값으로 가운데로 설정합니다.");
    wid = defalutWidth; 
  }else {
    wid = wid.value; 
  };

  if(!hei) {
    alert("세로 정렬 선택이 없습니다. 기본값으로 가운데로 설정합니다.");
    hei = defalutHeight; 
  }else {
    hei = hei.value; 
  };


  resultBox.style.width = widthValue + 'px';
  resultBox.style.height = heightValue + 'px';
  resultBox.style.backgroundColor = backgroundColor;
  resultBox.innerText = massage;
  resultBox.style.fontSize = sizeValue + 'px';
  resultBox.style.color = colorValue;
  resultBox.style.fontWeight = radioFont;
  resultBox.style.justifyContent = wid;
  resultBox.style.alignItems = hei;
  
});




























































































