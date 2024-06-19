import React from 'react'
import Home from './home/Home'
import { Navigate, Routes, Route } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import Contact from './contact/Contact'
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-800 dark:text-white">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route 
            path="/course" 
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/contactus" element={<Contact/>}/>
        </Routes>
        <Toaster/>
      </div>

    </>
  )
}

export default App
