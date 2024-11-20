import React from 'react'
import { useForm } from "react-hook-form"

import './App.css'
import { data } from 'autoprefixer';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting },
  } = useForm()

  const delay = (d)=>{ 
    return new Promise( (resolve , reject)=>{ 
      setTimeout(() => {
         resolve(); 
      }, d * 1000);
      })
    
  }
const onSumbit = async (data) => { await delay(2) ; console.log(data) }; 

  return (
    <>

{isSubmitting && <div className='summbiting '> <p>Loading... </p> </div> }
      <div className='max-w-md relative left-32'>
        <h1 className='text-3xl text-center'>Hello Mother Fucker  </h1>
        <form className='flex flex-col gap-4 p-4 w-400px' onSubmit={handleSubmit(onSumbit)}>
          <label className='flex flex-col'>
            <span className='text-sm'>Name</span>
            <input {...register("name" , { 
              required: "Name is required",
              minLength: { value: 3 , message: "Name should be at least 2 characters long" },
              maxLength: { value: 20 , message: "Name should be at most 20 characters long" }
            })} className='border-2 p-2' type="text"  />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </label>
          <label className='flex flex-col'>
            <span className='text-sm'>Email</span>
            <input {...register("email" , { 
              required: "Email is required",
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
            })} className='border-2 p-2' type="email" />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </label>

          <label className='flex flex-col'>
            <span className='text-sm'>Password</span>
            <input {...register("password" , { 
              required: "Password is required", 
              minLength: { value: 6 , message: "Password should be at least 6 characters long" }
            })} className='border-2 p-2' type="password"/>
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </label>
          <button disabled={isSubmitting} className='bg-blue-500 p-2 text-white' >Register</button>
        </form>
      </div>
    </>
  )
}

export default App
