import ApiService from "./ApiService"

export default class serverConnection {
	static async addUser(Name, userType, Email, Password, Phone) {
		const newUser = {
			Name,
			Email,
			Password,
			Phone,
		};
		await fetch(`http://localhost:2000/users/${userType}s`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		});
	}

    static async getTeacherList() {
        const teacherList = await ApiService.GetResourceRequest(`users/teachers`);
        teacherList.sort((a, b) => (a.Name > b.Name) ? 1 : ((b.Name > a.Name) ? -1 : 0));
        return { ...teacherList }
    }

    static async editAbout(id, newAbout) {
        return await ApiService.PutResourceRequest(`users/about/${id}`, { newAbout });
        //TODO: error
    }

	static async getAllSubjects() {
        return await ApiService.GetResourceRequest(`subjects`);
        //TODO: error
    }

	static async getUserInfo(email, password) {
		try {
			const response = await fetch(`http://localhost:2000/users/login`, {
				method: "POST",
				credentials: "include",
				SameSite: "None",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			return await response.json();
		} catch (err) {
			console.error(err);
		}
	}

	static async getUserInfoByToken() {
		const response = await fetch(`http://localhost:2000/users/verifies`, {
			method: "GET",
			credentials: "include",
			SameSite: "None",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		return await response.json();
	}
}