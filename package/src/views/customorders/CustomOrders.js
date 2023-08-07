import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function CustomOrders() {
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
                <th>Id</th>
                <th>Order Id</th>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Coin</th>
                <th>Discount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top">
                <td>1</td>
                <td>123456</td>
                <td>Om kakadiya</td>
                <td>8527419630</td>
                <td>mail@mail.com</td>
                <td>325</td>
                <td>1</td>
                <td>15</td>
                <td>Paid</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
