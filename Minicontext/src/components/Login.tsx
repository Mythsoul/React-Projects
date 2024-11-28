import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    let [User , SetUser] = useState("");
    
   User = useContext(UserContext);
    const handleSubmit = (e)=>{ 
        e.preventDefault();
        console.log(e.target)
        console.log("submitted"); 
        SetUser("chhabi");
        console.log(User);
      
    }
  return (
    <form className="flex flex-col p-4 border-2 border-gray-700 rounded-md w-96" onSubmit={handleSubmit}>
      <label className="mb-2" htmlFor="username">Username:</label>
      <input className="p-2 border-2 border-gray-700 rounded-md" type="text" id="username" name="username" />
      <label className="mb-2" htmlFor="password">Password:</label>
      <input className="p-2 border-2 border-gray-700 rounded-md" type="password" id="password" name="password" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" type="submit">Login</button>
    </form>
  )
}

export default Login;
