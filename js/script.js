var elSiteForm = document.querySelector(".form");
var elSiteInput = elSiteForm.querySelector(".input__form");
var elSiteSelect = elSiteForm.querySelector(".input__select");
var elSiteOutput = document.querySelector(".form__output");


elSiteForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  var inputValue = Number(elSiteInput.value);
  var selectValue = Number(elSiteSelect.value);
  var maxBall = 189;
  var minBall = 3;

  if (inputValue <= 0) {
    elSiteOutput.textContent = "0 yoki raqam kiritmadingiz!";
    elSiteOutput.setAttribute('class' , '.form__output-yellow text-yellow');

  } 
  else if (isNaN(selectValue)) {
    elSiteOutput.textContent = "Iltimos, OTM turini tanlang!";
  } 
  else if (inputValue >= selectValue && inputValue <= maxBall) {
    elSiteOutput.textContent = "Tabriklaymiz! siz talabalikga tavfsiya etildingiz!!";
  } 
  else if (inputValue <= selectValue && inputValue >= minBall) {
    elSiteOutput.textContent = "Afsuski siz talabalikga tavfsiya etilmadingiz!!";
  } 

   else if (inputValue > maxBall){
    elSiteOutput.textContent = "Siz mavjud bo'lmagan ball kiritingiz!";
  } 
})





