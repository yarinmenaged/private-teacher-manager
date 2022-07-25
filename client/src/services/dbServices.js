import axios from 'axios';

export default class severConnection {

    static async addUser(Name, userType, Email, Password, Phone) {
        const newUser = {
            Name,
            Email,
            Password,
            Phone
        }
        await axios.post(`http://localhost:2000/users/${userType}s`, newUser);
    }

    static async editAbout(id, newAbout) {
        await axios.put(`http://localhost:2000/users/about/${id}`, { newAbout });
    }

    static async getUserInfo(email, password) {
        const response = await axios.post(`http://localhost:2000/users/login`, { email, password });
        return await response.data;
    }
}