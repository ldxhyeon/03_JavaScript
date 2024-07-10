

const boxWidth = document.querySelector(".box-width");

const boxHeight = document.querySelector(".box-height");

const boxBackground = document.querySelector(".box-background");

const changeBtn = document.querySelector(".change-btn");

const resultBox = document.querySelector(".result-box");

const fontSize = document.querySelector(".font-size");

const boxOutput = document.querySelector(".box-output");

const fontColor = document.querySelector(".font-color");



changeBtn.addEventListener("click", function(){

  const boxWidthValue = boxWidth.value;
  const boxHeightValue = boxHeight.value;
  const boxFontSizeValue = fontSize.value;
  const boxBackgroundValue = boxBackground.value;
  const boxOutputValue = boxOutput.value;
  const fontColorValue = fontColor.value;
  const fontWeightInp = document.querySelector('input[name="inp-radio"]:checked').value;
  const horizontalRadio = document.querySelector('input[name="horizontal-radio"]:checked').value;
  const VerticalRaido = document.querySelector('input[name="Vertical-radio"]:checked').value;
  

  resultBox.style.width = boxWidthValue +'px';
  resultBox.style.height = boxHeightValue +'px';
  resultBox.style.fontSize = boxFontSizeValue + 'px';
  resultBox.style.backgroundColor = boxBackgroundValue;
  resultBox.innerText = boxOutputValue;
  resultBox.style.color = fontColorValue;
  resultBox.style.fontWeight = fontWeightInp;
  resultBox.style.justifyContent = horizontalRadio;
  resultBox.style.alignItems = VerticalRaido;

});