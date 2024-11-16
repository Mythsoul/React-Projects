import React, { useState, useEffect } from "react";
import { Plus, Trash2, CheckSquare, Square, Pencil, Save } from 'lucide-react';

let todoCounter = 0;

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    todoCounter = savedTodos.length > 0 ? Math.max(...savedTodos.map(todo => todo.id)) : 0;
    return savedTodos;
  });


  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: ++todoCounter, text: newTodo.trim(), completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
    setEditingId(null);
  };

  const TodoItem = ({ todo }) => {
    const [editText, setEditText] = useState(todo.text);

    return (
      <li className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-md shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex items-center flex-1 mr-4">
          <button
            onClick={() => toggleTodo(todo.id)}
            className="mr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {todo.completed ? (
              <CheckSquare className="w-5 h-5 text-green-500" />
            ) : (
              <Square className="w-5 h-5" />
            )}
          </button>
          {editingId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 p-1 text-gray-700 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              autoFocus
            />
          ) : (
            <span className={`flex-1 ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}>
              {todo.text}
            </span>
          )}
        </div>
        <div className="flex items-center">
          {editingId === todo.id ? (
            <button
              onClick={() => editTodo(todo.id, editText)}
              className="p-1 text-blue-500 hover:text-blue-700 focus:outline-none"
              aria-label="Save changes"
            >
              <Save className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setEditingId(todo.id)}
              className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
              aria-label="Edit todo"
            >
              <Pencil className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => deleteTodo(todo.id)}
            className="p-1 ml-2 text-red-400 hover:text-red-600 focus:outline-none"
            aria-label="Delete todo"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </li>
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Todo App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={addTodo}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <Plus className="w-5 h-5 mr-1" />
          Add
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="text-gray-500 text-center text-lg mt-8">No todos yet. Why not add one?</p>
      ) : (
        <ul className="space-y-3 mt-6">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}