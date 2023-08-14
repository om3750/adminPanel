import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Table } from "reactstrap";

export default function UpdateTemplate() {
  const navigate = useNavigate();

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            {/* ______________________----------------------first section--------------------------______________________ */}

            <Button
              size="lg"
              color="primary"
              onClick={() => navigate("/addtemplate")}
              className="m-2 btn"
            >
              Add New Page
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            {/* ______________________---------------------------------secound section----------------------------______________________ */}
            {/* <h4 className="card-title">Admin List</h4> */}
            <Button
              color="danger"
              onClick={() => navigate("/addtemplate")}
              className="m-2 btn"
            >
              Remove Page
            </Button>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="form-group">
                <label>Post Thumb</label>
                <input
                  type="file"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
            </div>
            <div className="col-lg-2">

            <div className="form-group">
              <label>Select BG Type</label>
              <select className=" mb-3 form-control" name="app_id">
                <option value="">--Select Application--</option>
                <option value="">Crafty Art</option>
              </select>
            </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label>Back Image</label>
                <input
                  type="file"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label>Gradient Angle</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label>Gradient Ratio</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
