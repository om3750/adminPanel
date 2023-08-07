import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";

export default function StickerCategory() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}sticker/showStk`).then((res) => {
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
              onClick={() => navigate("/AddStickerCategory")}
              className="m-2 btn"
            >
              Add New Sticker Category
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Sticker Id</th>
                <th>Category Name</th>
                <th>Sticker Image</th>
                <th>Sequence Number</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((items) => {
                return (
                  <tr className="border-top" key={items.no}>
                    <td>{items._id}</td>
                    <td>{items.stk_category_name}</td>
                    <td>
                      <img
                        style={{ height: "100%", width: "100px" }}
                        src={`http://192.168.29.222:8080/${items.stk_category_thumb}`}
                        alt="Logo"
                      />
                    </td>
                    <td>{items.sequence_number}</td>
                    <td>{items.status ? "ACTIVATE" : "DISABLE"}</td>
                    <td>buttons</td>
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
