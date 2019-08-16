function RegistrationCheck() {
    var numberPlates = [];


    function storePlate(plate) {
        console.log(plate)
        if (plate !== "" || plate !== undefined) {

            if (!numberPlates.includes(plate)) {
                numberPlates.push(plate)
            } else {
                return "Registration number already exists"
                // errorMessage('Registration number already exists', true)
            }

        } else {

            return 'Enter a registration';


        } // errorMessage('Enter a valid registration', true)
    }

    function showAllRegNumbers() {
        return numberPlates;
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

    function errorMessage(errorMesssage, isError) {
        errorMsg.error = errorMesssage;
        errorMsg.isError = isError;

    }
    return {
        storePlate,
        showAllRegNumbers,
        filterRegNum

    }
}