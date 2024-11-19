import { useState } from 'react'
import Navbar from './component/navbar'
import { createCounter } from './context/context'
import Component1 from './component/component1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 h-screen">
      <createCounter.Provider value={count}>
        <Navbar />
        <div className="container mx-auto p-4">
          <h1 className="text-5xl font-bold">Context Api Started</h1>
          <div className="mt-8">
            <Component1 />
          </div>
          <div className="counter mt-8">
            <p className="text-4xl">CURRENT COUNT {count}</p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => {
              setCount(count + 1)
            }}>Update COUNT </button>
          </div>
        </div>
      </createCounter.Provider>
    </div>
  )
}

export default App

