import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import { useNavigate, useLocation } from "react-router-dom";

export default function UpdateStickerItem() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [data, setData] = useState({
    stk_category_name: state.stk_category_name,
    // stk_category_thumb: "",
    sequence_number: state.sequence_number,
    status: state.status,
  });
  // console.log('state',data);

  const HandleSubmit = (event) => {
    const formData = new FormData();

    // Append all form fields to the FormData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios
      .post(`${BaseURL}sticker/updateitem${state._id}`, formData, {
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
    setData({ ...data, stk_category_thumb: e.target.files[0] });
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Update Sticker Category</h4>
            <div>
              <div className="form-group">
                <label>Sticker Category Name</label>
                <input
                  type="text"
                  className=" my-3 form-control"
                  name="stk_category_name"
                  placeholder="Category Name"
                  value={data.stk_category_name}
                  onChange={(e) =>
                    setData({ ...data, stk_category_name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label>Sticker Category Thumb</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="stk_category_thumb"
                onChange={handleThumbChange}
              />
            </div>
            <div>
              <img
                src={`http://192.168.29.222:8080/${state.stk_category_thumb}`}
                alt="image" width={'220px'} 
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

            <button onClick={HandleSubmit} className="my-3 btn btn-primary">
              Submit
            </button>
        </CardBody>
      </Card>
    </div>
  );
}
