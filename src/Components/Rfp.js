import React, {useEffect , useState}from "react";


import "react-toastify/dist/ReactToastify.css";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import RfpTable from "./rfpTable";

export default function Rfp() {


  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authenticated");
    setLoading(true);
    async function fetchData() {
      await fetch("https://rfpdemo.velsof.com/api/rfp/all", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((d) => setdata(d.rfps))
        .finally(() => {
          setLoading(false);
        });
    }

    fetchData();
  }, []);

  

  return (
    <>
      <Navbar></Navbar>

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">RFP List</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <NavLink to="/dashboard">Home</NavLink>
                      </li>
                      <li className="breadcrumb-item active">RFP List</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {loading ? 
            (<h1>Loading....</h1>)  
           : (
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="TableHeader">
                      <div className="row">
                        <div className="col-lg-3">
                          <h4 className="card-title">RFP</h4>
                        </div>
                        <div className="col-lg-9 text-right">
                          <div className="headerButtons">
                            <a
                              href="#"
                              className="btn btn-sm btn-success "
                            >
                              <i className="mdi mdi-plus"></i> Add RFP
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table
                        className="table mb-0 listingData dt-responsive"
                        id="datatable"
                      >
                        <thead>
                          <tr>
                            <th>RFP No.</th>
                            <th>RFP Title</th>
                            <th>RFP Last Date</th>
                            <th>Min Amount</th>
                            <th>Max Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <RfpTable data={data}></RfpTable>
                        </tbody>
                      </table>
                    </div>

                    <div className="row pt-3">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          id="datatable_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to {data.length} entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7 dataTables_wrapper ">
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="datatable_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="datatable_previous"
                            >
                              <a
                                href="#"
                                aria-controls="datatable"
                                data-dt-idx="0"
                                tabindex="0"
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="datatable"
                                data-dt-idx="1"
                                tabindex="0"
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next disabled"
                              id="datatable_next"
                            >
                              <a
                                href="#"
                                aria-controls="datatable"
                                data-dt-idx="2"
                                tabindex="0"
                                className="page-link"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           )}



          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
