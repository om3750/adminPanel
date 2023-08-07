import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseURL from '../../urls/BaseUrl'


export default function AddBackgroundItem() {
  const navigate = useNavigate();
  const [cat, setCat] = useState([]); // Provide an empty array as the initial value

  const [data, setData] = useState({
    bg_thumb: "",
    bg_image: "",
    bg_cat_id: "",
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
    axios
      .get(`${BaseURL}background/showallcat`)
      .then((res) => {
        setCat(res.data.record);
        // console.log("res", res.data.record);
      });
  }, []);

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Add Background</h4>
          <form>
            <div className="form-group">
              <label>Background Thumbs</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="bg_thumb"
                onChange={(e) => setData({ ...data, bg_thumb: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Category Images</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="bg_image"
                onChange={(e) => setData({ ...data, bg_image: e.target.value })}
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

            <button onClick={HandleSubmit} className="my-3 btn btn-primary">
              Submit
            </button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
