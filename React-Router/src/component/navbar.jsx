import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white text-lg py-4 px-6 shadow-md flex justify-around items-center">
      <NavLink to="/" className="hover:text-gray-400 transition-colors duration-300">Home</NavLink>
      <NavLink to="/about" className="hover:text-gray-400 transition-colors duration-300">About</NavLink>
      <NavLink to="/contact" className="hover:text-gray-400 transition-colors duration-300">Contact</NavLink>
    </nav>
  )
}

export default Navbar

