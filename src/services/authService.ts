/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

//import config from '../Global/Config';
//import api from './api'

class AuthService {


    login = async (data : any) => {
      // We can use axios instead of hard coded logic here
      //await api.post()
      if (data.username === 'ta-dev' && data.password === '12345') {
        return true;
      }
      return false;
    }
}

export default new AuthService();
