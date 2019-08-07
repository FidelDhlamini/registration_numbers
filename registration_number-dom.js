const userInput = document.querySelector(".regInput");
const townSelector = document.querySelector(".selectTown");
const addButton = document.querySelector(".addButton");
const display = document.querySelector(".plates");
const displayError = document.querySelector(".error");
const showBtn = document.querySelector(".showButton")
const instance = RegistrationCheck();



function sortRegistrations() {
   
    const selectedTown = townSelector.value
    const licenceTyped = userInput.value

    instance.storePlate(licenceTyped);

    var regDiv = document.createElement("div")
    regDiv.classList.add("regStyling")
    var textContent = document.createTextNode(licenceTyped)
    

    regDiv.appendChild(textContent)
    display.appendChild(regDiv)
    



    // var regArray = instance.storePlate(licenceTyped);
    // console.log(regArray);


    if (licenceTyped === "") {
        displayError.innerHTML = "Type in a registration number"
    }

    //create show button 
    //get value from the dropdown 
    //put the value in the instance
    //and append


}

function getCapePlates() {
    var capePlates = instance.filterReg();
    var capeDiv = document.createElement("div")
    capeDiv.classList.add("selectedPlates")
    var selected = document.createTextNode(capePlates)
    capeDiv.appendChild(selected)
    display.appendChild(capeDiv);
     display.innerHTML = "";

}
// function getStellenboschPlates() {
//     var stellenboschPlates = instance.filterReg("CA");
//     var capeDiv = document.createElement("li")
//     capeDiv.classList.add("selectedPlates")
//     var selected = document.createTextNode(stellenboschPlates)
//     capeDiv.appendChild(selected)
//     display.appendChild(capeDiv);

// }
function townOptions() {
    let selectedLoc = townSelector.value
    let filteredReg = instance.filterReg(selectedLoc);
    display.innerHTML = filteredReg;
    console.log(filteredReg);

}


addButton.addEventListener('click', sortRegistrations);
showBtn.addEventListener('click', getCapePlates);
townSelector.addEventListener('click', townOptions);