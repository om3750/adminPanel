import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function ShowMessage() {
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
              <tr className="border-top">
                <td>8</td>
                <td>image 🖼</td>
                <td>Template</td>
                <td>FALSE</td>
                <td>FALSE</td>
                <td>Diwali</td>
                <td></td>
                <td>None</td>
                <td>Live</td>
                <td>...</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
