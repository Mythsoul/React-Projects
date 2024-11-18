import Navbar from "./navbar"
function Contact() {
  return ( <>
 <Navbar /> 
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-6xl font-bold">Contact</h1>
      <p className="text-2xl">Get in touch with us</p>
      <form className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea id="message" name="message" rows="5" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Message"></textarea>
        </div>
        <div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">

            </span>
            Send
          </button>
        </div>
      </form>
    </div>
  </>)
}

export default Contact