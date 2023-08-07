import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function Package() {
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
              Add Package
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Id</th>
                <th>package Name</th>
                <th>Validity(Day)</th>
                <th>Price(Rs.)</th>
                <th>Price($)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top">
                <td>12</td>
                <td>1 month</td>
                <td>30</td>
                <td>(299)(299) No offer</td>
                <td>(4.99)(4.99) No offer</td>
                <td>ACTIVE</td>
                <td>Actions</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
