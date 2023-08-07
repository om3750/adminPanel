import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function Users() {
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
                <th>UID</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Email or Number</th>
                <th>Type</th>
                <th>Premium</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top">
                <td>1987</td>
                <td>qwertyuiopsdfghjk</td>
                <td>Picture 🖼</td>
                <td>om kakadiya</td>
                <td>7410852963</td>
                <td>Google</td>
                <td>False</td>
                <td>04-08-2023</td>
                <td>Show</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
