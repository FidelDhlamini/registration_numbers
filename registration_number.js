function RegistrationCheck() {
    var numberPlates = [];
    var caPlates = []
    var clPLates = []


    function storePlate(plate){
       if (validatePlate(plate) == true){
        numberPlates.push(plate);
        return numberPlates;
       }
        return "Invalid registration number";
    }
     console.log(numberPlates)
    function validatePlate(plate){
        let towns = ["CA","CJ","CL"];
        let valid = false;

        for(i=0; i<towns.length;i++){
        
            if (plate.startsWith(towns[i])){
                valid = true;
            }
        }
        return valid;
    }

//function filter(DROPDOWNVALUE){
  //  USES DROPDOWNVALUE TO SEARCH FOR ALL PLATES STARTING WITH PARAMETER


//return 
//}

return {
    validatePlate,
    storePlate,
   // filter
}
}