import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import { useNavigate, useLocation } from "react-router-dom";
import IPcalling from "../../urls/IPcalling";

export default function UpdateStickerItem() {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false); // State for tracking uploading status

  const { state } = useLocation();
  const [cat, setCat] = useState([]);

  const [data, setData] = useState({
    sticker_name: state.sticker_name,
    sticker_thumb: null,
    sticker_image: null,
    stk_cat_id: state.stk_cat_id,
    sticker_type: state.sticker_type,
    is_premium: state.is_premium,
    status: state.status,
  });

  // Move useEffect outside of the HandleSubmit function
  useEffect(() => {
    axios.get(`${BaseURL}sticker/showStk`).then((res) => {
      setCat(res.data.record);
    });
  }, []); // Empty dependency array to run the effect only once

  const HandleSubmit = (event) => {
    event.preventDefault();
    setIsUploading(true); // Start uploading, show spinner

    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios
      .post(`${BaseURL}sticker/updateitem/${state._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        setIsUploading(false); // Upload complete, hide spinner

        navigate("/stickerItem");
      })
      .catch((error) => {
        console.error(error);
        setIsUploading(false); // Upload complete, hide spinner
      });
  };

  const handleThumbChange = (e) => {
    // Set the actual file object when the input value changes
    setData({ ...data, sticker_thumb: e.target.files[0] });
  };
  const handleImageChange = (e) => {
    // Set the actual file object when the input value changes
    setData({ ...data, sticker_image: e.target.files[0] });
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Update Sticker Category</h4>
          <div className="form-group">
            <label>Sticker Category Name</label>
            <input
              type="text"
              className=" mb-3 form-control"
              name="sticker_name"
              placeholder="Category Name"
              value={data.sticker_name}
              onChange={(e) =>
                setData({ ...data, sticker_name: e.target.value })
              }
            />
          </div>

          <div className="mt-3 form-group">
            <div className="form-group">
              <label>Sticker Thumb</label>
              <input
                type="file"
                className=" mb-3 form-control"
                name="sticker_thumb"
                onChange={handleThumbChange}
              />
            </div>
            <div>
              <img
                src={`${IPcalling}${state.sticker_thumb}`}
                alt="image"
                width={"220px"}
              ></img>
            </div>
            <div className="mt-3 form-group">
              <label>Sticker Category Image</label>
              <input
                type="file"
                className=" mb-3 form-control"
                name="sticker_image"
                onChange={handleImageChange}
              />
            </div>
            <div>
              <img
                src={`${IPcalling}}${state.sticker_image}`}
                alt="image"
                width={"220px"}
              ></img>
            </div>
          </div>
          <div className="form-group">
            <label>Select Category</label>

            <select
              className=" mb-3 form-control"
              name="stk_cat_id"
              onChange={(e) => setData({ ...data, stk_cat_id: e.target.value })}
            >
              <option value="">--Select Category--</option>
              {Array.isArray(cat) && cat.length > 0 ? (
                cat.map((items) => (
                  <option key={items._id} value={items._id}>
                    {items.stk_category_name}
                  </option>
                ))
              ) : (
                <option value="">No categories found</option>
              )}
            </select>
          </div>

          <div className="form-group">
            <label>Sticker Type</label>

            <select
              className=" mb-3 form-control"
              onChange={(e) =>
                setData({ ...data, sticker_type: e.target.value })
              }
              name="sticker_type"
            >
              <option value="">--Select Type--</option>
              <option value="1">Colored</option>
              <option value="2">White</option>
              <option value="3">Shape</option>
            </select>
          </div>

          <div className="form-group">
            <label>Premium Item</label>

            <select
              className=" mb-3 form-control"
              onChange={(e) => setData({ ...data, is_premium: e.target.value })}
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
              name="status"
              id=""
              onChange={(e) => setData({ ...data, status: e.target.value })}
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
