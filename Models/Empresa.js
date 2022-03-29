const { faker } = require('@faker-js/faker');

class Empresa {
    constructor() {
        this._id = Empresa.incrementId();
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
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

module.exports = Empresa;