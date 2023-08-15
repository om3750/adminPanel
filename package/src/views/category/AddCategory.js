import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";

export default function AddFonts() {
  // const [cat, setCat] = useState([]); // Provide an empty array as the initial value
const navigate = useNavigate();
const [isUploading, setIsUploading] = useState(false); // State for tracking uploading status

  const [data, setData] = useState({
    category_name: "",
    id_name: "",
    category_thumb: null,
    size: "",
    app_id: "",
    sequence_number: "",
    status: "1",
  });

  console.log("data", data);


  const HandleSubmit = () => {
    //  event.preventDefault();
    setIsUploading(true); // Start uploading, show spinner


    const formData = new FormData();

    // Append all form fields to the FormData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios
      .post(`${BaseURL}category/addCategory`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        setIsUploading(false); // Upload complete, hide spinner

        navigate("/category");
        // Only navigate when the API call is successful
      })
      .catch((error) => {
        console.error("error", error);
        setIsUploading(false); // Upload complete, hide spinner

      });
  };

  const handleFileChange = (e) => {
    // Set the actual file object when the input value changes
    setData({ ...data, category_thumb: e.target.files[0] });
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Add Category</h4>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Category Name</label>
                  <input
                    type="text"
                    className=" mb-3 form-control"
                    name="category_name"
                    onChange={(e) =>
                      setData({ ...data, category_name: e.target.value })
                    }
                    placeholder="Category Name"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label>Id Name</label>
                  <input
                    type="text"
                    className=" mb-3 form-control"
                    name="id_name"
                    onChange={(e) =>
                      setData({ ...data, id_name: e.target.value })
                    }
                    placeholder="Id Name"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Category Size</label>
              <input
                type="text"
                className=" mb-3 form-control"
                name="size"
                onChange={(e) => setData({ ...data, size: e.target.value })}
                placeholder="Enter category size"
              />
            </div>
            <div className="form-group">
              <label>Category Thumb</label>
              <input
                type="file"
                className="mb-3 form-control"
                name="category_thumb"
                onChange={handleFileChange} // Use the handleFileChange function
              />
            </div>

            <div className="form-group">
              <label>Application</label>

              <select
                className=" mb-3 form-control"
                name="app_id"
                onChange={(e) => setData({ ...data, app_id: e.target.value })}
              >
                <option value="">--Select Application--</option>
                <option value="">Crafty Art</option>
              </select>
            </div>

            <div className="form-group">
              <label>Sequence Number</label>
              <input
                type="text"
                className=" mb-3 form-control"
                name="sequence_number"
                onChange={(e) =>
                  setData({ ...data, sequence_number: e.target.value })
                }
                placeholder="Sequence Number"
              />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                className="form-control"
                name="status"
                onChange={(e) => setData({ ...data, status: e.target.value })}
                id=""
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
          )}
        </CardBody>
      </Card>
    </div>
  );
}
