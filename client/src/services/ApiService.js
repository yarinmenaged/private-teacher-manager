import axios from 'axios';

export default class ApiService {
  
  static async GetResourceRequest(url) {    
    return await axios.get(`/${url}`).then((response) => {
      return response.data;
    }).catch((error) => {
      throw this.CreateError(error.code, error.message);
    });
  }

  static async AddNewResourceRequest(url, data) {
    return await axios.post(`/${url}`, data).then((response) => {
      return response.data;
    }).catch((error) => {
      throw this.CreateError(error.code, error.message);
    });
  }

  static async DeleteResourceRequest(url) {
    return await axios.delete(`/${url}`).then((response) => {
      return response.data;
    }).catch((error) => {
      throw this.CreateError(error.code, error.message);
    });
  }

  static async PatchResourceRequest(url) {
    return await axios.patch(`/${url}`).then((response) => {
      return response.data;
    }).catch((error) => {
      throw this.CreateError(error.code, error.message);
    });
  }

  static async PutResourceRequest(url, data) {
    return await axios.put(`/${url}`, data).then((response) => {
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