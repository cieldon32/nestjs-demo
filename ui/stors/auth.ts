import { BehaviorSubject } from "rxjs";
import { scan } from "rxjs/operators";
import { login } from "../request/login";

interface State {
  login: boolean;
  nickName?: string;
  token?: string;
  userCode?: string;
  avatar?: string;
  message?: string;
  [propName: string]: any;
}

const userInfoLocal = {token: ''};

const initialState: State = {
  login: !!userInfoLocal.token,
  ...userInfoLocal
};

let state = initialState;

const AuthSubject = new BehaviorSubject(initialState);

const AuthStore = {
  login: params => {
    return login(params).pipe(
      scan((acc, curr) => {
        console.log("login", curr);
        const {error, message} = curr;
        state = {
          login: !error,
          message: 'login fail'
        };
        AuthSubject.next(state);
        return Object.assign({}, acc, state); 
      }, state)
    );
  },
  subscribe: setState => {
    AuthSubject.subscribe(setState);
  }
};

export default AuthStore;
