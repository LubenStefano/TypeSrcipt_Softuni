class User {
    private _username: string;

    constructor(username: string) {
        this._username = username; // Use setter for validation
    }

    get username(): string {
        return this._username;
    }

    set username(newUsername: string) {
        if (newUsername.length < 3) {
            throw new Error("Username must be at least 3 characters long.");
        }
        this._username = newUsername;
    }
}

const user = new User("Martin");

user.username = "johnDoe";

console.log(user.username);