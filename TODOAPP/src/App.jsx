import { useState } from "react";
import { Plus } from 'lucide-react';
function App() {
    const [todo, settodo] = useState([]);
    const Inputbox = () => {
        return (
            <>
             <div id="Input_Box" className="mt-4 relative ml-[46%]">
                <form>
                <label htmlFor="Input_Box" className="font-bold text-black">Add a task</label> <br /> <br></br>
              <input id="Input_Box" name="Input_Box" className="w-[300px] p-2 border border-gray-300 rounded-2xl  text-black font-mono" type="text" placeholder="Add a task" required />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full h-10 ml-2 relative top-2"><Plus /> Add Task</button>
              </form>
</div>
</>
        )
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-4">Todo App</h1>
            <Inputbox />
        </div>
    );    
}

export default App