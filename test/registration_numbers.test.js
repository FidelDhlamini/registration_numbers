describe(" RegistrationCheck function", function () {

    it("should check if the registration number entered is valid  ", function () {
        var instance = RegistrationCheck();

        assert.equal(true, instance.storePlate("CA 123"));
        assert.equal('Registration number added.', instance.getMessage());

        assert.equal(true, instance.storePlate("CL 123"));
        assert.equal('Registration number added.', instance.getMessage());


    });

    it("should return an error if there no registration number typed in the textbox", function () {
        var instance = RegistrationCheck();
        assert.equal(false, instance.storePlate(""));
        assert.equal('Enter a registration number', instance.getMessage());

    });

    it("should return a message if registration number has been added before", function () {
        var instance = RegistrationCheck();
        instance.storePlate("CA 654")
        assert.equal(false, instance.storePlate("CA 654"));
        assert.equal("Registration number already exists", instance.getMessage());

    });

    it("should return only registration numbers from selected town", function () {
        var instance = RegistrationCheck();

        instance.storePlate("CA 654")
        instance.storePlate("CL 675")
        instance.storePlate("CJ 675")
        assert.deepEqual(["CA 654"], instance.filterRegNum("CA"));
        assert.deepEqual(["CL 675"], instance.filterRegNum("CL"));
        assert.deepEqual(["CJ 675"], instance.filterRegNum("CJ"));

    });

    it("should return only registration numbers from selected town", function () {
        var instance = RegistrationCheck();

        instance.storePlate("CA 654")
        instance.storePlate("CL 675")
        instance.storePlate("CJ 675")
        assert.deepEqual(["CA 654"], instance.filterRegNum("CA"));
        assert.deepEqual(["CL 675"], instance.filterRegNum("CL"));
        assert.deepEqual(["CJ 675"], instance.filterRegNum("CJ"));

    });
});






