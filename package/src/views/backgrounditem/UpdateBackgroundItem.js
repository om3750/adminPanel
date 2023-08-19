import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseURL from '../../urls/BaseUrl'
import { Card, CardBody } from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";


export default function UpdateBackgroundItem() {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false); // State for tracking uploading status
  const { state } = useLocation();
  console.log('state',state)

  const [cat, setCat] = useState([]); // Provide an empty array as the initial value

  const [data, setData] = useState({
    bg_thumb: null,
    bg_image: null,
    bg_cat_id: "",
    bg_type: "",
    is_premium: "1",
    status: "1",
  });

  const HandleSubmit = (event) => {
    event.preventDefault();
    setIsUploading(true); // Start uploading, show spinner

    const formData = new FormData();

    // Append all form fields to the FormData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios
      .post(`${BaseURL}background/updateItem/${state._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        setIsUploading(false); // Upload complete, hide spinner

        navigate("/backgroundItem");
      })
      .catch((error) => {
        console.error(error);
        setIsUploading(false); // Upload failed, hide spinner

      });
  };
  useEffect(() => {
    axios
      .get(`${BaseURL}background/showallcat`)
      .then((res) => {
        setCat(res.data.record);
        // console.log("res", res.data.record);
      });
  }, []);

  const handleThumbChange = (e) => {
    // Set the actual file object when the input value changes
    setData({ ...data, bg_thumb: e.target.files[0] });
  };
  const handleImageChange = (e) => {
    // Set the actual file object when the input value changes
    setData({ ...data, bg_image: e.target.files[0] });
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Update Background</h4>
            <div className="form-group">
              <label>Background Thumbs</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="bg_thumb"
                onChange={handleThumbChange} // Use the handleFileChange function
              />
            </div>
            <div className="form-group">
              <label>Category Images</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="bg_image"
                onChange={handleImageChange} // Use the handleFileChange function
              />
            </div>

            <div className="form-group">
              <label>Select Category</label>

              <select
                className=" my-3 form-control"
                onChange={(e) =>
                  setData({ ...data, bg_cat_id: e.target.value })
                }
                name="bg_cat_id"
              >
                <option value="">--Select Category--</option>
                {Array.isArray(cat) && cat.length > 0 ? (
                  cat.map((items) => (
                    <option key={items._id} value={items._id}>
                      {items.bg_category_name}
                    </option>
                  ))
                ) : (
                  <option value="">No categories found</option>
                )}
              </select>
            </div>
            <div className="form-group">
              <label>Background Type</label>

              <select
                className=" my-3 form-control"
                onChange={(e) => setData({ ...data, bg_type: e.target.value })}
                name="bg_type"
              >
                <option value="">--Select Category--</option>
                <option value="1">Image</option>
                <option value="2">Gradient</option>
                <option value="3">Mix</option>
                <option value="4">Big</option>
                <option value="5">Contrast</option>
              </select>
            </div>

            <div className="form-group">
              <label>Premium Item</label>

              <select
                className=" my-3 form-control"
                onChange={(e) =>
                  setData({ ...data, is_premium: e.target.value })
                }
                name="is_premium"
              >
                <option value="0">FALSE</option>
                <option value="1">TRUE</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                className="form-control"
                onChange={(e) => setData({ ...data, status: e.target.value })}
                name="status"
                id=""
              >
                <option value="1">LIVE</option>
                <option value="0">NOT LIVE</option>
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
