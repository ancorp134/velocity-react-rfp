import React , {useEffect, useState} from "react";

import img from "../assets/images/velocity_logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [name ,  setName] = useState("")
 
  const navigate = useNavigate();

  useEffect(() => {
    const loggeduser = localStorage.getItem("authenticated");
    const user = localStorage.getItem("username")
    if (!loggeduser) {
      navigate("/login");
    }
    else{
      setName(user)
    }
  }, []);

  function handleLogout() {
    console.log("click");
    localStorage.removeItem("authenticated");
    navigate("/login");
    
  }

  return (
    
      <body data-sidebar="dark">
        <div id="layout-wrapper">
          <header id="page-topbar">
            <div className="navbar-header">
              <div className="d-flex">
                <div className="navbar-brand-box">
                  <a href="" className="logo logo-light">
                    <span className="logo-sm">
                      <img src={img} alt="" height="40" />
                    </span>
                    <span className="logo-lg">
                      <img src={img} alt="" height="" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="d-flex pr-2">
                <div className="dropdown d-inline-block">
                  <span className="d-none d-xl-inline-block ml-1" key="t-henry">
                    {name}
                  </span>
                  &nbsp;&nbsp;
                  <NavLink to="/login" className="" onClick={handleLogout}>
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
          </header>

          <div className="vertical-menu">
            <div data-simplebar className="h-100">
              <div id="sidebar-menu">
                <ul className="metismenu list-unstyled" id="side-menu">
                  <li>
                    <NavLink to="/dashboard" className="waves-effect">
                      <i className="mdi mdi-file-document-box-outline"></i>
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/vendor" className="waves-effect">
                      <i className="mdi mdi-receipt"></i>
                      <span>Vendors</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rfp" className="waves-effect">
                      <i className="mdi mdi-flip-vertical"></i>
                      <span>RFP Lists</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/users" className="waves-effect">
                      <i className="mdi mdi-apps"></i>
                      <span>User Management</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#" className="waves-effect">
                      <i className="mdi mdi-weather-night"></i>
                      <span>Categories</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    
  );
}
