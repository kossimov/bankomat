var elBankForm = document.querySelector(".js-bank-form")

var elBankInput = elBankForm.querySelector(".js-bank-input")

var elBankSelect = elBankForm.querySelector(".js-bank-list")

var elBankTotal = elBankForm.querySelector(".bank-list")



var elTotal = elBankInput * elBankSelect


elBankForm.addEventListener("submit", function(evt){

  evt.preventDefault();

  var elBankInputValue = elBankInput.value;
  var elBankSelectValue = elBankSelect.value;

  elBankTotal.textContent = elBankInputValue * elBankSelectValue

})
