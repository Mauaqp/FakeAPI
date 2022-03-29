const {faker} = require("@faker-js/faker");

class Usuario {
    constructor() {
        this.id = Usuario.incrementId();
        this.firstName = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }

    static incrementId() {
        if (!this.latestId) {
            this.latestId = 1;
        }
        else {
            this.latestId ++;
        }
        return this.latestId
    }
}

module.exports = Usuario;