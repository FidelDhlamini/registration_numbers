const userInput1 = document.querySelector(".regInput1");
const townSelector1 = document.querySelector(".dropDown1");
const addButton1 = document.querySelector(".addButton1");


const displaySelectedPlates1 = document.querySelector(".selectedPlates1")
const displayError1 = document.querySelector(".error1");
const showBtn1 = document.querySelector(".showButton1")
var display1 = document.querySelector(".plates1");

var takeReg = document.querySelector(".regTemp").innerHTML;



if (localStorage["regNm"]) {
    var registration = JSON.parse(localStorage.getItem("regNm"));
}



var registration = [];
var instance2 = RegistrationCheck(registration);





// function addRegNumber(regnum) {
//     var licenceScreen1 = document.createElement("li")
//     licenceScreen1.textContent = regnum;
//     display1.appendChild(licenceScreen1);
// }

function sortRegistrations() {
    console.log(instance2.showAllRegNumbers())
    // alert("!!!")
    const licenceTyped = userInput1.value.toUpperCase()
    let instnc = instance2.showAllRegNumbers()
    console.log()
    // var getList = instance2.showAllRegNumbers()

    console.log(instnc)
    var getPlates = {
        regTemplate: instnc
    }
    // var compiledReg = takeReg(getPlates)
    var regTemplate = Handlebars.compile(takeReg)


    display1.innerHTML = compiledReg


    displayError1.innerHTML = instance2.getMessage();
    console.log(instance2.getMessage())
    localStorage.setItem('regNm', JSON.stringify(instance2.showAllRegNumbers()));
}

function townOptions1() {
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

// showBtn.addEventListener('click', townOptions1);
townSelector1.addEventListener('change', townOptions1);