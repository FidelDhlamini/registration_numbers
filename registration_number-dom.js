const userInput = document.querySelector(".regInput");
const townSelector = document.querySelector(".selectTown");
const addButton = document.querySelector(".addButton");
const display = document.querySelector(".plates");
displayError = document.querySelector(".error");
const instance = RegistrationCheck();
function sortRegistrations(){
    const selectedTown = townSelector.value
    const licenceTyped = userInput.value
    if (selectedTown === ""){
       display.innerHTML = "Select a town from the list" 
    }
    if (licenceTyped ===""){
        displayError.innerHTML = "Type in a registration number"
    }








}
addButton.addEventListener('click', sortRegistrations);