import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function Employees() {
  const navigate = useNavigate();

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            {/* <h4 className="card-title">Admin List</h4> */}
            <Button
              color="primary"
              onClick={() => navigate("/addcategory")}
              className="m-2 btn"
            >
              Add Employees
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Email</th>
                <th>Employee Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top">
                <td>1</td>
                <td>Om Kakadiya</td>
                <td>mail@mail.com</td>
                <td>Admin</td>
                <td>ACTIVE</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
