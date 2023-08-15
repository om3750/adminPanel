import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";

export default function AddStickerItem() {
  const navigate = useNavigate();
  const [cat, setCat] = useState([]); // Provide an empty array as the initial value

  const [data, setData] = useState({
    sticker_thumb: null,
    sticker_image: null,
    sticker_type: "",
    bg_type: "",
    is_premium: "1",
    status: "1",
  });

  const HandleSubmit = (event) => {
    const formData = new FormData();

    // Append all form fields to the FormData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios
      .post(`${BaseURL}sticker/addstkcat`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        navigate("/stickerCategory");
      })
      .catch((error) => {
        console.error(error);
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

  useEffect(() => {
    axios.get(`${BaseURL}sticker/showStk`).then((res) => {
      setCat(res.data.record);
      // console.log("res", res.data.record);
    });
  }, []);

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Add Sticker</h4>
          <form
           
          >
            <div className="form-group">
              <label>Sticker Thumbs</label>
              <input
                type="file"
                className=" mb-3 form-control"
                name="sticker_thumb"
                onChange={handleThumbChange}              />
            </div>
            <div className="form-group">
              <label>Category Images</label>
              <input
                type="file"
                className=" mb-3 form-control"
                name="sticker_image"
                onChange={handleImageChange}
              />
            </div>

            <div className="form-group">
              <label>Select Category</label>

              <select
                className=" mb-3 form-control"
                name="sticker_type"
                onChange={(e) =>
                  setData({ ...data, sticker_type: e.target.value })
                }
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
                onChange={(e) => setData({ ...data, bg_type: e.target.value })}
                name="bg_type"
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
                <option value="true">LIVE</option>
                <option value="false">NOT LIVE</option>
              </select>
            </div>

            <button  onClick={HandleSubmit} className="my-3 btn btn-primary">Submit</button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
