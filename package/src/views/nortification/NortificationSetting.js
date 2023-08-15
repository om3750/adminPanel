import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function NortificationSetting() {
  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          {/* <h4 className="card-title mb-3">Payment Setting</h4> */}
            {/* --------------------------------------------------------------- */}
            <div className="mb-3 form-group">
              <label>Onesignal Api Key</label>
              <input
                type="text"
                className=" mb-3 form-control"
                name="name"
                placeholder="Onesignal Api Key"
              />
            </div>

            <div className="form-group">
              <label>Onesiganl Appid</label>
              <input
                type="text"
                className=" mb-3 form-control"
                name="name"
                placeholder="Onesiganl Appid"
              />
            </div>
            <button className="mb-3 btn btn-primary">Submit</button>
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardBody>
          {/* <h4 className="card-title mb-3">Payment Setting</h4> */}
            {/* --------------------------------------------------------------- */}
            <div className="mb-3 form-group">
              <label>Title</label>
              <input
                type="text"
                className=" mb-3 form-control"
                name="name"
                placeholder="Title"
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className=" mb-3 form-control"
                name="name"
                placeholder="Description"
              />
            </div>
            <div className="form-group">
              <label>Large Icon</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="catimage"
              />
            </div>
            <div className="form-group">
              <label>Big Picture</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="catimage"
              />
            </div>
            <div className="form-group">
              <label>Activity Name</label>
              <input
                type="text"
                className=" mb-3 form-control"
                name="name"
                placeholder="Activity Name"
              />
            </div>
            <div className="form-group">
              <label>Schedule</label>
              <input
                type="text"
                className=" mb-3 form-control"
                name="name"
                disabled
                placeholder="Select Date & Time"
              />
            </div>
            <div className="d-flex justify-content-between">
              <button className="mb-3 w-100 btn btn-success">
                Add Inserted Data
              </button>
            </div>
            <button className="mb-3 btn float-right btn-primary">Submit</button>
        </CardBody>
      </Card>
    </div>
  );
}
