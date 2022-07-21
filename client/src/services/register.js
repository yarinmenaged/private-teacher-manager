export default class Register {
    static async addUser(Name, userType, Email, Password, Phone) {
        const newUser = {
            Name,
            Email,
            Password,
            Phone
        }
        await fetch(`http://localhost:2000/users/${userType}s`, {
            method: "POST",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        });
    }
}