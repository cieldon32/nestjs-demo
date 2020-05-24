import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

interface Error {
  title: {
    message: string;
  };
  description: {
    message: string;
  };
}

function EditPoll():JSX.Element {
  const [field, setField] = useState({title: '', description: ''})
  const [data, setData] = useState({title: '', description: ''})
  const [errors, setErrors] = useState<Error>();
  const [message, setMessage] = useState();
  const router = useRouter();
  const pollId = router.query.id;

  useEffect(() => {
    
  }, []);

  async function postPoll(params) {
    const token = sessionStorage.getItem('token');
    const res = await fetch(`api/v1/polls`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(params),
    });
    const data = await res.json();
    console.log(data)
    if(data.errors || data.message){
      setErrors(data.errors);
      setMessage(data.message);
      if(data.message === 'please login'){
        router.push('/login');
      }
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

  function addPoll(e) {
    postPoll(field);
    e.preventDefault();
  }

  return (
    <form className="mod-form">
      <h3>{pollId ? 'edit one poll' : 'create a poll'}</h3>
      <div className="mod-form-field">
        <label>title</label>
        <input 
          type="text" 
          name="title" 
          onChange={onChangeField}
        />
      </div>
      <p>{errors && errors.title && errors.title.message}</p>
      <div className="mod-form-field">
        <label>description</label>
          <input 
            type="text" 
            name="description" 
            onChange={onChangeField} 
          />
      </div>
      <p>{errors && errors.description && errors.description.message}</p>
      <p>{message}</p>
      <button onClick={addPoll}>submit</button>
    </form>
  )
}

export default EditPoll;
