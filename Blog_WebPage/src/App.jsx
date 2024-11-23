import { useState } from "react";
import { PlusCircle, Edit2, Trash2, X } from 'lucide-react';

const App = () => {
  const [Blogs, setBlogs] = useState(() => JSON.parse(localStorage.getItem("Blogs")) || []);
  const [updating, setUpdating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const toggleUpdateBlog = (index) => {
    setCurrentIndex(index);
    setUpdating(true);
    document.getElementById("update-blog-form").showModal();
  };

  const handleBlogUpdate = (e) => {
    e.preventDefault();
    const updatedHeading = e.target["blog-heading"].value;
    const updatedDescription = e.target["blog-description"].value;
    const updatedBlogs = [...Blogs];
    updatedBlogs[currentIndex] = { heading: updatedHeading, description: updatedDescription };

    setBlogs(updatedBlogs);
    localStorage.setItem("Blogs", JSON.stringify(updatedBlogs));

    document.getElementById("update-blog-form").close();
    setUpdating(false);
    setCurrentIndex(null);
  };

  const addBlog = (e) => {
    e.preventDefault();
    const heading = e.target["blog-heading"].value;
    const description = e.target["blog-description"].value;

    const newBlogs = [...Blogs, { heading, description }];
    setBlogs(newBlogs);
    localStorage.setItem("Blogs", JSON.stringify(newBlogs));

    document.getElementById("add-blog-form").close();
  };

  const deleteblog = (index) => {
    const updatedBlogs = [...Blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
    localStorage.setItem("Blogs", JSON.stringify(updatedBlogs));
    console.log("deleted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="header flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">My Blogs</h1>
          <button
            onClick={() => document.getElementById("add-blog-form").showModal()}
            className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <PlusCircle className="mr-2" size={20} />
            Add Blog
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{blog.heading}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => toggleUpdateBlog(index)}
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => deleteblog(index)}
                    className="text-red-600 hover:text-red-800 transition duration-300"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <dialog id="add-blog-form" className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md backdrop:bg-gray-800/50">
          <form onSubmit={addBlog} className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Add New Blog</h2>
              <button onClick={() => document.getElementById("add-blog-form").close()} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div>
              <label htmlFor="blog-heading" className="block text-sm font-medium text-gray-700 mb-1">
                Blog Heading
              </label>
              <input
                type="text"
                id="blog-heading"
                name="blog-heading"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>

            <div>
              <label htmlFor="blog-description" className="block text-sm font-medium text-gray-700 mb-1">
                Blog Description
              </label>
              <textarea
                id="blog-description"
                name="blog-description"
                rows="4"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Add Blog
            </button>
          </form>
        </dialog>

        {updating && (
          <dialog id="update-blog-form" className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md backdrop:bg-gray-800/50">
            <form onSubmit={handleBlogUpdate} className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Update Blog</h2>
                <button onClick={() => document.getElementById("update-blog-form").close()} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <div>
                <label htmlFor="blog-heading" className="block text-sm font-medium text-gray-700 mb-1">
                  Blog Heading
                </label>
                <input
                  type="text"
                  id="blog-heading"
                  name="blog-heading"
                  required
                  defaultValue={Blogs[currentIndex]?.heading || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="blog-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Blog Description
                </label>
                <textarea
                  id="blog-description"
                  name="blog-description"
                  rows="4"
                  required
                  defaultValue={Blogs[currentIndex]?.description || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Update Blog
              </button>
            </form>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default App;

