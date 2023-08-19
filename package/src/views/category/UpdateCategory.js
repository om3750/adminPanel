import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";

export default function UpdateCategory() {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false); // State for tracking uploading status

  // const [cat, setCat] = useState([]); // Provide an empty array as the initial value
const {state} = useLocation();
console.log('state', state);
  const [data, setData] = useState({
    category_name: state.category_name,
    id_name: state.id_name,
    category_thumb: null,
    size: state.size,
    app_id: 1,
    sequence_number: state.sequence_number,
    status: state.sequence_number,
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
    .post(`${BaseURL}category/updateCategory/${state._id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log("res", res);
      setIsUploading(false); // Upload complete, hide spinner

      navigate("/category");

    })
    .catch((error) => {
      setIsUploading(false); // Upload complete, hide spinner
      console.error(error);
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
          <h4 className="card-title">Update Category</h4>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Category Name</label>
                  <input
                    type="text"
                    value={data.category_name}
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
                    value={data.id_name}
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
                value={data.size}
                onChange={(e) => setData({ ...data, size: e.target.value })}
                placeholder="Enter category size"
              />
            </div>
            <div className="form-group">
              <label>Category Thumb</label>
              <input
                type="file"
                className=" mb-3 form-control"
                name="category_thumb"
                onChange={handleFileChange}
              />
            </div>

            <div>
            <img src={`http://192.168.29.222:8080/${state.category_thumb}`} width={'220px'}  alt="image"></img>
            </div>

            <div className="form-group">
              <label>Application</label>

              <select
                className=" mb-3 form-control"
                name="app_id"
                value={data.app_id}
                onChange={(e) => setData({ ...data, app_id: e.target.value })}
              >
                <option value="">--Select Application--</option>
                <option value="1">Crafty Art</option>
              </select>
            </div>

            <div className="form-group">
              <label>Sequence Number</label>
              <input
                type="text"
                className=" mb-3 form-control"
                name="sequence_number"
                value={data.sequence_number}
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
