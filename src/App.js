import React, { useEffect, useState } from "react";
import Login from "../src/Components/Login";
import Dashboard from "./Components/Dashboard";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/icons.min.css";
import "../src/assets/css/app.min.css";
import "../src/assets/css/style.css";
import "../src/assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendor from "./Components/Vendor";
import Rfp from "./Components/Rfp";
import Users from "./Components/Users";
import RegisterVendor from "./Components/RegisterVendor";




function App() {
  const [authenticated, setauthenticated] = useState(false);

  useEffect(() => {
    const loggeduser = localStorage.getItem("authenticated");
    if (loggeduser) {
      setauthenticated(true);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/rfp" element={<Rfp/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/registervendor" element={<RegisterVendor/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
