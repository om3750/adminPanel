import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import axios from "axios";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function ShowMessage() {
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
            {/* <h4 className="card-title">Admin List</h4> */}
            <Button
              color="primary"
              onClick={() => navigate("/addcategory")}
              className="m-2 btn"
            >
              Add
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Type</th>
                <th>Is Banner</th>
                <th>Can Cancle</th>
                <th>Keyword</th>
                <th>Link</th>
                <th>Date Range</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((items) => {
                return (
                  <tr className="border-top" key={items.no}>
                    {/* Add a unique key for each row */}
                    <td>Id</td>
                    <td>Image</td>
                    <td>Type</td>
                    <td>Is Banner</td>
                    <td>Can Cancle</td>
                    <td>Keyword</td>
                    <td>Link</td>
                    <td>Date Range</td>
                    <td>Status</td>
                    <td>Action</td>
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
