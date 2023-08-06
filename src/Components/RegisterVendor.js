import React from "react";

export default function RegisterVendor() {
  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <a href="" className="text-dark">
          <i className="fas fa-home h2"></i>
        </a>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-8">
              <div className="card overflow-hidden">
                <div className="bg-soft-primary">
                  <div className="row">
                    <div className="col-12">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome to RFP System!</h5>
                        <p>Regsiter as Vendor</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="p-4">
                    <form className="form-horizontal" action="">
                      <div className="row">
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label for="firstname">First name*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstname"
                              placeholder="Enter Firstname"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label for="lastname">
                              Last Name<em>*</em>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastname"
                              placeholder="Enter Lastname"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label for="email">Email*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="Enter Email"
                            />
                          </div>
                        </div>

                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label for="password">Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Enter Password"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label for="password">Confirm Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              id="confirmpassword"
                              placeholder="Enter Confirm Password"
                            />
                          </div>
                        </div>

                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label for="revenue">
                              Revenue (Last 3 Years in Lacks)*
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="revenue"
                              placeholder="Enter Revenue"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label for="noofemployees">No of Employees*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="noofemployees"
                              placeholder="No of Employees"
                            />
                          </div>
                        </div>

                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label for="gstno">GST No*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="gstno"
                              placeholder="Enter GST No"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label for="panno">PAN No*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="panno"
                              placeholder="Enter PAN No"
                            />
                          </div>
                        </div>

                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label for="revenue">Phone No*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="revenue"
                              placeholder="Enter Phone No"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-6">
                          <div className="form-group">
                            <label for="Categories">Categories*</label>
                            <select
                              className="form-control"
                              multiple
                              id="Categories"
                              name="Categories"
                            >
                              <option value="">All Categories</option>
                              <option value="1">Software</option>
                              <option value="2">Hardware</option>
                              <option value="3">Office Furniture</option>
                              <option value="4">Stationery</option>
                            </select>
                          </div>
                        </div>

                        <div className="p-2 mt-3">
                          <button
                            className="btn btn-primary btn-block waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <div>
                  <p>
                    &copy; Copyright <i className="mdi mdi-heart text-danger"></i>{" "}
                    RFP System
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
