import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";

export default function UpdateFont() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isUploading, setIsUploading] = useState(false); // State for tracking uploading status

  console.log("state", state);

  const [data, setData] = useState({
    name: state.name,
    thumb: null,
    path: null,
    status: state.status,
  });

  const HandleSubmit = (event) => {
    // event.preventDefault();
    setIsUploading(true); // Start uploading, show spinner

    const formData = new FormData();

    // Append all form fields to the FormData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios
      .post(`${BaseURL}font/updateFont/${state._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        setIsUploading(false); // Upload complete, hide spinner
        navigate("/fonts");
      })
      .catch((error) => {
        setIsUploading(false); // Upload failed, hide spinner
        console.error(error);
      });
  };
  const handleThumbChange = (e) => {
    // Set the actual file object when the input value changes
    setData({ ...data, thumb: e.target.files[0] });
  };
  const handlePathChange = (e) => {
    // Set the actual file object when the input value changes
    setData({ ...data, path: e.target.files[0] });
  };
  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Update Font</h4>
          <div>
            <div className="form-group">
              <label>Font Name</label>
              <input
                type="text"
                className="my-3 form-control"
                name="name"
                value={data.name} // Make sure state.name has the correct initial value
                placeholder="Font Name"
                onChange={
                  (e) => setData({ ...data, name: e.target.value }) // Check if setData is updating the state properly
                }
              />
            </div>
            <div className="form-group">
              <label>Font Thumbs</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="thumb"
                onChange={handleThumbChange}
              />
            </div>
            <div className="my-3">
              <img
                src={`http://192.168.29.222:8080/${state.thumb}`}
                width={"220px"}
                alt="image"
              ></img>
            </div>
            <div className="form-group">
              <label>Font File</label>
              <input
                type="file"
                className=" mt-3 form-control"
                name="path"
                onChange={handlePathChange}
              />
              {state.path}
            </div>
            <div className="mt-3 form-group">
              <label>Status</label>
              <select
                className="form-control"
                // value={data.status}
                name="status"
                onChange={(e) => setData({ ...data, status: e.target.value })}
              >
                <option value="1">ACTIVE</option>
                <option value="0">DISABLE</option>
              </select>
            </div>

            {isUploading ? (
              <div className="text-center mt-3">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <button onClick={HandleSubmit} className="my-3 btn btn-primary">
                Submit
              </button>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
