import { createElement, useContext } from "react"
import { createCounter } from "../context/context"

const Component1 = () => {
  const count = useContext(createCounter)
    return (
    <div>
        I am count {count}
    </div>
  )
}

export default Component1