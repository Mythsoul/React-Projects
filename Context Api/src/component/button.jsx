import { useContext  } from "react"
import { createCounter } from "../context/context"

const Button = () => {
    const counter = useContext(createCounter) ;
  return (
    <div><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={()=>{ counter.setCount(counter.count + 1)}}>Button</button></div>

  )  
}

export default Button