import axios from "axios";
import { logOutAction } from '../redux/actions/userActions'

export default class ApiService {
	static async GetResourceRequest(url, withCredentials = true) {
		try {
			const res = await axios.get(`http://localhost:2000/${url}`, {
				withCredentials,
			});
			return res.data;
		} catch (err) {
			throw err;
		}
	}

	static async AddNewResourceRequest(url, data, withCredentials = true) {
		try {
			const res = await axios.post(`http://localhost:2000/${url}`, data, {
				withCredentials,
			});
			return res.data;
		} catch (err) {
			throw err;
		}
	}

	static async DeleteResourceRequest(url, withCredentials = true) {
		try {
			const res = await axios.delete(`http://localhost:2000/${url}`, {
				withCredentials,
			});
			return res.data;
		} catch (err) {
			throw err;
		}
	}

	static async PatchResourceRequest(url, withCredentials = true) {
		try {
			const res = await axios.patch(`http://localhost:2000/${url}`, {
				withCredentials,
			});
			return res.data;
		} catch (err) {
			throw err;
		}
	}
	static async PutResourceRequest(url, data, withCredentials = true) {
		try {
			const res = await axios.put(`http://localhost:2000/${url}`, data, {
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
