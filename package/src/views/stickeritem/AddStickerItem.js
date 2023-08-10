import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";

export default function AddStickerItem() {
  const navigate = useNavigate();
  const [cat, setCat] = useState([]); // Provide an empty array as the initial value

  const [data, setData] = useState({
    sticker_thumb: "",
    sticker_image: "",
    sticker_type: "",
    bg_type: "",
    is_premium: "1",
    status: "1",
  });

  const HandleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${BaseURL}background/addbgitem`, data)
      .then((res) => {
        console.log("res", res);
        window.location.reload(false);
        navigate("/backgroundCategory");
      })
      .catch((error) => {
        console.error(error);
      });
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
                onChange={(e) => setData({ ...data, sticker_thumb: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Category Images</label>
              <input
                type="file"
                className=" mb-3 form-control"
                name="sticker_image"
                onChange={(e) => setData({ ...data, sticker_image: e.target.value })}
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
