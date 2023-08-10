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
    event.preventDefault();
    axios
      .post(`${BaseURL}sticker/updateitem/${state._id}`, data)
      .then((res) => {
        console.log("res", res);
        // window.location.reload(false);
        navigate("/stickerCategory");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Update Sticker Category</h4>
          <form>
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
                onChange={(e) =>
                  setData({ ...data, stk_category_thumb: e.target.value })
                }
              />
            </div>
            <div>
              <img
                src={`http://192.168.29.222:8080/${state.stk_category_thumb}`}
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

            <button onClick={HandleSubmit} className="my-3 btn btn-primary">
              Submit
            </button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}