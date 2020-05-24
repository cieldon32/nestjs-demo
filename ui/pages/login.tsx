import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthStore from '../stors/auth';
import Link from 'next/link';

interface Error {
  userName: {
    message: string;
  };
  password: {
    message: string;
  };
}

function Login():JSX.Element {
  const [field, setField] = useState({userName: '', password: ''})
  const [errors, setErrors] = useState<Error>();
  const [message, setMessage] = useState();
  const router = useRouter();

  async function postLogin(params) {
    const res: any = await LoginApi.login(params);
    if(res){
      sessionStorage.setItem('token', res.access_token);
      router.push('/');
    }
  }

  function onChangeField(e) {
    const value = e.target.value;
    const name = e.target.name;
    field[name] = value;
    setField(field);
  }

  function login(e) {
    e.preventDefault();
    AuthStore.login(field).subscribe(res => {
      console.log("login next", res);
      if(!res.error){

      } else {
        
      }
      // if (!res.login) {
      //   res.message && message.error(res.message);
      // } else {
      //   localStorage.setItem("userInfo", JSON.stringify(res));
      //   history.push("/");
      // }
    });
    
  }

  return (
    <form className="mod-form">
      <div className="mod-form-field">
          <label>your nick: </label>
          <input 
          type="text" 
          name="userName" 
          onChange={onChangeField}
          />
      </div>
      <p>{errors && errors.userName && errors.userName.message}</p>
      <div className="mod-form-field">
          <label>password: </label>
          <input 
          type="password" 
          name="password" 
          onChange={onChangeField} 
          />
      </div>
      <p>{errors && errors.password && errors.password.message}</p>
      <p>{message}</p>
      <button onClick={login}>submit</button><span> or </span>
      <Link href="/register"><a>go to register</a></Link>
    </form>
  );
}

export default Login;
