import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import { useNavigate } from "react-router-dom";

export default function AddStickerCategory() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    stk_category_name: "",
    stk_category_thumb: "",
    sequence_number: "",
    status: "1",
  });
  // console.log('state',data);

  const HandleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${BaseURL}sticker/addstkcat`, data)
      .then((res) => {
        console.log("res", res);

        // localStorage.setItem("token", "done");
        // localStorage.setItem("token", res.data.token);
        // localStorage.setItem('user',res.data.token);
        // console.log(token);
        // handleClose();
        window.location.reload(false);
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
          <h4 className="card-title">Add Sticker Category</h4>
          <form>
            <div>
              <div className="form-group">
                <label>Sticker Category Name</label>
                <input
                  type="text"
                  className=" my-3 form-control"
                  name="stk_category_name"
                  placeholder="Category Name"
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
            <div className="form-group">
              <label>Sequence Number</label>
              <input
                type="text"
                className=" my-3 form-control"
                name="sequence_number"
                placeholder="Sequence Number"
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
                <option value="1">LIVE</option>
                <option value="0">NOT LIVE</option>
              </select>
            </div>

            <button onClick={HandleSubmit} className="my-3 btn btn-primary">Submit</button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
