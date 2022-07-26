import ApiService from "./ApiService";

export default class serverConnection {

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
        return await ApiService.PutResourceRequest(`users/about/${id}`, { newAbout });
        //TODO: error
    }

    static async getUserInfo(email, password) {
        return await ApiService.AddNewResourceRequest(`users/login`, { email, password });
        //TODO: error

    }

    static async getTeacherList() {
        const teacherList = await ApiService.GetResourceRequest(`users/teachers`);
        teacherList.sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0));
        return { ...teacherList }
    }
}