export default class severConnection {

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

    static async editAbout(id, newAbout) {
        await fetch(`http://localhost:2000/users/about/${id}`, {
            method: "PUT",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ newAbout })
        });
    }

    static async getUserInfo(email, password) {
        const response = await fetch(`http://localhost:2000/users/login`, {
            method: "POST",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        return await response.json();
    }
}