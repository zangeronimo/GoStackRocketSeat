class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    isAdmin() {
        return !!this.admin;
    }
}

class Admin extends User{
    constructor(name, password) {
        super(name, password);
        this.admin = true;
    }
}

const User1 = new User('email@test.com', 'pass123');
const Admin1 = new Admin('email2@test.com', 'pass321');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

console.log(User1);
console.log(Admin1);