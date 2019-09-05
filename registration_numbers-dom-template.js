const userInput1 = document.querySelector(".regInput1");
const townSelector1 = document.querySelector(".selectTown1");
const addButton1 = document.querySelector(".addButton1");
const display1 = document.querySelector(".plates1");
const displaySelectedPlates1 = document.querySelector(".selectedPlates1")
const displayError1 = document.querySelector(".error1");
const showBtn1 = document.querySelector(".showButton1")



if (localStorage["regNm"]) {
    var registration = JSON.parse(localStorage.getItem("regNm"));
}

var registration = [];
const instance2 = RegistrationCheck(registration);





function addRegNumber(regnum) {
    var licenceScreen1 = document.createElement("li")
    licenceScreen1.textContent = regnum;
    display1.appendChild(licenceScreen1);
}

function sortRegistrations() {
    const licenceTyped = userInput.value.toUpperCase()
    let instnc = instance2.storePlate(licenceTyped)
    if (instnc === true) {
        // instance2.storePlate(licenceTyped);
        // console.log(instance2.storePlate(licenceTyped));
        addRegNumber(licenceTyped)
    }
    displayError.innerHTML = instance2.getMessage();
    localStorage.setItem('reg', JSON.stringify(instance2.showAllRegNumbers()));
}

function townOptions() {
    let selectedLoc1 = townSelector.value
    let filteredReg1 = instance2.filterRegNum(selectedLoc1);
    // remove the existing reg number from the screen
    display.innerHTML = "";
    // loop over the list of reg numbers
    for (var i = 0; i < filteredReg1.length; i++) {
        var currentReg1 = filteredReg1[i];
        addRegNumber(currentReg1)
    }
    // add the reg numbers to the screen


}

addButton1.addEventListener('click', sortRegistrations);

// showBtn.addEventListener('click', townOptions);
townSelector1.addEventListener('change', townOptions);