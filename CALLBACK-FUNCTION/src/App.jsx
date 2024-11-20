import { useState , useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './componet/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Function without callback 
  const data = ()=>{ 
    return "1"
  } ; 

  // Function with callback 
     const demobetterdata = useCallback( ()=>{ 
      return "2"
     } , [])

 // Function with callback and state validation kinda 

 const betterdata = useCallback(()=>{ 
  return "its" + count
 } , [count])

  return (
    <>
    <Navbar data={data()} betterdata={betterdata()} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
















































