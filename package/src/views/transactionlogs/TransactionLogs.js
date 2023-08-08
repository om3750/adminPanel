import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import axios from "axios";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function Category() {
  const navigate = useNavigate();

  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}TransactionLog/showTransactionLog`).then((res) => {
      setDatas(res.data.record);
      console.log("res", res.data.record);
    });
  }, []);

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
                {datas.map((items) => {
                  return (
                    <tr className="border-top" key={items.no}>
                      {/* Add a unique key for each row */}
                      <td>No.</td>
                      <td>User Id</td>
                      <td>User Name</td>
                      <td>Transacion Id</td>
                      <td>Platform</td>
                      <td>Amount</td>
                      <td>Paid</td>
                      <td>Payment Time</td>
                    </tr>
                  );
                })}
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
