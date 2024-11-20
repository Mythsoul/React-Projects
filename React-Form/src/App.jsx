import React from 'react'
import { useForm } from "react-hook-form"

import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div className='max-w-md relative left-32'>
        <h1 className='text-3xl text-center'>Hello Mother Fucker  </h1>
        <form className='flex flex-col gap-4 p-4 w-400px' action='' onSubmit={handleSubmit(onsubmit)} >
          <label className='flex flex-col'>
            <span className='text-sm'>Name</span>
            <input className='border-2 p-2' type="text"  />
          </label>
          <label className='flex flex-col'>
            <span className='text-sm'>Email</span>
            <input className='border-2 p-2' type="email" />
          </label>
          <label className='flex flex-col'>
            <span className='text-sm'>Password</span>
            <input className='border-2 p-2' type="password"/>
          </label>
          <button className='bg-blue-500 p-2 text-white' type="submit">Register</button>
        </form>
      </div>
    </>
  )
}

export default App
