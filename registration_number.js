function RegistrationCheck() {
    var numberPlates = [];
    var message = ""

    function storePlate(plate) {
        console.log(plate)
        plate = plate.toUpperCase();
        if (plate == "") {
            message = 'Enter a registration number';
            return false;
        }
        if (plate !== "" || plate !== undefined) {

            if (!numberPlates.includes(plate)) {
                numberPlates.push(plate);
                message = "Registration number added.";
                return true;
            } else {
                message = "Registration number already exists";
                return false;
            }
        }
        return false;
    }

    function showAllRegNumbers() {
        return numberPlates;
    }

    function getMessage() {
        return message;
    }

    function filterRegNum(townTag) {
        var filteredPlates = []

        if (townTag === "") {
            return numberPlates;
        }

        for (var i = 0; i < numberPlates.length; i++) {
            var storedPlates = numberPlates[i]
            if (storedPlates.startsWith(townTag)) {
                filteredPlates.push(storedPlates)
            }
        }

        return filteredPlates;
    }

    // function errorMessage(errorMesssage, isError) {
    //     errorMsg.error = errorMesssage;
    //     errorMsg.isError = isError;

    // }


    console.log(numberPlates)
    return {
        storePlate,
        showAllRegNumbers,
        filterRegNum,
        getMessage

    }
}