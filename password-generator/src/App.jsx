import { useState , useEffect } from 'react'
import { useCallback } from 'react';
function App() {
  const [Length, setLength] = useState(8)
  const [password, setpassword] = useState("")
  const [Numberallowed, setNumberallowed] = useState(false); 
  const [Symbolallowed, setSymbolallowed] = useState(false); 
  const [Copied, setCopied] = useState(false)

  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 

  const Number = "0123456789";
  const Symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    useEffect(() => {
      password_generator();
    } , [Length , Numberallowed , Symbolallowed]); 

  const password_generator = useCallback(()=>{ 
    let result = ""; 
    if(Numberallowed) char += Number;
    if(Symbolallowed) char += Symbol;
    for (let i=0 ; i< Length ; i++){ 
          result += char.charAt(Math.floor(Math.random() * char.length ));
        }
        setpassword(result);
        console.log(result);
  } , [Length , Numberallowed , Symbolallowed , setpassword])
 

  const Password_box = () => {
    return (
      <>
      <input type="text" value={password} className="border border-black rounded-lg  h-16 w-full md:w-1/3 p-3" disabled placeholder="Generate Password" />
    <button id="copy" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={()=>{navigator.clipboard.writeText(password) , setCopied(true) , setTimeout(() => {
      setCopied(false);
    }, 300);}}>Copy</button>
    <button onClick={password_generator} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Generate Password</button>
   </>
    )
  }

  return (
    <>
    {Copied && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-lg">copied</div>}
    <div className="App h-screen flex flex-col justify-center items-center bg-gray-200">
      <h1 className='text-center text-3xl font-bold m-14 '> Password Generator </h1>
      <div className="flex flex-col md:flex-row gap-4 p-4 md:p-8 bg-white rounded-lg shadow-lg">
      <Password_box />
      <div className="flex gap-4">
<input type="range" value={Length} onChange={(e)=>{setLength(e.target.value) , console.log(Length)}} min="4" max="16"  id="Setlength" />
      <div id="numberbox" className="flex items-center gap-2 bg-gray-800 text-white p-4 rounded-lg">
        <input 
          type="checkbox" 
          checked={Numberallowed}
          onChange={() => setNumberallowed(!Numberallowed)} 
          className="w-5 h-5 cursor-pointer" 
          id="number-checkbox"
        />
        <label htmlFor="number-checkbox" className="select-none">Include Numbers</label>
      </div>
      <div id="symbolbox" className="flex items-center gap-2 bg-gray-800 text-white p-4 rounded-lg">
        <input 
          type="checkbox" 
          checked={Symbolallowed}
          onChange={() => setSymbolallowed(!Symbolallowed)} 
          className="w-5 h-5 cursor-pointer" 
          id="symbol-checkbox"
        />
        <label htmlFor="symbol-checkbox" className="select-none">Include Symbols</label>
        </div>
      </div>
      </div>
      </div>
  </> 
  )
}


export default App

