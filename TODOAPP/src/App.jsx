import { useState, useEffect } from "react";
import { Plus, Trash2, CheckSquare, Square ,Pencil } from "lucide-react";

let todoCounter = 0;

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) {
      todoCounter = Math.max(...savedTodos.map((todo) => todo.id));
      return savedTodos;
    }
    return [];
  });

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        id: ++todoCounter,
        text: newTodo.trim(),
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          className="flex-grow p-2 border border-gray-300 rounded-md mr-2"
        />
        <button
          onClick={addTodo}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-white border border-gray-300 rounded-md"
          >
            <div className="flex items-center">
              <button
                onClick={() => toggleTodo(todo.id)}
                className="mr-2 text-gray-600 hover:text-gray-800"
              >
                {todo.completed ? (
                  <CheckSquare className="w-5 h-5 text-green-500" />
                ) : (
                  <Square className="w-5 h-5" />
                )}
              </button>
              <span
                className={
                  todo.completed ? "line-through text-gray-500" : "text-black"
                }
              >
                {todo.text}
              </span>
            </div>

            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
              aria-label={`Delete ${todo.text}`}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


