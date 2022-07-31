import axios from "axios";

export default class ApiService {
	static async GetResourceRequest(url, withCredentials = true) {
		try {
			const res = await axios.get(`/${url}`, {
				withCredentials,
			});
			return res.data;
		} catch (err) {
			throw err;
		}
	}

	static async AddNewResourceRequest(url, data, withCredentials = true) {
		try {
			const res = await axios.post(`/${url}`, data, {
				withCredentials,
			});
			return res.data;
		} catch (err) {
			throw err;
		}
	}

	static async DeleteResourceRequest(url, withCredentials = true) {
		try {
			const res = await axios.delete(`/${url}`, {
				withCredentials,
			});
			return res.data;
		} catch (err) {
			throw err;
		}
	}

	static async PatchResourceRequest(url, withCredentials = true) {
		try {
			const res = await axios.patch(`/${url}`, {
				withCredentials,
			});
			return res.data;
		} catch (err) {
			throw err;
		}
	}
	static async PutResourceRequest(url, data, withCredentials = true) {
		try {
			const res = await axios.put(`/${url}`, data, {
				withCredentials,
			});
			return res.data;
		} catch (err) {
			throw err;
		}
	}

	static CreateError(code, message) {
		const error = new Error(message);
		error.statusCode = code;
		return error;
	}
}
