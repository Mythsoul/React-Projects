import Navbar from './navbar'
function About() {
  return (
   <>
   <div>
    <Navbar /> 
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold">About</h1>
      <p className="text-2xl">I am learning React Router</p>
    </div>
    </div>
    </>
  )
}

export default About