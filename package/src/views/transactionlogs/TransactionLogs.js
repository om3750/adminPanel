import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function Category() {
  const navigate = useNavigate();

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="card-title">Transaction Logs</h4>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>No.</th>
                <th>User Id</th>
                <th>User Name</th>
                <th>Transacion Id</th>
                <th>Platform</th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Payment Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-top">
                <td>1</td>
                <td>qwertyuioplkjhgfdscv</td>
                <td>Crafty Art</td>
                <td>Pay_zxcvbnmok</td>
                <td>Mobile</td>
                <td>Rs 99</td>
                <td>Rs 99</td>
                <td>2023-08-22 21:40:58</td>
              </tr>              
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
