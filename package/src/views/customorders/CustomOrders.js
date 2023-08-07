import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { FiMoreVertical } from "react-icons/fi";

export default function CustomOrders() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}customOrder/showCustomOrder`).then((res) => {
      setDatas(res.data.record);
      console.log("res", res.data.record);
    });
  }, []);

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
              {datas.map((items) => {
                return (
                  <tr className="border-top" key={items.no}>
                    {" "}
                    {/* Add a unique key for each row */}
                    <td>{items._id}</td>
                    <td>1</td>
                    <td>{items.stk_name}</td>
                    <td>{items.number}</td>
                    <td>{items.is_premium ? "Yes" : "No"}</td>
                    <td>{items.status ? "ACTIVATE" : "DESABLE"}</td>
                    <td>{items.seq}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
