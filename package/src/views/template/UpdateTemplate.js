import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";
import { Multiselect } from "multiselect-react-dropdown";
import Select from "react-select";

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

  const relatedTagOption = {
    options: [
      { name: "relatedOption1", id: 1 },
      { name: "relatedOption2", id: 2 },
      { name: "relatedOption3", id: 3 },
      { name: "relatedOption4", id: 4 },
      { name: "relatedOption5", id: 5 },
    ],
  };
  const styleOption = {
    options: [
      { name: "styleOption1", id: 1 },
      { name: "styleOption2", id: 2 },
    ],
  };
  const ratioOption = {
    options: [
      { name: "ratioOption1", id: 1 },
      { name: "ratioOption2", id: 2 },
    ],
  };
  const interestOption = {
    options: [
      { name: "interestOption1", id: 1 },
      { name: "interestOption2", id: 2 },
    ],
  };

  // selectedBgOption

  const bgBgptions = [{ value: "", label: "No option yet" }];

  const handleBgChange = (selectedOption) => {
    // Handle the selected option
    console.log("Selected Option:", selectedOption);
  };

  // editableTitleOptions

  const editableTitleOptions = [{ value: "", label: "No option yet" }];

  const editableTitleChange = (selectedOption) => {
    // Handle the selected option
    console.log("Selected Option:", selectedOption);
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
          <div>
            {/* ______________________----------------------first section--------------------------______________________ */}

            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Category Thumb</label>
                  <div className="d-flex align-items-center">
                    <input
                      type="file"
                      className="my-3 form-control"
                      name="catimage"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label>Category Thumb</label>
                  <div className="d-flex align-items-center">
                    <input
                      type="file"
                      className="my-3 form-control"
                      name="catimage"
                    />
                    <Button className="btn ms-4 col-lg-3">Import Json</Button>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="col-lg-3">
              <div className="form-group">
                <label>Select BG Type</label>
                <Select
                  options={bgBgptions}
                  onChange={handleBgChange}
                  isSearchable={true}
                  placeholder="Select an option"
                />
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
                    <Select
                      options={editableTitleOptions}
                      onChange={editableTitleChange}
                      isSearchable={true}
                      placeholder="Select an option"
                    />
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
                  <div className="mt-3 form-group">
                    <Button
                      color="danger"
                      // onClick={() => navigate("/addtemplate")}
                      className="btn"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ps-2 form-group">
                    <label>Text</label>
                    <textarea type="text" className="mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Effect</label>
                    <textarea type="text" className="mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Font Family</label>
                    <input type="text" className="mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <label>Alignment</label>
                    <select className="form-control" name="alignment">
                      <option value="0">Left</option>
                      <option value="1">Center</option>
                      <option value="2">Right</option>
                      <option value="3">Justify</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <label>Size</label>
                    <input type="text" className="mb-3 form-control" />
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
                  <div className="col-lg-3">
                    <div className="form-group">
                      <div>
                        Editable Title
                        {/* add Image here */}
                      </div>
                      <Select
                        options={editableTitleOptions}
                        onChange={editableTitleChange}
                        isSearchable={true}
                        placeholder="Select an option"
                      />
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
            Image
            {/* ================================================================ */}
            <div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-group">
                    <div>
                      Post Name
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <div>
                      ID Name
                      {/* add Image here */}
                    </div>
                    <input
                      type="text"
                      disabled
                      className=" mb-3 form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Ratio
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Width
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Height
                      {/* add Image here */}
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
              </div>
              {/* ==================================== */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <div>
                      Description
                      {/* add Image here */}
                    </div>
                    <textarea
                      className="mb-6 form-control"
                      style={{
                        resize: "none",
                        overflowY: "scroll",
                        height: "100px",
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div>
                      Related Tags
                      {/* add Image here */}
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder=""
                      options={relatedTagOption.options} // Options to display in the dropdown
                      selectedValues={relatedTagOption.selectedValue} // Preselected value to persist in dropdown
                      // onSelect={onSelect} // Function will trigger on select event
                      // onRemove={onRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
              </div>
              {/* =============================== */}
              <div className="row mt-3">
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Special Keyword
                      {/* add Image here */}
                    </div>
                    <input
                      type="text"
                      placeholder="Add Special Keyword"
                      className=" mb-3 form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>Select Category {/* add Image here */}</div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="status"
                    >
                      <option value="">No option here</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Ratio
                      {/* add Image here */}
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder=""
                      options={ratioOption.options} // Options to display in the dropdown
                      selectedValues={ratioOption.selectedValue} // Preselected value to persist in dropdown
                      // onSelect={onSelect} // Function will trigger on select event
                      // onRemove={onRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
              </div>
              {/* ================ */}
              <div className="row mt-3">
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Style
                      {/* add Image here */}
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder=""
                      options={styleOption.options} // Options to display in the dropdown
                      selectedValues={styleOption.selectedValue} // Preselected value to persist in dropdown
                      // onSelect={onSelect} // Function will trigger on select event
                      // onRemove={onRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Select Interest
                      {/* add Image here */}
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder=""
                      options={interestOption.options} // Options to display in the dropdown
                      selectedValues={interestOption.selectedValue} // Preselected value to persist in dropdown
                      // onSelect={onSelect} // Function will trigger on select event
                      // onRemove={onRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>Select Language {/* add Image here */}</div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="status"
                    >
                      <option value="">No option here</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* --------------------------------------------- */}
              <div className="row mt-3">
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Special Keyword
                      {/* add Image here */}
                    </div>
                    <input
                      type="date"
                      className=" mb-3 form-control"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>Premium Item {/* add Image here */}</div>
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
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Status
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
              <Button color="primary" size="lg" className="m-3 btn">
                Submit
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
