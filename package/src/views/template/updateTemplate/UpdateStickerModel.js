import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Button } from "reactstrap";
import BaseURL from "../../../urls/BaseUrl";

export default function UpdateStickerModel() {
  // editableTitleOptions

  const [editableTitledatas, setEditableTitleDatas] = useState([]);
  const [selectedStickerEditableTitle, setSelectedStickerEditableTitle] =
    useState([]);
  const [selectedTextEditableTitle, setSelectedTextEditableTitle] = useState(
    []
  );
  const [editableTitleOptions, setEditableTitleOptions] = useState({
    options: [],
  });

  useEffect(() => {
    axios.get(`${BaseURL}editableMode/showEditableMode`).then((res) => {
      setEditableTitleDatas(res.data.record);

      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((editableTitledata) => ({
        label: editableTitledata.name,
        value: editableTitledata._id,
      }));
      setEditableTitleOptions({ options });
    });
  }, []);

  console.log("editableTitleOptions", editableTitleOptions.options);
  // const categoryOptions = [{ value: "", label: "No option yet" }];
  const editableStickerTitleChange = (selectedOption) => {
    // Handle the selected option
    setSelectedStickerEditableTitle(selectedOption.value);
  };
  console.log("selectedStickerEditableTitle", selectedStickerEditableTitle);
  const editableTextTitleChange = (selectedOption) => {
    // Handle the selected option
    setSelectedTextEditableTitle(selectedOption.value);
  };
  console.log("selectedTextEditableTitle", selectedTextEditableTitle);

  // const editableTitleOptions = [{ value: "", label: "No option yet" }];

  // const editableTitleChange = (selectedOption) => {
  //   // Handle the selected option
  //   console.log("Selected Option:", selectedOption);
  // };

  return (
    <div>
      {/* __________________________sticker component__________________________ */}
      <div className="row">
        <div className="col-lg-1">
          <div className="ms-2 mt-3 form-group">
            <Button
              color="danger"
              // onClick={() => navigate("/addtemplate")}
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
        <div className="col-lg-3">
          <div className="form-group">
            <div>
              Editable Title
              {/* add Image here */}
            </div>
            <Select
              options={editableTitleOptions.options}
              onChange={editableStickerTitleChange}
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
      <div
        className="my-5"
        style={{
          height: "1px",
          backgroundColor: "black",
          margin: "10px 0",
        }}
      ></div>
    </div>
  );
}
