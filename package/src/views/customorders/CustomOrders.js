import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { FiMoreVertical } from "react-icons/fi";

export default function CustomOrders() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}customOrder/showCustomOrder`).then((res) => {
      setDatas(res.data.record);
      console.log("res", res.data.record);
      setIsLoading(false); // Turn off loading state when data is retrieved

    });
  }, []);

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
        {isLoading ? (
            <div className="text-center mt-3">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            datas.length > 0 && (
              <div>
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
              {datas.map((items) => {
                return (
                  <tr className="border-top" key={items._id}>
                    {/* Add a unique key for each row */}
                    <td>{items.sql_id}</td>
                    <td>{items.ref_temp_id}</td>
                    <td>{items.name}</td>
                    <td>{items.contact}</td>
                    <td>{items.email}</td>
                    <td>{items.paid_amount}</td>
                    <td>No</td>
                    <td>No</td>
                    <td>{items.status ? "ACTIVATE" : "DISABLE"}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>              </div>
            )
          )}
        </CardBody>
      </Card>
    </div>
  );
}
