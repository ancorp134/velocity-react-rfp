import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">User List</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <NavLink to="/dashboard">Home</NavLink>
                      </li>
                      <li className="breadcrumb-item active">Users</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Filter</h5>

                    <form className="">
                      <div className="row">
                        <div className="col-lg-4 col-md-4">
                          <label className="sr-only" for="inlineFormSearchl2">
                            Search
                          </label>
                          <div className="input-group mb-2 mr-sm-3">
                            <div className="input-group-prepend">
                              <div className="input-group-text">
                                <i className="mdi mdi-magnify"></i>
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormSearchl2"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <select
                            className="form-control"
                            id="userstatus"
                            name="userstatus"
                          >
                            <option value="">Select Status</option>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>
                          </select>
                        </div>

                        <div className="col-lg-4 col-md-4 text-right">
                          <button type="submit" className="btn btn-primary mb-2">
                            Submit
                          </button>
                          <button
                            type="submit"
                            className="btn btn-secondary ml-2 mb-2"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="TableHeader">
                      <div className="row">
                        <div className="col-lg-3">
                          <h4 className="card-title">Users</h4>
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
                            <th>S. No.</th>
                            <th>First name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Aman</td>
                            <td>Sharma</td>
                            <td>aman@gmail.com</td>
                            <td>
                              <span className="badge badge-pill badge-success">
                                Active
                              </span>
                            </td>
                            <td>
                              <a href="edituser.html" className="text-primary mr-2">
                                <i className="mdi mdi-pencil"></i>
                              </a>
                              <a href="#" className="text-danger">
                                <i className="mdi mdi-circle-off-outline"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Gagan</td>
                            <td>Kumar</td>
                            <td>gagan456@gmail.com</td>
                            <td>
                              <span className="badge badge-pill badge-success">
                                Active
                              </span>
                            </td>
                            <td>
                              <a href="edituser.html" className="text-primary mr-2">
                                <i className="mdi mdi-pencil"></i>
                              </a>
                              <a href="#" className="text-danger">
                                <i className="mdi mdi-circle-off-outline"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Vinay</td>
                            <td>Singh</td>
                            <td>vinay009@gmail.com</td>
                            <td>
                              <span className="badge badge-pill badge-success">
                                Active
                              </span>
                            </td>
                            <td>
                              <a href="edituser.html" className="text-primary mr-2">
                                <i className="mdi mdi-pencil"></i>
                              </a>
                              <a href="#" className="text-danger">
                                <i className="mdi mdi-circle-off-outline"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Ravi</td>
                            <td>Raj</td>
                            <td>ravi@gmail.com</td>
                            <td>
                              <span className="badge badge-pill badge-danger">
                                Inactive
                              </span>
                            </td>
                            <td>
                              <a href="edituser.html" className="text-primary mr-2">
                                <i className="mdi mdi-pencil"></i>
                              </a>
                              <a href="#" className="text-danger">
                                <i className="mdi mdi-circle-off-outline"></i>
                              </a>
                            </td>
                          </tr>
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
                          Showing 1 to 5 of 5 entries
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
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
