import axios from 'axios';

export default class ApiService {
  
  static async GetResourceRequest(url) {    
    return await axios.get(`http://localhost:2000/${url}`).then((response) => {
      return response.data;
    }).catch((error) => {
      throw this.CreateError(error.code, error.message);
    });
  }

  static async AddNewResourceRequest(url, data) {
    return await axios.post(`http://localhost:2000/${url}`, data).then((response) => {
      return response.data;
    }).catch((error) => {
      throw this.CreateError(error.code, error.message);
    });
  }

  static async DeleteResourceRequest(url) {
    return await axios.delete(`http://localhost:2000/${url}`).then((response) => {
      return response.data;
    }).catch((error) => {
      throw this.CreateError(error.code, error.message);
    });
  }

  static async PatchResourceRequest(url) {
    return await axios.patch(`http://localhost:2000/${url}`).then((response) => {
      return response.data;
    }).catch((error) => {
      throw this.CreateError(error.code, error.message);
    });
  }

  static async PutResourceRequest(url, data) {
    return await axios.put(`http://localhost:2000/${url}`, data).then((response) => {
      return response.data;
    }).catch((error) => {
      throw this.CreateError(error.code, error.message);
    });
  }

  static CreateError(code, message) {
    const error = new Error(message);
    error.statusCode = code;
    return error;
  }
}