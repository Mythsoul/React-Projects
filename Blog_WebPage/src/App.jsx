import { useState } from 'react'
import './App.css'

function App() {
  const [Blogs, setBlogs] = useState(null)
  const Header = ()=>{ 
    return (
    <>
        <div className="header bg-slate-400 border-2 rounded-lg p-4 flex">
          <h1 className='text-4xl text-red font-mono p-4'>Blogs</h1>
          <button id="add-blog" className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg ml-auto p-4" onClick={()=>{ document.getElementById("add-blog-form").showModal() }}> Add Blogs</button>
        </div>
    </>
    )
  }

  
  const AddBlogForm =()=>{ 
    return (
        <dialog id="add-blog-form" className="bg-white rounded-lg shadow-2xl p-8">
          <form className="space-y-4">
            <label htmlFor="blog-heading" className="block text-sm font-medium text-gray-700">Blog Heading</label>
            <input type="text" id="blog-heading" name="blog-heading" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            <label htmlFor="blog-description" className="block text-sm font-medium text-gray-700">Blog Description</label>
            <textarea id="blog-description" name="blog-description" rows="4" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            <label htmlFor="blog-photo" className="block text-sm font-medium text-gray-700">Blog Photo</label>
            <input type="file" id="blog-photo" name="blog-photo" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            <button type="submit" className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add Blog</button>
          </form>
        </dialog>
    )
  }

  return (
    <>
      <div>
       <Header /> 
       <AddBlogForm />
     </div>
  
    </>
  )
}


export default App
