import React from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate,useLocation,Outlet} from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Details from "../pages/Details"
import NewBlog from "../pages/NewBlog"
import Profile from "../pages/Profile"
import UpdateBlog from "../pages/UpdateBlog"
import Navbar from '../components/Navbar'
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext"
const AppRouter = () => {
  function PrivateRouter(){
    const { currentUser } = useContext(AuthContext);
  
    let location = useLocation();
    if(!currentUser){
      return <Navigate to="/login" state={{ from:location}} replace />;
    }
    return <Outlet/>;
  }

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRouter />}>       
            <Route path="/details" element={<Details />} />

        </Route>
        <Route element={<PrivateRouter />}>       
            <Route path="/newblog" element={<NewBlog />} />

        </Route>
        <Route element={<PrivateRouter />}>       
            <Route path="/profile" element={<Profile />} />

        </Route>
        <Route element={<PrivateRouter />}>       
            <Route path="/update-blog" element={<UpdateBlog />} />

        </Route>




     </Routes>
    </Router>
  );
}

export default AppRouter
