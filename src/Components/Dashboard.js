import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import Footer from "./Footer";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

export default function Dashboard({data}) {

  console.log(data)

  return (
    <>
      <Navbar ></Navbar>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">Dashborad</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <NavLink to="/dashboard">Home</NavLink>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div>Welcome to RFP System.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer></Footer>
        </div>
      </div>

      <ToastContainer autoClose={1000} limit={1}></ToastContainer>
    </>
  );
}
