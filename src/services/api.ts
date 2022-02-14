import axios from 'axios';
class API {
    constructor() {
        // Use this to inject anything with all the request
        axios.interceptors.request.use((Config) => {
        //    Config.headers.Authorization = '';
            return Config;
          });
      
          axios.interceptors.response.use((response) => response, (error) => Promise.reject(error));
    }

    async get(url:string) {
        return await axios.get(url)
    }


    async post() {

    }


    async put() {

    }

    async delete() {

    }

}

export default new API();