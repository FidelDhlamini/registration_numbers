const userInput = document.querySelector(".regInput");
const townSelector = document.querySelector(".selectTown");
const addButton = document.querySelector(".addButton");
const display = document.querySelector(".plates");
displayError = document.querySelector(".error");
const instance = RegistrationCheck();



function sortRegistrations() {
    const selectedTown = townSelector.value
    const licenceTyped = userInput.value

    var regDiv = document.createElement("div")
    regDiv.classList.add("regStyling")
    var textContent = document.createTextNode(licenceTyped)
    regDiv.appendChild(textContent)
    display.appendChild(regDiv)


    instance.validatePlate(licenceTyped);
    var regArray = instance.storePlate(licenceTyped);
    console.log(regArray);

    if (selectedTown === "") {
        display.innerHTML = "Select a town from the list"
    }
    if (licenceTyped === "") {
        displayError.innerHTML = "Type in a registration number"
    }


//function getDropDownValue(){
 //   var theValue = GETTHEVALUE
   // FACTORY Function(CA) CA 

   //var filteredArray = instance.filter(DROPDOWNVALUE)


// for (var i=0;i<filteredArray.length;i++){
// var regDiv = document.createElement("div")
// regDiv.classList.add("regStyling")
// var textContent = document.createTextNode(filteredArray[i])
// regDiv.appendChild(textContent)
// display.appendChild(regDiv)
//}

   
//}





}
addButton.addEventListener('click', sortRegistrations);


