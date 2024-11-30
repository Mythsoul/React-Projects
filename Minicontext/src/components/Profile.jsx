import React from 'react'; 
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const {User} = useContext(UserContext);
  return (
    <>
   {User ? <div>Hello {User}</div> : <div>Please Login</div>}
   
  </>)

}

export default Profile
