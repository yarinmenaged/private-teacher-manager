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

  static async getCities() {
    const response = await fetch(
      'https://parseapi.back4app.com/classes/Israelcities_City?limit=160&order=name&keys=name',
      {
        headers: {
          'X-Parse-Application-Id': 'SWcuHCOiaROAlsemQSQ9z9UqyYxb7RC2vfdIAztV', 
          'X-Parse-REST-API-Key': 'ZngKHlHYjrAROm4G0ITIrZZzpC75a5lzXaTnFZFW',
        }
      });
      const data = await response.json();
      return data.results;
	}
}
