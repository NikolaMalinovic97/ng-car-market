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

    getPhone() {
        return this.phone;
    }
}
