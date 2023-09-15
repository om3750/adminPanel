import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import Select from "react-select";

import {
  Button,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import BaseURL from "../../../urls/BaseUrl";
import UpdateStickerModel from "./UpdateStickerModel";
import UpdateTextModel from "./UpdateTextModel";
import { useLocation, useNavigate } from "react-router-dom";
import IPcalling from "../../../urls/IPcalling";

export default function TemplateInfo() {
  const HandleSubmit = (event) => {
    // event.preventDefault();

    const formData = new FormData();

    // Append all form fields to the FormData
    for (const key in finalData) {
      if (key === "designs") {
        // Convert the "designs" object to a JSON string
        formData.append(key, JSON.stringify(finalData[key]));
      } else {
        formData.append(key, finalData[key]);
      }
    }

    axios
      .post(`${BaseURL}importJson/updateJson/${state?._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        navigate("/template");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const { state } = useLocation();
  console.log("state", state);
  const [allLayers, setAllLayers] = useState({});

  // http://192.168.29.222:8080/uploadedFiles/json_File/1694503739616_030858a73887dc7f.json
  // http://192.168.29.222:8080/uploadedFiles/json_File/1694582664549_521ed0e5da8f621f.json

  useEffect(() => {
    // Fetch JSON data from the API endpoint
    axios
      // .get(`http://192.168.29.222:8080/uploadedFiles/json_File/1694582664549_521ed0e5da8f621f.json`)
      .get(`${IPcalling}${state?.designs}`)
      .then((res) => {
        setAllLayers(res.data);
        setFinalData({
          ...finalData,
          designs: JSON.par(res.data),
        });
        
        console.log("res.data", res.data); // Set the fetched data to the layers state
      })
      .catch((error) => {
        console.error("Error fetching JSON data: ", error);
      });
  }, []);

  console.log("allLayers", allLayers);

  const handleWidthHeightChange = (index, field, value) => {
    if (index >= 0 && index < allLayers[0].layers.length) {
      const updatedLayers = [...allLayers];
      updatedLayers[0].layers[index][field] = value;
      setAllLayers(updatedLayers, () => {
        console.log("updatedLayers", updatedLayers); // Use the updatedLayers variable here
      });
      setFinalData({
        ...finalData,
        designs: allLayers,
      });
    } else {
      console.error("Invalid index");
    }
  };

  const [finalData, setFinalData] = useState({
    designs: {},
    post_name: state?.post_name,
    id_name: state?.id_name,
    width: state?.width,
    height: state?.height,
    description: state?.description,
    related_tags: state?.related_tags,
    special_keywords: state?.special_keywords,
    h2_tag: state?.h2_tag,
    ratio: state?.ratio,
    category_id: state?.category_id,
    sub_cat_id: state?.sub_cat_id,
    style_id: state?.style_id,
    interest_id: state?.interest_id,
    lang_id: state?.lang_id,
    is_premium: state?.is_premium,
    status: state?.status,
  });

  console.log("finaldata", finalData);

  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // relatedTagOption

  // const [relatedTagdatas, setRelatedTagDatas] = useState([]);
  const [relatedTagOption, setRelatedTagOption] = useState({
    options: [],
    selectedValue: [],
  });

  const [selectedTag, setSelectedTag] = useState({});

  useEffect(() => {
    axios.get(`${BaseURL}searchTags/showSearchTag`).then((res) => {
      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((tagData) => ({
        name: tagData.name,
        id: tagData._id,
      }));

      // Iterate through options and compare with id_name in finalData

      let selectedValue = [];
      options.forEach((item) => {
        console.log("item.related_tags", finalData.related_tags);
        console.log("item.id", item.id);
        if (finalData.related_tags?.includes(item.id)) {
          selectedValue.push(item);
          console.log("selectedValue", selectedValue);
        }
      });
      setSelectedTag(selectedValue);
      console.log("selectedValue", selectedValue);

      // setRelatedTagDatas(tagData);
      setRelatedTagOption({ options });
    });
  }, []);

  console.log("relatedTagOption", relatedTagOption.options);

  const handleTagSelect = (selectedItems) => {
    setFinalData({
      ...finalData,
      related_tags: selectedItems?.map((item) => item?.id),
    });
  };
  const handleTagRemove = (removedItem) => {
    setFinalData({
      ...finalData,
      related_tags: removedItem?.map((item) => item?.id),
    });
  };

  // Now you can use the relatedTagOption in your JSX

  // styleOption

  const [styleOption, setStyleOption] = useState({
    options: [],
    selectedValue: [],
  });
  const [selectedStyle, setSelectedStyle] = useState({});

  useEffect(() => {
    axios.get(`${BaseURL}style/showStyle`).then((res) => {
      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((styleData) => ({
        name: styleData.name,
        id: styleData._id,
      }));

      let selectedValue = [];
      options.forEach((item) => {
        console.log("item.related_tags", finalData.style_id);
        console.log("item.id", item.id);
        if (finalData.style_id?.includes(item.id)) {
          selectedValue.push(item);
          console.log("selectedValue", selectedValue);
        }
      });
      setSelectedStyle(selectedValue);
      console.log("selectedValue", selectedValue);

      setStyleOption({ options });
    });
  }, []);

  const handleStyleSelect = (selectedItems) => {
    setFinalData({
      ...finalData,
      style_id: selectedItems?.map((item) => item?.id),
    });
  };

  const handleStyleRemove = (removedItem) => {
    setFinalData({
      ...finalData,
      style_id: removedItem?.map((item) => item?.id),
    });
  };

  // const styleOption = {
  //   options: [
  //     { name: "styleOption1", id: 1 },
  //     { name: "styleOption2", id: 2 },
  //   ],
  // };

  // subcategoryOption

  const [subcategoryOption, setSubcategoryOption] = useState({
    options: [],
    selectedValue: [],
  });

  const [selectedSubCat, setSelectedSubCat] = useState({});

  useEffect(() => {
    axios.get(`${BaseURL}subCat/showSubCat`).then((res) => {
      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((subcategoryData) => ({
        name: subcategoryData.name,
        id: subcategoryData._id,
      }));

      let selectedValue = [];
      options.forEach((item) => {
        console.log("item.related_tags", finalData.sub_cat_id);
        console.log("item.id", item.id);
        if (finalData.sub_cat_id?.includes(item.id)) {
          selectedValue.push(item);
          console.log("selectedValue", selectedValue);
        }
      });
      setSelectedSubCat(selectedValue);
      console.log("setSelectedSubCat", setSelectedSubCat);

      setSubcategoryOption({ options });
    });
  }, []);

  const handleSubcategorySelect = (selectedItems) => {
    setFinalData({
      ...finalData,
      sub_cat_id: selectedItems?.map((item) => item?.id),
    });
  };

  const handleSubcategoryRemove = (removedItem) => {
    setFinalData({
      ...finalData,
      sub_cat_id: removedItem?.map((item) => item?.id),
    });
  };

  // interestOption

  const [interestOption, setInterestOption] = useState({
    options: [],
    selectedValue: [],
  });

  const [selectedInterest, setSelectedInterest] = useState({});

  useEffect(() => {
    axios.get(`${BaseURL}interest/showInterest`).then((res) => {
      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((interestData) => ({
        name: interestData.name,
        id: interestData._id,
      }));

      let selectedValue = [];
      options.forEach((item) => {
        if (finalData.interest_id?.includes(item.id)) {
          selectedValue.push(item);
        }
      });
      setSelectedInterest(selectedValue);

      setInterestOption({ options });
    });
  }, []);

  const handleInterestSelect = (selectedItems) => {
    setFinalData({
      ...finalData,
      interest_id: selectedItems?.map((item) => item?.id),
    });
  };

  const handleInterestRemove = (removedItem) => {
    setFinalData({
      ...finalData,
      interest_id: removedItem?.map((item) => item?.id),
    });
  };

  // const interestOption = {
  //   options: [
  //     { name: "interestOption1", id: 1 },
  //     { name: "interestOption2", id: 2 },
  //   ],
  // };

  // specialKeywordOptions

  // const [specialKeyworddatas, setSpecialKeywordDatas] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState([]);
  const [specialKeywordOption, setspecialKeywordOption] = useState({
    options: [],
    selectedValue: [],
  });

  useEffect(() => {
    axios.get(`${BaseURL}specialKeyword/showSpecialKeyword`).then((res) => {
      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((keywordData) => ({
        name: keywordData.name,
        id: keywordData._id,
      }));

      let selectedValue = [];
      options.forEach((item) => {
        console.log("item.special_keywords", finalData.special_keywords);
        console.log("item.id", item.id);
        if (finalData.special_keywords?.includes(item.id)) {
          selectedValue.push(item);
          console.log("selectedValue", selectedValue);
        }
      });
      setSelectedKeyword(selectedValue);
      console.log("selectedValue", selectedValue);

      setspecialKeywordOption({ options });
    });
  }, []);

  const handleKeywordSelect = (selectedItems) => {
    // setSelectedKeyword(selectedItems?.map((item) => item?.id));
    setFinalData({
      ...finalData,
      special_keywords: selectedItems?.map((item) => item?.id),
    });
  };

  const handleKeywordRemove = (removedItem) => {
    setFinalData({
      ...finalData,
      special_keywords: removedItem?.map((item) => item?.id),
    });
  };

  // ****************************************
  console.log("selectedKeywords", selectedKeyword);
  // ****************************************

  // const specialKeywordOptions = {
  //   options: [
  //     { name: "interestOption1", id: 1 },
  //     { name: "interestOption2", id: 2 },
  //   ],
  // };

  // ===========================================select option==========================================

  // selectedBgOption

  const bgBgptions = [
    { value: "", label: "Select Option" },
    { value: "1", label: "Image" },
    { value: "2", label: "Texture" },
    { value: "3", label: "Colored" },
    { value: "4", label: "Linear" },
    { value: "5", label: "Redial" },
  ];

  const handleBgChange = (selectedOption) => {
    // Handle the selected option
    console.log("Selected Option:", selectedOption.value);
  };

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

  // categoryOptions

  const [categoryOptions, setCategoryOptions] = useState({
    options: [],
    selectedValue: [],
  });

  const [selectedCat, setSelectedCat] = useState({});

  useEffect(() => {
    axios.get(`${BaseURL}category/showCategory`).then((res) => {
      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((categoryData) => ({
        label: categoryData.category_name,
        value: categoryData._id,
      }));

      let selectedValue = [];
      options.forEach((item) => {
        console.log("item.related_tags", finalData.category_id);
        console.log("item.id", item.id);
        if (finalData.category_id?.includes(item.value)) {
          selectedValue.push(item);
          console.log("selectedValuerr", selectedValue);
        }
      });
      setSelectedCat(selectedValue);
      console.log("selectedCat", selectedCat);
      setCategoryOptions({ options });
    });
  }, []);

  const categoryChange = (selectedOption) => {
    setSelectedCat(selectedOption); // Set selectedCat to the selected option
    setFinalData({ ...finalData, category_id: selectedOption.value });
  };

  // languageOptions

  const [languageOptions, setLanguageOptions] = useState({
    options: [],
    selectedValue: [],
  });

  const [selectedLang, setSelectedLang] = useState({});
  useEffect(() => {
    axios.get(`${BaseURL}language/showLanguage`).then((res) => {
      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((languageData) => ({
        label: languageData.name,
        value: languageData._id,
      }));

      let selectedValue = [];
      options.forEach((item) => {
        console.log("item.related_tags", finalData.lang_id);
        console.log("item.id", item.id);
        if (finalData.lang_id?.includes(item.value)) {
          selectedValue.push(item);
        }
      });
      setSelectedLang(selectedValue);
      console.log("selectedLang", selectedLang);

      setLanguageOptions({ options });
    });
  }, []);

  console.log("language option", languageOptions.options);
  // const categoryOptions = [{ value: "", label: "No option yet" }];
  const languageChange = (selectedOption) => {
    // Handle the selected option
    // setSelectedLanguage(selectedOption.value);
    setSelectedLang(selectedOption); // Set selectedCat to the selected option

    setFinalData({ ...finalData, lang_id: selectedOption.value });
  };

  // const languageOptions = [{ value: "", label: "No option yet" }];

  // const languageChange = (selectedOption) => {
  //   // Handle the selected option
  //   console.log("Selected Option:", selectedOption);
  // };

  return (
    <div className="mainContent">
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
                    <Button color="primary" className="btn ms-4 col-lg-3">
                      Import Json
                    </Button>
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
            {/* Your other elements */}
            <Button
              color="danger"
              // onClick={() => navigate("/addtemplate")}
              className="m-2"
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
              <img
                  style={{ height: "100%", width: "100px" }}
                  src={`${IPcalling}${allLayers[0]?.thumb}`}
                  // src={`http://192.168.0.107:8080/${items.category_thumb}`}
                  alt="Logo"
                />
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
                <img
                  style={{ height: "100%", width: "100px" }}
                  src={`${IPcalling}${allLayers[0]?.image}`}
                  // src={`http://192.168.0.107:8080/${items.category_thumb}`}
                  alt="Logo"
                />
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
                  placeholder={allLayers[0]?.gradAngle}
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
                  placeholder={allLayers[0]?.gradRatio}
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
            {/* ==========================Sticker Component====================================== */}
            <UpdateStickerModel
              handleWidthHeightChange={handleWidthHeightChange}
              allLayers={allLayers}
            />
            {/* ==========================Text Component====================================== */}
            <UpdateTextModel
              handleWidthHeightChange={handleWidthHeightChange}
              allLayers={allLayers}
            />
            {/* ================================================================ */}
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle color="white">
                {/* You can replace this with your desired icon */}
                Add Component
              </DropdownToggle>

              <DropdownMenu>
                <DropdownItem>Sticker Layer</DropdownItem>
                <DropdownItem>Text Layer</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <img
              src={`${IPcalling}${state?.post_thumb}`}
              // src={`http://192.168.0.107:8080/${items.category_thumb}`}
              alt="Logo"
            />
            {/* ================================================================ */}
            <div>
              <div className="row mt-3">
                <div className="col-lg-3">
                  <div className="form-group">
                    <div>
                      Post Name
                      {/* add Image here */}
                    </div>
                    <input
                      type="text"
                      name="post_name"
                      value={finalData?.post_name}
                      onChange={(e) =>
                        setFinalData({
                          ...finalData,
                          post_name: e.target.value,
                        })
                      }
                      className=" mb-3 form-control"
                    />
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
                      value={finalData?.id_name}
                      name="id_name"
                      onChange={(e) =>
                        setFinalData({ ...finalData, id_name: e.target.value })
                      }
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
                    <input
                      type="text"
                      disabled
                      value={finalData?.ratio}
                      name="ratio"
                      onChange={(e) =>
                        setFinalData({ ...finalData, ratio: e.target.value })
                      }
                      className=" mb-3 form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Width
                      {/* add Image here */}
                    </div>
                    <input
                      type="text"
                      value={finalData?.width}
                      name="width"
                      onChange={(e) =>
                        setFinalData({ ...finalData, width: e.target.value })
                      }
                      className=" mb-3 form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Height
                      {/* add Image here */}
                    </div>
                    <input
                      type="text"
                      value={finalData?.height}
                      name="height"
                      onChange={(e) =>
                        setFinalData({ ...finalData, height: e.target.value })
                      }
                      className=" mb-3 form-control"
                    />
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
                      placeholder="Add Your Description Here"
                      className="mb-6 form-control"
                      name="description"
                      value={finalData?.description}
                      onChange={(e) =>
                        setFinalData({
                          ...finalData,
                          description: e.target.value,
                        })
                      }
                      style={{
                        resize: "none",
                        overflowY: "auto",
                        height: "100px",
                      }}
                    />
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
                      placeholder="Select Tags"
                      options={relatedTagOption.options} // Options to display in the dropdown
                      selectedValues={selectedTag} // Preselected value to persist in dropdown
                      onSelect={handleTagSelect} // Function will trigger on select event
                      onRemove={handleTagRemove} // Add the onRemove event handler
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
                      H2 Tag
                      {/* add Image here */}
                    </div>
                    <input
                      type="text"
                      value={finalData?.h2_tag}
                      name="h2_tag"
                      onChange={(e) =>
                        setFinalData({ ...finalData, h2_tag: e.target.value })
                      }
                      className=" mb-3 form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Special Keyword
                      {/* add Image here */}
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder="Select Keywords"
                      options={specialKeywordOption.options} // Options to display in the dropdown
                      selectedValues={selectedKeyword} // Preselected value to persist in dropdown
                      onSelect={handleKeywordSelect} // Function will trigger on select event
                      onRemove={handleKeywordRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>Select Category {/* add Image here */}</div>
                    <Select
                      value={selectedCat} // Change this line to use the selected option object
                      options={categoryOptions.options}
                      onChange={categoryChange}
                      isSearchable={true}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Select Sub Categories
                      {/* add Image here */}
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder="Select Subcategory"
                      options={subcategoryOption.options} // Options to display in the dropdown
                      selectedValues={selectedSubCat} // Preselected value to persist in dropdown
                      onSelect={handleSubcategorySelect} // Function will trigger on select event
                      onRemove={handleSubcategoryRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
                {/* ================ */}
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Style
                      {/* add Image here */}
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder="Select Styles"
                      options={styleOption.options} // Options to display in the dropdown
                      selectedValues={selectedStyle} // Preselected value to persist in dropdown
                      onSelect={handleStyleSelect} // Function will trigger on select event
                      onRemove={handleStyleRemove} // Function will trigger on remove event
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
                      placeholder="Select Interests"
                      options={interestOption.options} // Options to display in the dropdown
                      selectedValues={selectedInterest} // Preselected value to persist in dropdown
                      onSelect={handleInterestSelect} // Function will trigger on select event
                      onRemove={handleInterestRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
                  <div className="form-group">
                    <div>Select Language {/* add Image here */}</div>
                    <Select
                      value={selectedLang} // Change this line to use the selected option object
                      options={languageOptions.options}
                      onChange={languageChange}
                      isSearchable={true}
                      placeholder="Select an option"
                    />
                  </div>
                </div>

                {/* --------------------------------------------- */}
                <div className="col-lg-4 mt-3">
                  <div className="form-group">
                    <div>
                      Select Date Range
                      {/* add Image here */}
                    </div>
                    <input
                      type="date"
                      className=" mb-3 form-control"
                      disabled
                    />
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
                  <div className="form-group">
                    <div>Premium Item {/* add Image here */}</div>
                    <select
                      className="form-control"
                      name="is_premium"
                      value={finalData?.is_premium}
                      onChange={(e) =>
                        setFinalData({
                          ...finalData,
                          is_premium: e.target.value,
                        })
                      }
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
                      value={finalData?.status}
                      onChange={(e) =>
                        setFinalData({
                          ...finalData,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="1">True</option>
                      <option value="0">False</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  color="primary"
                  onClick={HandleSubmit}
                  size="lg"
                  className="m-3 btn"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

