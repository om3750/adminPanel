import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateBackgroundCategory() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isUploading, setIsUploading] = useState(false); // State for tracking uploading status

  const [data, setData] = useState({
    bg_category_name: state.bg_category_name,
    bg_category_thumb: null,
    sequence_number: state.sequence_number,
    status: "1",
  });
  // console.log('state',data);

  const HandleSubmit = (event) => {
    setIsUploading(true); // Start uploading, show spinner

    const formData = new FormData();

    // Append all form fields to the FormData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios
      .post(`${BaseURL}background/updateBgCat/${state._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        setIsUploading(false); // Upload failed, hide spinner

        navigate("/backgroundCategory");
      })
      .catch((error) => {
        setIsUploading(false); // Upload failed, hide spinner

        console.error(error);
      });
  };

  const handleFileChange = (e) => {
    // Set the actual file object when the input value changes
    setData({ ...data, bg_category_thumb: e.target.files[0] });
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Update Background Category</h4>
          <div>
            <div className="form-group">
              <label>Background Category Name</label>
              <input
                type="text"
                className=" my-3 form-control"
                name="bg_category_name"
                placeholder="Category Name"
                value={data.bg_category_name}
                onChange={(e) =>
                  setData({ ...data, bg_category_name: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <label>Background Category Thumb</label>
            <input
              type="file"
              className=" my-3 form-control"
              name="bg_category_thumb"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <img
              src={`http://192.168.29.222:8080/${state.bg_category_thumb}`}
              width={"220px"}
              alt="image"
            ></img>
          </div>
          <div className="form-group">
            <label>Sequence Number</label>
            <input
              type="text"
              className=" my-3 form-control"
              name="sequence_number"
              placeholder="Sequence Number"
              value={data.sequence_number}
              onChange={(e) =>
                setData({ ...data, sequence_number: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              className="form-control"
              name="status"
              id=""
              onChange={(e) => setData({ ...data, status: e.target.value })}
            >
              <option value="true">LIVE</option>
              <option value="false">NOT LIVE</option>
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
          )}{" "}
        </CardBody>
      </Card>
    </div>
  );
}
