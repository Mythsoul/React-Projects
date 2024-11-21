import React, { useState } from 'react';
import { Plus, Minus, X, Divide, Percent, Equal, Delete, Dot } from 'lucide-react';

const ModernCalculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleDelete = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = new Function('return ' + display)();
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
      setTimeout(() => setDisplay(''), 1000);
    }
  };

  const buttons = [
    { value: '7', icon: '7' },
    { value: '8', icon: '8' },
    { value: '9', icon: '9' },
    { value: '/', icon: <Divide size={18} /> },
    { value: '4', icon: '4' },
    { value: '5', icon: '5' },
    { value: '6', icon: '6' },
    { value: '*', icon: <X size={18} /> },
    { value: '1', icon: '1' },
    { value: '2', icon: '2' },
    { value: '3', icon: '3' },
    { value: '-', icon: <Minus size={18} /> },
    { value: '0', icon: '0' },
    { value: '.', icon: <Dot size={18} /> },
    { value: '%', icon: <Percent size={18} /> },
    { value: '+', icon: <Plus size={18} /> },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 text-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Modern Calculator</h2>
        <input
          type="text"
          value={display}
          readOnly
          className="w-full mb-4 text-right text-2xl bg-gray-700 border border-gray-600 text-white rounded p-2"
          placeholder="0"
        />
        <div className="grid grid-cols-4 gap-2">
          <button
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleClick('(')}
          >
            (
          </button>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleClick(')')}
          >
            )
          </button>
          {buttons.map((btn) => (
            <button
              key={btn.value}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
              onClick={() => handleClick(btn.value)}
            >
              {btn.icon}
            </button>
          ))}
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            onClick={handleDelete}
          >
            <Delete size={18} />
          </button>
          <button
            className="col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            onClick={handleCalculate}
          >
            <Equal size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModernCalculator;

