import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function Feedback() {
  const navigate = useNavigate();

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            {/* <h4 className="card-title">Admin List</h4> */}
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Index</th>
                <th>User ID</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top">
                <td>1</td>
                <td>wdcvyjmkmca</td>
                <td>2023-10-22 21-48:21</td>
                <td>ACTIVE</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
