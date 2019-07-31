function RegistrationCheck() {

    function whichTown(reg) {


        var platesForAllTowns = [reg];
        var paarlPlates = reg.filter(word => word.startsWith("CJ"))
        var capeTownPlates = reg.filter(word => word.startsWith("CA"));
        var bellvillePlates = reg.filter(word => word.startsWith("CJ"));
        /*  for (var i = 0; i < platesForAllTowns.length; i++) {
              if (platesForAllTowns[i].startsWith('CL')) {
                  stellenbosch.push(plates[i]);

              }
              if (platesForAllTowns[i].startsWith('CJ')) {
                  paarlPlates.push(plates[i]);

              }
              if (platesForAllTowns[i].startsWith('CA')) {
                  capeTown.push(plates[i]);

              }
          } */
    
    }
     function townRadio(town) {
         if (town === "Bellville") {
             return bellvillePlates;
         }
         if (town === "Cape Town") {
             return capeTownPlates;
         }
         if (town === "Paarl") {
             return paarlPlates
         }
     }
    return {
        town: whichTown,
        townSelection: townRadio

    }

}