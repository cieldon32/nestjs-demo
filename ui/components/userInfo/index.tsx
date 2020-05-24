import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import './index.scss';

export default function UserInfo(props: {token: string}) {
    const [userName, setUserName] = useState<string>();

    async function getUser(token: string) {
      const res = await fetch(`api/v1/auth/user`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      setUserName(data.userName);
    };

    function loginOut() {
      setUserName('');
      sessionStorage.removeItem('token');
    }

    useEffect(() => {
      console.log('useEffect', props)
      if(props.token){
        getUser(props.token);
      }
      
    }, [props.token])

    return (
      <div className="mod-user-info">
        {
            userName ? [
              <h4 key="wellcome">wellcome {userName}</h4>,
              <a key="loginStatus" onClick={loginOut}>login out</a>
            ] :  <Link href="/login"><a>please login</a></Link>
            
        }
      </div>
    )
  }