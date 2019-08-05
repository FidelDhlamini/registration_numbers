const userInput = document.querySelector(".regInput");
const townSelector = document.querySelector(".selectTown");
const addButton = document.querySelector(".addButton");
const display = document.querySelector(".plates");
displayError = document.querySelector(".error");
const instance = RegistrationCheck();



function sortRegistrations() {
    const selectedTown = townSelector.value
    const licenceTyped = userInput.value
    instance.validatePlate(licenceTyped);
    var regDiv = document.createElement("div")
    regDiv.classList.add("regStyling")
    var textContent = document.createTextNode(licenceTyped)
    regDiv.appendChild(textContent)
    display.appendChild(regDiv)



    var regArray = instance.storePlate(licenceTyped);
    console.log(regArray);


    if (licenceTyped === "") {
        displayError.innerHTML = "Type in a registration number"
    }

//create show button 
//get value from the dropdown 
//put the value in the instance
//and append

}

addButton.addEventListener('click', sortRegistrations);