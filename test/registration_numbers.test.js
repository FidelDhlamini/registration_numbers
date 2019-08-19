describe(" RegistrationCheck function", function () {

    it("should check if the registration number entered is valid  ", function () {
        var instance = RegistrationCheck();

        assert.equal("Registration number added", instance.storePlate("CA 123"));
        assert.equal("Registration number added", instance.storePlate("CL 123"));
        assert.equal("Registration number added", instance.storePlate("CJ 123"));


    });
    it("should return all the registration numbers added", function () {
        var instance = RegistrationCheck();

        instance.storePlate("CA 654")
        assert.equal(['CA 654'], instance.showAllRegNumbers());

    });
    
    // it("", function () {
    //     var instance = RegistrationCheck();

    //     assert.equal(valid, instance.validatePlate("CA"));
    //     assert.equal(valid, instance.validatePlate("CL"));
    //     assert.equal(valid, instance.validatePlate("CJ"));


    // });




});