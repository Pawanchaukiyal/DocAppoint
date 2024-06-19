import React, { useState } from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import {Context} from "../main";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from 'axios';
const Navbar = () => {

  const[show,setShow]=useState(false);
  const{isAuthenticated,setIsAuthenticated}=useContext(Context);

  const handleLogout = async()=>{
    await axios.get("http://localhost:4000/api/v1/user/patient/logout",{
      withCredentials: true, 
    }).then((res)=>{
      toast.success(res.data.message);
      setIsAuthenticated(false);
    })
    .then((res)=>{
      toast.success(res.data.message);
    })
  }

  const navigateTo = useNavigate();

  const goToLogin = () =>{
    navigateTo("/login")
  }

  return (
    
    <>
   <nav className={"container"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointement"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
          </div>
          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout}>
              LOGOUT
            </button>
          ) : (
            <button className="loginBtn btn" onClick={goToLogin}>
              LOGIN
            </button>
          )}
       </div>

       <div>
       <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)}/>
       </div>
      </nav> 
    </>
  )
}

export default Navbar
