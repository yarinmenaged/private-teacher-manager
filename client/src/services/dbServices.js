import ApiService from "./ApiService";

export default class serverConnection {
	static async addUser(Name, userType, Email, Password, Phone) {
		const newUser = {
			Name,
			Email,
			Password,
			Phone,
		};
		await ApiService.AddNewResourceRequest(`users/${userType}s`, newUser);
	}

  static async getTeacherList() {
    const teacherList = await ApiService.GetResourceRequest(`users/teachers`);
    teacherList.sort((a, b) =>
      a.Name > b.Name ? 1 : b.Name > a.Name ? -1 : 0
    );
    return { ...teacherList };
  }

  static async editAbout(id, newAbout) {
    return await ApiService.PutResourceRequest(`users/about/${id}`, {
      newAbout,
    });
    //TODO: error
  }

	static async getAllSubjects() {
        return await ApiService.GetResourceRequest(`subjects`);
        //TODO: error
    }

	static async addSubject(id, subject) {
        return await ApiService.AddNewResourceRequest (`subjects/${id}`, { subject });
        //TODO: error
    }

	static async removeSubject(id, subject) {
        return await ApiService.AddNewResourceRequest (`subjects/remove/${id}`, { subject });
        //TODO: error
    }

	static async getUserInfo(email, password) {
		try {
			return await ApiService.AddNewResourceRequest (`users/login`, { email, password });
		} catch (err) {
			console.error(err);
		}
	}

	static async getUserInfoByToken() {
		return await ApiService.GetResourceRequest(`users/verifies`);
	}
}
