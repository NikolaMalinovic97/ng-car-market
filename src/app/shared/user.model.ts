export class User {
    private username: string;
    private email: string;
    private password: string;
    private phone: string;

    constructor(username: string, email: string, password: string, phone: string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getUsername() {
        return this.username;
    }

    getPhone() {
        return this.phone;
    }
}
