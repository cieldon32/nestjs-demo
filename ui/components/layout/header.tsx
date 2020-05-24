import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import UserInfo from '../userInfo'
import './index.scss';

export default function Header() {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const token: string = sessionStorage.getItem('token');
    if(token){
      setToken(token);
    }
    
  }, []);

  console.log('Header')

  return (
    <div className="mod-top">
      <Link href="/"><h1 className="logo">lightning talk</h1></Link>
      <UserInfo token={token}></UserInfo>
    </div>
  )
}