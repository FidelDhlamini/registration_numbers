function RegistrationCheck() {
    var numberPlates = [];
    var capePlates = []
    var stellenboschPLates = []


    function storePlate(plate) {

        if (validatePlate(plate)) {
            numberPlates.push(plate);
            return "Number plate added";
        }
        return "Invalid registration number";
    }
    // console.log(numberPlates)
    function validatePlate(plate) {
        let towns = ["CA", "CJ", "CL"];


        for (i = 0; i < towns.length; i++) {

            if (plate.startsWith(towns[i])) {
                valid = true;
            }
        }
        return valid;
    }

    function filterReg(loc) {
        var newRegs = []

        for (var i = 0; i < numberPlates.length; i++) {
            var newReg = numberPlates[i];
            if (newReg.startsWith(loc)) {
                nenewRegs.push(newReg)
            }

        }
        return newRegs;
    }
    
    return {
        validatePlate,
        storePlate,
        filterReg
    }
}