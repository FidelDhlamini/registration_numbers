function RegistrationCheck() {
    var numberPlates = [];
    // var capePlates = []
    // var stellenboschPLates = []


    function storePlate(plate) {

        if (validatePlate(plate)) {
            numberPlates.push(plate);
        }
        return "Number plate added";
    }


    function validatePlate(plate) {
        let towns = ["CA", "CJ", "CL"];
        var valid = 0;

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
                newRegs.push(newReg)
            }

        }

        return newRegs;

    }

    function storedPlates() {
        return numberPlates;
    }

    console.log(numberPlates)
    return {
        validatePlate,
        storePlate,
        filterReg,
        storedPlates,
    }
}