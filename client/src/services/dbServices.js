import ApiService from "./ApiService";

export default class severConnection {

    static async addUser(Name, userType, Email, Password, Phone) {
        const newUser = {
            Name,
            Email,
            Password,
            Phone
        }
        return await ApiService.AddNewResourceRequest(`users/${userType}s`, newUser);
        //TODO: error
    }

    static async editAbout(id, newAbout) {
        return await ApiService.PutResourceRequest(`users/about/${id}`);
        //TODO: error
    }

    static async getUserInfo(email, password) {
        return await ApiService.AddNewResourceRequest(`users/login`, { email, password });
        //TODO: error
    }
}