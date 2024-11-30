import { useEffect } from "react"
import { useState } from "react"
import { ThemeProvider } from "./context/theme"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"
function App() {
  const [themeMode, setThemeMode] = useState("ligth")
  const Darktheme = () => {
    setThemeMode("dark")
  }
  const Lighttheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
     const html = document.querySelector("html"); 
     html.classList.remove("dark" , "light"); 
     html.classList.toggle(themeMode);
  } , [themeMode]) 

  return (
    <>
    <ThemeProvider value={{themeMode , Darktheme , Lighttheme}}>
     <h1 className="text-6xl font-bold text-center mt-10 font-mono  ">Hello </h1>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                          <Card /> 
                    </div>
                </div>
            </div>
            </ThemeProvider>
    </>
  )
}

export default App
