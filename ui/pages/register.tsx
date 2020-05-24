import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

interface Error {
  userName: {
    message: string;
  };
  password: {
    message: string;
  };
}

function Register():JSX.Element {
  const [field, setField] = useState({userName: '', password: ''})
  const [errors, setErrors] = useState<Error>();
  const [message, setMessage] = useState();
  const router = useRouter();

  async function postRegister(params) {
    const res = await fetch(`api/v1/auth/register`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params),
    });
    const data = await res.json();
    console.log(data)
    if(data.errors || data.message){
        setErrors(data.errors);
        setMessage(data.message);
      } else {
        router.push('/');
      }
  }

  function onChangeField(e) {
    const value = e.target.value;
    const name = e.target.name;
    field[name] = value;
    setField(field);
  }

  function addUser(e) {
    postRegister(field);
    e.preventDefault();
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
      <button onClick={addUser}>submit</button>
    </form>
  );
}

export default Register;
