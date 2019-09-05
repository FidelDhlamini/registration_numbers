const userInput = document.querySelector(".regInput");
const townSelector = document.querySelector(".selectTown");
const addButton = document.querySelector(".addButton");
const display = document.querySelector(".plates");
const displaySelectedPlates = document.querySelector(".selectedPlates")
const displayError = document.querySelector(".error");
const showBtn = document.querySelector(".showButton")



if (localStorage["reg"]) {
    var registration = JSON.parse(localStorage.getItem("reg"));
}

var registration = [];
const instance = RegistrationCheck(registration);





function addRegNumber(regnum) {
    var licenceScreen = document.createElement("li")
    licenceScreen.textContent = regnum;
    display.appendChild(licenceScreen);
}

function sortRegistrations() {
    const licenceTyped = userInput.value.toUpperCase()
    let instance1 = instance.storePlate(licenceTyped)
    if (instance1 === true) {
        // instance.storePlate(licenceTyped);
        // console.log(instance.storePlate(licenceTyped));
        addRegNumber(licenceTyped)
    }
    displayError.innerHTML = instance.getMessage();
    localStorage.setItem('reg', JSON.stringify(instance.showAllRegNumbers()));
}

function townOptions() {
    let selectedLoc = townSelector.value
    let filteredReg = instance.filterRegNum(selectedLoc);
    // remove the existing reg number from the screen
    display.innerHTML = "";
    // loop over the list of reg numbers
    for (var i = 0; i < filteredReg.length; i++) {
        var currentReg = filteredReg[i];
        addRegNumber(currentReg)
    }
    // add the reg numbers to the screen


}

addButton.addEventListener('click', sortRegistrations);

// showBtn.addEventListener('click', townOptions);
townSelector.addEventListener('change', townOptions);