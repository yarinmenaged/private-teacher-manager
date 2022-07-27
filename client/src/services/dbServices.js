export default class severConnection {
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

	static async editAbout(id, newAbout) {
		await fetch(`http://localhost:2000/users/about/${id}`, {
			method: "PUT",
			credentials: "include",
			SameSite: "None",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ newAbout }),
		});
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