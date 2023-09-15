import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Button } from "reactstrap";
import { useLocation } from "react-router-dom";
import BaseURL from "../../../urls/BaseUrl";
import IPcalling from "../../../urls/IPcalling";
import { jsonData } from "../../../Constant/constant";

export default function UpdateTextModel({handleWidthHeightChange,allLayers }) {

  const { state } = useLocation();
  // console.log("state", `${IPcalling}${state.fab_designs}`);


  // const [allLayers, setAllLayers] = useState([]);

  // useEffect(() => {
  //   // Fetch JSON data from the API endpoint
  //   axios
  //     .get("http://192.168.29.222:8080/uploadedFiles/json_File/1694582664549_521ed0e5da8f621f.json")
  //     .then((res) => {
  //       setAllLayers(res.data);
  //       console.log('res.data',res.data); // Set the fetched data to the layers state
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching JSON data: ", error);
  //     });
  // }, []);

    console.log("layers", allLayers);

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
  console.log("selectedTextEditableTitle", jsonData);

  // const editableTitleOptions = [{ value: "", label: "No option yet" }];

  // const editableTitleChange = (selectedOption) => {
  //   // Handle the selected option
  //   console.log("Selected Option:", selectedOption);
  // };

  // const handleWidthHeightChange = (index, field, value) => {
  //   if (index >= 0 && index < allLayers[0].layers.length) {
  //     const updatedLayers = [...allLayers];
  //     updatedLayers[0].layers[index][field] = value;
  //     setAllLayers(updatedLayers, () => {
  //       console.log('updatedLayers',updatedLayers); // Use the updatedLayers variable here
  //     }); 
  //   } else {
  //     console.error("Invalid index");
  //   }
  // };

  return (
    <>
       {allLayers.length > 0 &&
        allLayers[0].layers.map((layer, index) => {
          if (layer.layerType === 2) {
            return (
            <div key={index}>
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
                      <textarea
                        type="text"
                        style={{
                          resize: "none",
                          overflowY: "auto",
                          height: "75px",
                        }}
                        value={layer.text}
                        onChange={(e) =>
                          handleWidthHeightChange(index, "text", e.target.value)
                        }
                        className="mb-3 form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="form-group">
                      <label>Effect</label>
                      <textarea
                        type="text"
                        style={{
                          resize: "none",
                          overflowY: "auto",
                          height: "75px",
                        }}
                        className="mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <label>Font Family</label>
                      <input
                        type="text"
                        value={layer.font}
                        onChange={(e) =>
                          handleWidthHeightChange(index, "font", e.target.value)
                        }
                        className="mb-3 form-control"
                      />
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
                      <input
                        type="text"
                        value={layer.size}
                        onChange={(e) =>
                          handleWidthHeightChange(index, "size", e.target.value)
                        }
                        className="mb-3 form-control"
                      />
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
                      <input
                        type="text"
                        value={layer.color}
                        onChange={(e) =>
                          handleWidthHeightChange(
                            index,
                            "color",
                            e.target.value
                          )
                        }
                        className=" mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        Width
                        {/* add Image here */}
                      </div>
                      <input
                        type="text"
                        value={layer.width}
                        onChange={(e) =>
                          handleWidthHeightChange(
                            index,
                            "width",
                            e.target.value
                          )
                        }
                        className=" mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        Height
                        {/* add Image here */}
                      </div>
                      <input
                        type="text"
                        value={layer.height}
                        onChange={(e) =>
                          handleWidthHeightChange(
                            index,
                            "height",
                            e.target.value
                          )
                        }
                        className=" mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        X Pos
                        {/* add Image here */}
                      </div>
                      <input
                        type="text"
                        value={layer.left}
                        onChange={(e) =>
                          handleWidthHeightChange(index, "left", e.target.value)
                        }
                        className=" mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        Y Pos
                        {/* add Image here */}
                      </div>
                      <input
                        type="text"
                        value={layer.top}
                        onChange={(e) =>
                          handleWidthHeightChange(index, "top", e.target.value)
                        }
                        className=" mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        Line Space
                        {/* add Image here */}
                      </div>
                      <input
                        type="text"
                        value={layer.spacing.line}
                        onChange={(e) =>
                          handleWidthHeightChange(
                            index,
                            "spacing.line",
                            e.target.value
                          )
                        }
                        className="mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="form-group">
                      <div>
                        Line Space Multiplier
                        {/* add Image here */}
                      </div>
                      <input
                        type="text"
                        value={layer.spacing.lineMultiplier}
                        onChange={(e) =>
                          handleWidthHeightChange(
                            index,
                            "spacing.lineMultiplier",
                            e.target.value
                          )
                        }
                        className=" mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        Word Space
                        {/* add Image here */}
                      </div>
                      <input
                        type="text"
                        value={layer.spacing.letter}
                        onChange={(e) =>
                          handleWidthHeightChange(
                            index,
                            "spacing.letter",
                            e.target.value
                          )
                        }
                        className=" mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        Curve
                        {/* add Image here */}
                      </div>
                      <input
                        type="text"
                        value={layer.curve}
                        onChange={(e) =>
                          handleWidthHeightChange(
                            index,
                            "curve",
                            e.target.value
                          )
                        }
                        className=" mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        Rotation
                        {/* add Image here */}
                      </div>
                      <input
                        type="text"
                        value={layer.rotation}
                        onChange={(e) =>
                          handleWidthHeightChange(
                            index,
                            "rotation",
                            e.target.value
                          )
                        }
                        className=" mb-3 form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-1">
                    <div className="form-group">
                      <div>
                        Opacity
                        {/* add Image here */}
                      </div>
                      <input
                        type="text"
                        value={layer.opacity}
                        onChange={(e) =>
                          handleWidthHeightChange(
                            index,
                            "opacity",
                            e.target.value
                          )
                        }
                        className=" mb-3 form-control"
                      />
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
                          value={layer.isEditable}
                          onChange={(e) =>
                            handleWidthHeightChange(
                              index,
                              "isEditable",
                              e.target.value
                            )
                          }
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
                          onChange={editableTextTitleChange}
                          isSearchable={true}
                          value={layer.editableTitle}
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
                          value={layer.isUrl}
                          onChange={(e) =>
                            handleWidthHeightChange(
                              index,
                              "isUrl",
                              e.target.value
                            )
                          }
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
            </div>
         );
        }
        return null;
      })}
  </>
);
}