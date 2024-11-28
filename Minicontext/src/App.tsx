import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile';
import Login from './components/Login';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/profile',
//     element: <Profile />
//   }
// ]);

function App() {
  return (
    <UserContextProvider>
      {/* <RouterProvider router={router}> */}
        <h1>Learning Context</h1>
        <Login /> 
        <Profile /> 
      {/* </RouterProvider> */}
    </UserContextProvider>
  )
}

export default App;

