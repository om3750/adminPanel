import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function importJson() {

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
        <h4 className="card-title">Import Json</h4>
        <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Category Thumb</label>
                          <input
                            type="file"
                            className=" my-3 form-control"
                            name="catimage"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Category Thumb</label>
                          <input
                            type="file"
                            className=" my-3 form-control"
                            name="catimage"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="form-group">
                          <label>Select Application</label>
                          <select
                            className=" my-3 form-control"
                            name="application"
                          >
                            <option value="">--Select Application--</option>
                            {/* <% for(var i=0; i<application.length; i++){ %>
                                                        <option value="<%= application[i] %>">
                                                            <%= application[i] %>
                                                        </option>
                                                        <% } %> */}
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-3">
                        <div className="form-group">
                          <label>Select Category</label>
                          <select
                            className=" my-3 form-control"
                            name="application"
                          >
                            <option value=""></option>
                            {/* <% for(var i=0; i<application.length; i++){ %>
                                                        <option value="<%= application[i] %>">
                                                            <%= application[i] %>
                                                        </option>
                                                        <% } %> */}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <label>Premium Item</label>
                          <select
                            className=" my-3 form-control"
                            name="status"
                            id=""
                          >
                            <option value="true">TRUE</option>
                            <option value="false">FALSE</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <label>Status</label>
                          <select
                            className=" my-3 form-control"
                            name="status"
                            id=""
                          >
                            <option value="true">LIVE</option>
                            <option value="false">NOT LIVE</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button className="my-3 btn btn-primary">Submit</button>
                  </form>
        </CardBody>
      </Card>
    </div>
  );
}
