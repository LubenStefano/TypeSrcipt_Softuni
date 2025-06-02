"use strict";
class User {
    _username;
    constructor(username) {
        this._username = username; // Use setter for validation
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        if (newUsername.length < 3) {
            throw new Error("Username must be at least 3 characters long.");
        }
        this._username = newUsername;
    }
}
const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);
//# sourceMappingURL=GettersAndSetters.js.map