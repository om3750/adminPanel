import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";

export default function AddFonts() {
  const navigate = useNavigate();

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
        <h4 className="card-title">Add Font</h4>
                  <form
                    action="/category/add_category"
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <div className="form-group">
                      <label>Font Thumbs</label>
                      <input
                        type="file"
                        className=" my-3 form-control"
                        name="catimage"
                      />
                    </div>
                    <div className="form-group">
                      <label>Font File</label>
                      <input
                        type="file"
                        className=" my-3 form-control"
                        name="catimage"
                      />
                    </div>
                    <div className="form-group">
                      <label>Status</label>
                      <select className="form-control" name="status" id="">
                        <option value="true">LIVE</option>
                        <option value="false">NOT LIVE</option>
                      </select>
                    </div>

                    <button className="my-3 btn btn-primary">Submit</button>
                  </form>
        </CardBody>
      </Card>
    </div>
  );
}
