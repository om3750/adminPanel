import React, { useState, useEffect } from "react";

import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";

export default function AddFonts() {
  const navigate = useNavigate();
  const [cat, setCat] = useState([]); // Provide an empty array as the initial value

  const [data, setData] = useState({
    thumb: "",
    path: "",
    status: "1",
  });

  const HandleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${BaseURL}font/addFont`, data)
      .then((res) => {
        // console.log("res", res);
        window.location.reload(false);
        navigate("/fonts");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Add Font</h4>
          <form>
            <div className="form-group">
              <label>Font Thumbs</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="thumb"
                onChange={(e) =>
                  setData({ ...data, thumb: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Font File</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="path"
                onChange={(e) =>
                  setData({ ...data, path: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                className="form-control"
                name="status"
                onChange={(e) =>
                  setData({ ...data, status: e.target.value })
                }
                id=""
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
