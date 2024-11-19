import {  useContext } from "react"
import { createCounter } from "../context/context"

const Component1 = () => {
  const value = useContext(createCounter)
    return (
    <div className="text-center text-xl font-semibold">
        Current count: <span className="text-blue-500">{value.count}</span>
    </div>
  )
}

export default Component1