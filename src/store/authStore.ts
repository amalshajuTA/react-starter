import { makeAutoObservable  } from 'mobx';
import Constant from '../globals/Constant';
import authService from '../services/authService'

type userType = {
    userName : string,
}

const getCurrentUser = () => {
    if (localStorage.currentUser) {
      return JSON.parse(localStorage.currentUser);
    }
    return null;
  };

class AuthStore {
    userName : string = '';
    password : string = '';
    texts : string[] = []



    error : string = '';

    constructor()
    {
        makeAutoObservable(this)
    }

    addText(t : string){
        this.texts.push(t);
    }

    authListener: ((user:any) => void) | null = null;
    currentUser : userType | null = null;

    handleUserNameChange(userName: string) {
      this.userName = userName.trimLeft();
    }

    handlePasswordChange(password: string) {
      this.password = password.trimLeft();
    }

    addAuthListener(callbackListener : (user:any) => void) {
      this.authListener = callbackListener;
      this.currentUser = getCurrentUser();
      if (this.authListener) {
        this.authListener(this.currentUser);
      }
    }

    clearTextField() {
      this.userName = '';
      this.password = '';
      this.error = '';
    }

    async signIn() {
        const data = {username:this.userName,password:this.password};
      if (await authService.login(data)) {
        localStorage.setItem('currentUser', JSON.stringify({
          userName: this.userName,
        }));

        this.currentUser = getCurrentUser();
        this.clearTextField();

        if (this.authListener) {
          this.authListener(this.currentUser);
        }
      } else {
        this.error = Constant.loginErrorMessage;
      }
    }

    signOut() {
      localStorage.removeItem('currentUser');
      this.currentUser =null;
      if (this.authListener) {
        this.authListener(this.currentUser);
      }
    }
}

export default new AuthStore();