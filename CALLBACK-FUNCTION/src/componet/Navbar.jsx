import { memo } from "react"; 

function Navbar({data , betterdata}) {
    console.log("navbar being rendered ")
  return (
  <>
    <div>I am data {data} </div>
    
    <div>This is better data {betterdata}</div>
    <button onClick={()=>{ 
      betterdata();
    }
    }>Click me </button>

  </>
)
}

export default memo(Navbar)