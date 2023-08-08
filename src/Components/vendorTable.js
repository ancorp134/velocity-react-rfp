import React from "react";

export default function VendorTable({ data }) {

  

  return (
    <>
      {data.map((e, index) => {
        return (
          <tr key={e.user_id}>
            <th scope="row">{index + 1}</th>
            <td>{e.name.split(" ")[0]}</td>
            <td>{e.name.split(" ")[1]}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>
              <span className="badge badge-pill badge-success">Active</span>
            </td>
            <td>
              <a
                href="editvendor.html"
                className="text-primary mr-2"
                title="Edit"
              >
                <i className="mdi mdi-pencil"></i>
              </a>
              <a href="#" className="text-danger">
                <i className="mdi mdi-circle-off-outline"></i>
              </a>
            </td>
          </tr>
        );
      })}
    </>
  );
}
