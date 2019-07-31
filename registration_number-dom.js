var userInput = document.querySelector(".regInput");
var addButton = document.querySelector(".addButton");
var radioButtons = document.querySelector(".townName");
var radio = document.querySelector(".whichTown");
var display = document.querySelector(".displayPlate")
var instance = RegistrationCheck();
function sortRegistrations(){

if (radio){
 var city = document.querySelector("input[name='townName']:checked");
 var licenceDisplay = instance.town(userInput.value)
 display.innerHTML = licenceDisplay;
}






}
addButton.addEventListener('click', sortRegistrations);