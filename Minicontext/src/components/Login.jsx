import React from 'react'
import { useState , useContext } from 'react'; 
import UserContext from '../context/UserContext';
function Login() {
  const [Password, setPassword] =  useState(null); 
  const [Username , setUsername] = useState(null);
  const {setUser} = useContext(UserContext);
  const handleSumbit = (e)=>{
    e.preventDefault(); 
    setUser({Username});

  }
  return (
    <>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required value={Username ? Username : ""} onChange={(e)=>{setUsername(e.target.value) , console.log(Username) , setUser(Username)}}/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required value={Password ? Password : ""} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button type="submit" onSubmit={handleSumbit}>Login</button>
</>
  )
}

export default Login