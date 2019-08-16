describe(" RegistrationCheck function", function () {

    it("should check if the registration number entered is valid  ", function () {
        var instance = RegistrationCheck();
    
        assert.equal("Registration added", instance.storePlate("CA 123"));
        assert.equal("Registration added", instance.storePlate("CL 123"));
        assert.equal("Registration added", instance.storePlate("CJ 123"));


    });
    it("should return error message if registration number is not from any of the towns in the list ", function () {
        var instance = RegistrationCheck();

        assert.equal("Invalid registration number", instance.storePlate("Ct66"));
        assert.equal("Invalid registration number", instance.storePlate("C590998"));
        assert.equal("Invalid registration number", instance.storePlate("CKkgg"));


    });
    it("", function () {
        var instance = RegistrationCheck();

        assert.equal(valid, instance.validatePlate("CA"));
        assert.equal(valid, instance.validatePlate("CL"));
        assert.equal(valid, instance.validatePlate("CJ"));


    });




});