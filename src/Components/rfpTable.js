import React from "react";

export default function RfpTable({ data }) {
  console.log(data);

  return (
    <>
      {data.map((e, index) => {
        return (
          <tr  key={e.user_id}>
            <th scope="row">{e.rfp_no}</th>
            <td>{e.item_name}</td>
            <td>{e.last_date}</td>
            <td>{e.minimum_price}</td>
            <td>{e.maximum_price}</td>
            <td>
              <span className="badge badge-pill badge-success">Open</span>
            </td>
            <td>
              <a href="#" title="Close RFP" className="text-danger">
                <i className="mdi mdi-circle-off-outline"></i>
              </a>
            </td>
          </tr>
        );
      })}
    </>
  );
}
