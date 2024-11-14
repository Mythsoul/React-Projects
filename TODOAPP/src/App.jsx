import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

function App() {
    const [todo, settodo] = useState(() => {

        const savedTodos = JSON.parse(localStorage.getItem("todo") || "[]");
        return savedTodos;
    });

    useEffect(() => {
        if (todo.length > 0) { 
            localStorage.setItem("todo", JSON.stringify(todo));
        }
    }, [todo]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const description = e.target[1].value;
       const newTodo = [...todo, { title, description }];
        settodo(newTodo);
        e.target.reset();
    };

    const handleDelete = (title) => {

        const newTodo = todo.filter((todo) => todo.title !== title);
        settodo(newTodo);
    };

    const Inputbox = () => {
        return (
            <div id="Input_Box" className="mt-4 flex justify-center">
                <form onSubmit={handleSubmit} className="flex items-center">
                    <label htmlFor="Input_Box" className="font-bold text-black mr-4">Add a task</label>
                    <input
                        id="Input_Box"
                        name="title"
                        className="w-[300px] p-2 border border-gray-300 rounded-lg text-black font-mono"
                        type="text"
                        placeholder="Add a task"
                        required
                    />
                    <input name="description" className="hidden" type="text" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full h-10 ml-2 flex items-center justify-center">
                        <Plus className="mr-1" />
                    </button>
                </form>
            </div>
        );
    };

    const Card = ({ title }) => {
        return (
            <div className="card mt-20 w-[400px] ml-56 rounded-lg">
                <div className="card-title flex justify-between">
                    <h3>{title}</h3>
                    <div className="flex items-center">
                        <button className="mr-2 text-blue-500 hover:text-blue-700" type="button">
                            <Pencil className="h-4 w-4" />
                        </button>
                        <button 
                            className="mr-2 text-red-500 hover:text-red-700" 
                            type="button"
                            onClick={() => handleDelete(title)} 
                        >
                            <Trash2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    

    return (
        <>
            <h1 className="text-4xl font-bold text-center">To Do List</h1>
            <Inputbox />
            {todo.length > 0 ? (
                todo.map((detail, index) => <Card key={index} {...detail} />)
            ) : (
                <h1>No Task</h1>
            )}
        </>
    );
}

export default App;
