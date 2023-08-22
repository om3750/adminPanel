import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Table } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function UpdateTemplate() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            {/* ______________________----------------------first section--------------------------______________________ */}

            <Button
              size="lg"
              color="primary"
              onClick={() => navigate("/addtemplate")}
              className="m-2 btn"
            >
              Add New Page
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            {/* ______________________---------------------------------secound section----------------------------______________________ */}
            {/* <h4 className="card-title">Admin List</h4> */}
            <Button
              color="danger"
              onClick={() => navigate("/addtemplate")}
              className="m-2 btn"
            >
              Remove Page
            </Button>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="form-group">
                <label>Post Thumb</label>
                <input
                  type="file"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
              <div>
                Image
                {/* add Image here */}
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label>Select BG Type</label>
                <select className=" mb-3 form-control" name="app_id">
                  <option value="">--Select Application--</option>
                  <option value="">Crafty Art</option>
                </select>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label>Back Image</label>
                <input
                  type="file"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
              <div>
                Image
                {/* add Image here */}
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label>Gradient Angle</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label>Gradient Ratio</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="mt-5">Layers</h4>
            <div
              className="my-3"
              style={{
                height: "1px",
                backgroundColor: "grey",
                margin: "10px 0",
              }}
            ></div>

            {/* __________________________sticker component__________________________ */}
            <div>
              <div className="row">
                <div className="col-lg-1">
                  <div className="ms-2 mt-3 form-group">
                    <Button
                      color="danger"
                      onClick={() => navigate("/addtemplate")}
                      className="btn"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Width
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Height
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      X Pos
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Y Pos
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Rotation
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Opacity
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Type
                      {/* add Image here */}
                    </div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="type"
                    >
                      <option value="1">Colored</option>
                      <option value="2">White</option>
                      <option value="3">Shape</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Color
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Resize
                      {/* add Image here */}
                    </div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="resize"
                    >
                      <option value="1">Ratio</option>
                      <option value="2">Free</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Lock Type
                      {/* add Image here */}
                    </div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="lock_type"
                    >
                      <option value="1">No Lock</option>
                      <option value="2">Temp Lock</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ==================== */}

              <div className="row">
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Sticker Image
                      {/* add Image here */}
                    </div>
                    <input type="file" className=" mb-3 form-control" />
                    Image
                    {/* add image here */}
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Editable
                      {/* add Image here */}
                    </div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="status"
                    >
                      <option value="1">True</option>
                      <option value="0">False</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Editable Title
                      {/* add Image here */}
                    </div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="status"
                    >
                      <option value="0">Data from API</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Url
                      {/* add Image here */}
                    </div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="status"
                    >
                      <option value="1">True</option>
                      <option value="0">False</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* __________________________ text component__________________________ */}

            <div
              className="my-5"
              style={{
                height: "1px",
                backgroundColor: "black",
                margin: "10px 0",
              }}
            ></div>

            {/* __________________________ text component__________________________ */}
            <div>
              <div className="row">
                <div className="col-lg-1">
                  <div className=" mt-3 form-group">
                    <Button
                      color="danger"
                      onClick={() => navigate("/addtemplate")}
                      className="btn"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ps-2 form-group">
                    <div>
                      Text
                      {/* add Image here */}
                    </div>
                    <textarea type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <div>
                      Efect
                      {/* add Image here */}
                    </div>
                    <textarea type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <div>
                      Font Family
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Alignment
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Size
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
              </div>

              {/* ==================== */}

              <div className="row">
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Color
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Width
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Height
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      X Pos
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Y Pos
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Line Space
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Line Space Multiplier
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Word Space
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Curve
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Rotation
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Opacity
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        Editable
                        {/* add Image here */}
                      </div>
                      <select
                        className="form-control"
                        // value={data.status}
                        name="status"
                      >
                        <option value="1">True</option>
                        <option value="0">False</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="form-group">
                      <div>
                        Editable Title
                        {/* add Image here */}
                      </div>
                      <select
                        className="form-control"
                        // value={data.status}
                        name="status"
                      >
                        <option value="0">Data from API</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        Url
                        {/* add Image here */}
                      </div>
                      <select
                        className="form-control"
                        // value={data.status}
                        name="status"
                      >
                        <option value="1">True</option>
                        <option value="0">False</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================================ */}

            <div
              className="mt-5"
              style={{
                height: "1px",
                backgroundColor: "black",
                margin: "10px 0",
              }}
            ></div>

            {/* ================================================================ */}

            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle color="white">
                {/* You can replace this with your desired icon */}
                <Button color="success" className="btn">
                  Add
                </Button>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Sticker Layer</DropdownItem>
                <DropdownItem>Text Layer</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {/* ================================================================ */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
