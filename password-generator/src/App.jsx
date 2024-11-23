import { useState , useEffect } from 'react'

function App() {
  const [Length, setLength] = useState(0)
  const [password, setpassword] = useState("")
   
  useEffect(() => {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
 
     let result = ""; 
        for (let i=0 ; i< Length ; i++){ 
          result += char.charAt(Math.floor(Math.random() * char.length ));
        }
        setpassword(result);
        console.log(result);
      
  } , [Length])
  const Password_box = () => {
    return (
      <input type="text" value={password} className="border border-black rounded-lg flex m-32 text-3xl p-3" disabled />
      
    )
  }

  return (
    <>
    <div className="App">
      <h1 className='text-center text-3xl'> Password Generator </h1>
      <Password_box />
      </div>
  </> 
  )
}


export default App

