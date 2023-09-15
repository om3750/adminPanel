import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import BaseURL from "../../../urls/BaseUrl";
import IPcalling from "../../../urls/IPcalling";
import { jsonData } from "../../../Constant/constant";

export default function UpdateStickerModel({handleWidthHeightChange, allLayers}) {

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


  // console.log("layers", layers);
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
          if (layer.layerType === 1) {
          return (
          
            <div key={index}>
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
                    <input
                      type="text"
                      value={layer.width}
                      onChange={(e) =>
                        handleWidthHeightChange(index, "width", e.target.value)
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
                        handleWidthHeightChange(index, "height", e.target.value)
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
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Type
                      {/* add Image here */}
                    </div>
                    <select
                      className="form-control"
                      value={layer.type}
                      onChange={(e) =>
                        handleWidthHeightChange(index, "type", e.target.value)
                      }
                      name="type"
                    >
                      <option value="1">Colored</option>
                      <option value="2">White</option>
                      <option value="0">Shape</option>
                    </select>
                  </div>
                </div>
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
                        handleWidthHeightChange(index, "color", e.target.value)
                      }
                      className=" mb-3 form-control"
                    />
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
                      value={layer.resizeType}
                      onChange={(e) =>
                        handleWidthHeightChange(
                          index,
                          "resizeType",
                          e.target.value
                        )
                      }
                      name="resize"
                    >
                      <option value="0">Default</option>
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
                      value={layer.lockType}
                      onChange={(e) =>
                        handleWidthHeightChange(
                          index,
                          "lockType",
                          e.target.value
                        )
                      }
                      name="lock_type"
                    >
                      <option value="1">No Lock</option>
                      <option value="0">Temp Lock</option>
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
                    <img
                            style={{ height: "30%", width: "30%" }}
                            src={`${IPcalling}${layer.image}`}
                            // src={`http://192.168.0.107:8080/${items.category_thumb}`}
                            alt="Logo"
                          />
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
                      value={layer.isEditable}
                      onChange={(e) =>
                        handleWidthHeightChange(
                          index,
                          "isEditable",
                          e.target.value
                        )
                      }
                      name="isEditable"
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
                      value={layer.isUrl}
                      onChange={(e) =>
                        handleWidthHeightChange(index, "isUrl", e.target.value)
                      }
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
        return null;
      })}
    </>
  );
}
