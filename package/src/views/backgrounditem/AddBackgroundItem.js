import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";

export default function AddBackgroundItem() {
  const navigate = useNavigate();

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Add Background</h4>
          <form
            action="/category/add_category"
            method="post"
            enctype="multipart/form-data"
          >
            <div className="form-group">
              <label>Background Thumbs</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="catimage"
              />
            </div>
            <div className="form-group">
              <label>Category Images</label>
              <input
                type="file"
                className=" my-3 form-control"
                name="catimage"
              />
            </div>

            <div className="form-group">
              <label>Select Category</label>
              {/* <% var application=["Crafty Art"] %> */}

              <select className=" my-3 form-control" name="application">
                <option value="">--Select Category--</option>
                {/* <% for(var i=0; i<application.length; i++){ %>
                                                        <option value="<%= application[i] %>">
                                                            <%= application[i] %>
                                                        </option>
                                                        <% } %> */}
              </select>
            </div>
            <div className="form-group">
              <label>Background Type</label>
              {/* <% var application=["Crafty Art"] %> */}

              <select className=" my-3 form-control" name="application">
                <option value="">Image</option>
                {/* <% for(var i=0; i<application.length; i++){ %>
                                                        <option value="<%= application[i] %>">
                                                            <%= application[i] %>
                                                        </option>
                                                        <% } %> */}
              </select>
            </div>

            <div className="form-group">
              <label>Premium Item</label>
              {/* <% var application=["Crafty Art"] %> */}

              <select className=" my-3 form-control" name="application">
                <option value="">FALSE</option>
                <option value="">TRUE</option>
                {/* <% for(var i=0; i<application.length; i++){ %>
                                                        <option value="<%= application[i] %>">
                                                            <%= application[i] %>
                                                        </option>
                                                        <% } %> */}
              </select>
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
