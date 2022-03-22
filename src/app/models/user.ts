export class User {
    _id?: number;
    name: string;
    surname: string;
    username: string;
    password: string;

    constructor(surname: string, name: string, username: string, password: string) {
        this.surname = surname;
        this.name = name;
        this.username = username;
        this.password = password;
    }   
}
