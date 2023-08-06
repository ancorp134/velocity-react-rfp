import React from "react";

import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">2022 &copy; Copyright.</div>
              <div className="col-sm-6">
                <div className="text-sm-right d-none d-sm-block">
                  Support Email:
                  <NavLink to="#" target="_blank" className="text-muted">
                    {" "}
                    support@velsof.com{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </footer>
      
    </>
  );
}
