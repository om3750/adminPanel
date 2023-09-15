import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import { Multiselect } from "multiselect-react-dropdown";
import Select from "react-select";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function AddTemplate() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // relatedTagOption

  const [relatedTagdatas, setRelatedTagDatas] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [relatedTagOption, setRelatedTagOption] = useState({
    options: [],
  });

  useEffect(() => {
    axios.get(`${BaseURL}searchTags/showSearchTag`).then((res) => {
      setRelatedTagDatas(res.data.record);

      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((tagData) => ({
        name: tagData.name,
        id: tagData._id,
      }));

      setRelatedTagOption({ options });
    });
  }, []);

  const handleTagSelect = (selectedItems) => {
    setSelectedTags(selectedItems?.map((item) => item?.id));
  };

  const handleTagRemove = (removedItem) => {
    const updatedTags = selectedTags.filter(
      (tagId) => tagId !== removedItem.id
    );
    setSelectedTags(updatedTags);
  };

  // ****************************************
  console.log("selectedTags", selectedTags);
  // ****************************************

  // ThemeOption

  const [themedatas, setThemeDatas] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState([]);
  const [themeOption, setThemeOption] = useState({
    options: [],
  });

  useEffect(() => {
    axios.get(`${BaseURL}theme/showTheme`).then((res) => {
      setThemeDatas(res.data.record);

      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((themeData) => ({
        name: themeData.name,
        id: themeData._id,
      }));

      setThemeOption({ options });
    });
  }, []);

  const handleThemeSelect = (selectedItems) => {
    setSelectedTheme(selectedItems?.map((item) => item?.id));
  };

  const handleThemeRemove = (removedItem) => {
    const updatedThemes = selectedTheme.filter(
      (tagId) => tagId !== removedItem.id
    );
    setSelectedTheme(updatedThemes);
  };

  // ****************************************
  console.log("selectedTheme", selectedTheme);
  // ****************************************

  // Now you can use the relatedTagOption in your JSX

  // styleOption

  const [styledatas, setStyleDatas] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [styleOption, setStyleOption] = useState({
    options: [],
  });

  useEffect(() => {
    axios.get(`${BaseURL}style/showStyle`).then((res) => {
      setStyleDatas(res.data.record);

      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((styleData) => ({
        name: styleData.name,
        id: styleData._id,
      }));

      setStyleOption({ options });
    });
  }, []);

  const handleStyleSelect = (selectedItems) => {
    setSelectedStyle(selectedItems?.map((item) => item?.id));
  };

  const handleStyleRemove = (removedItem) => {
    const updatedStyle = selectedStyle.filter(
      (tagId) => tagId !== removedItem.id
    );
    setSelectedStyle(updatedStyle);
  };

  // ****************************************
  console.log("selectedStyle", selectedStyle);
  // ****************************************

  // const styleOption = {
  //   options: [
  //     { name: "styleOption1", id: 1 },
  //     { name: "styleOption2", id: 2 },
  //   ],
  // };

  // subcategoryOption

  const [subcategorydatas, setSubcategoryDatas] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState([]);
  const [subcategoryOption, setSubcategoryOption] = useState({
    options: [],
  });

  useEffect(() => {
    axios.get(`${BaseURL}subCat/showSubCat`).then((res) => {
      setSubcategoryDatas(res.data.record);

      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((subcategoryData) => ({
        name: subcategoryData.name,
        id: subcategoryData._id,
      }));

      setSubcategoryOption({ options });
    });
  }, []);

  const handleSubcategorySelect = (selectedItems) => {
    setSelectedKeyword(selectedItems?.map((item) => item?.id));
  };

  const handleSubcategoryRemove = (removedItem) => {
    const updatedSubcategory = selectedSubcategory.filter(
      (tagId) => tagId !== removedItem.id
    );
    setSelectedKeyword(updatedSubcategory);
  };

  // ****************************************
  console.log("selectedSubcategory", selectedSubcategory);
  // ****************************************

  // const subcategoryOptions = {
  //   options: [
  //     { name: "ratioOption1", id: 1 },
  //     { name: "ratioOption2", id: 2 },
  //   ],
  // };

  // interestOption

  const [interestdatas, setInterestDatas] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [interestOption, setInterestOption] = useState({
    options: [],
  });

  useEffect(() => {
    axios.get(`${BaseURL}interest/showInterest`).then((res) => {
      setInterestDatas(res.data.record);

      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((interestData) => ({
        name: interestData.name,
        id: interestData._id,
      }));

      setInterestOption({ options });
    });
  }, []);

  const handleInterestSelect = (selectedItems) => {
    setSelectedInterest(selectedItems?.map((item) => item?.id));
  };

  const handleInterestRemove = (removedItem) => {
    const updatedInterest = selectedInterest.filter(
      (tagId) => tagId !== removedItem.id
    );
    setSelectedInterest(updatedInterest);
  };

  // ****************************************
  console.log("selectedInterest", selectedInterest);
  // ****************************************

  // const interestOption = {
  //   options: [
  //     { name: "interestOption1", id: 1 },
  //     { name: "interestOption2", id: 2 },
  //   ],
  // };

  // specialKeywordOptions

  const [specialKeyworddatas, setSpecialKeywordDatas] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState([]);
  const [specialKeywordOption, setspecialKeywordOption] = useState({
    options: [],
  });

  useEffect(() => {
    axios.get(`${BaseURL}specialKeyword/showSpecialKeyword`).then((res) => {
      setSpecialKeywordDatas(res.data.record);

      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((keywordData) => ({
        name: keywordData.name,
        id: keywordData._id,
      }));

      setspecialKeywordOption({ options });
    });
  }, []);

  const handleKeywordSelect = (selectedItems) => {
    setSelectedKeyword(selectedItems?.map((item) => item?.id));
  };

  const handleKeywordRemove = (removedItem) => {
    const updatedKeywords = selectedKeyword.filter(
      (tagId) => tagId !== removedItem.id
    );
    setSelectedKeyword(updatedKeywords);
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

  // cetOptions

  const cetOptions = [
    { value: "", label: "Select Option" },
    { value: "1", label: "Image" },
    { value: "2", label: "Texture" },
    { value: "3", label: "Colored" },
    { value: "4", label: "Linear" },
    { value: "5", label: "Redial" },
  ];

  const catChange = (selectedOption) => {
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

  const [categorydatas, setCategoryDatas] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState({
    options: [],
  });

  useEffect(() => {
    axios.get(`${BaseURL}category/showCategory`).then((res) => {
      setCategoryDatas(res.data.record);

      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((categoryData) => ({
        label: categoryData.category_name,
        value: categoryData._id,
      }));
      setCategoryOptions({ options });
    });
  }, []);

  console.log("cat option", categoryOptions.options);
  // const categoryOptions = [{ value: "", label: "No option yet" }];
  const categoryChange = (selectedOption) => {
    // Handle the selected option
    setSelectedCategory(selectedOption.value);
  };
  console.log("selectedCategory", selectedCategory);

  // languageOptions

  const [languagedatas, setLanguageDatas] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [languageOptions, setLanguageOptions] = useState({
    options: [],
  });

  useEffect(() => {
    axios.get(`${BaseURL}language/showLanguage`).then((res) => {
      setLanguageDatas(res.data.record);

      // Transform relatedTagdatas into the desired format
      const options = res.data.record.map((languageData) => ({
        label: languageData.name,
        value: languageData._id,
      }));
      setLanguageOptions({ options });
    });
  }, []);

  console.log("language option", languageOptions.options);
  // const categoryOptions = [{ value: "", label: "No option yet" }];
  const languageChange = (selectedOption) => {
    // Handle the selected option
    setSelectedLanguage(selectedOption.value);
  };
  console.log("selectedLanguage", selectedLanguage);

  // const languageOptions = [{ value: "", label: "No option yet" }];

  // const languageChange = (selectedOption) => {
  //   // Handle the selected option
  //   console.log("Selected Option:", selectedOion);
  // };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4>Crafty Art</h4>
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardBody>
          <div className="row">
            <div className="col-lg-3">
              <div className="form-group">
                <label>Post Name</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
              <div className="form-group">
                <label>Select BG Type</label>
                <Select
                  options={bgBgptions}
                  onChange={handleBgChange}
                  isSearchable={true}
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label>Post Thumb</label>
                <input
                  type="file"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label>Ratio</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
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
                <label>Width</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
              <div className="form-group">
                <label>Gradient Ratio</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <label>Height</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="catimage"
                />
              </div>
              <div className="form-group">
                <label>Category Name</label>
                <Select
                  options={cetOptions}
                  onChange={catChange}
                  isSearchable={true}
                  placeholder="Select"
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className="mt-5">Component Info</h5>
            <div
              className="my-2"
              style={{
                height: "1px",
                backgroundColor: "#f0f0f0", // Lightest grey color
                margin: "10px 0",
              }}
            ></div>
            {/* __________________________sticker component__________________________ */}
            <div>
              <div className="row">
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Sticker Image
                    </div>
                    <input type="file" className=" mb-3 form-control" />
                    {/* add image here */}
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Width
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Height
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      X Pos
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Y Pos
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Rotation
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Opacity
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Type
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
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Resize
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
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Lock Type
                    </div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="lock_type"
                    >
                      <option value="">Select</option>
                      <option value="1">No Lock</option>
                      <option value="2">Temp Lock</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ==================== */}

              <div className="row">
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Order
                    </div>
                    <input type="text" className=" mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <div>
                      Editable Title
                    </div>
                    <Select
                      options={editableTitleOptions.options}
                      onChange={editableStickerTitleChange}
                      isSearchable={true}
                      placeholder="Select an option"
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="mt-4 form-group">
                    <Button className="px-4" color="primary">
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* __________________________ text component__________________________ */}
            <div
              className="my-5"
              style={{
                height: "1px",
                backgroundColor: "#f0f0f0", // Lightest grey color
                margin: "10px 0",
              }}
            ></div>
            {/* __________________________ text component__________________________ */}
            <div>
              <div className="row">
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
                    <input type="text" className="mb-3 form-control" />
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="form-group">
                    <div>
                      Editable
                    </div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="status"
                    >
                      <option value="0">False</option>
                      <option value="1">True</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <div>
                      Editable Title
                    </div>
                    <Select
                      options={editableTitleOptions.options}
                      onChange={editableTextTitleChange}
                      isSearchable={true}
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>

              {/* ==================== */}

              <div>
                <div class="row">
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Alignment</label>
                      <select class="form-control" name="alignment">
                        <option value="0">Left</option>
                        <option value="1">Center</option>
                        <option value="2">Right</option>
                        <option value="3">Justify</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Size</label>
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Color</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Color Alpha</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Width</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Height</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>X Pos</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Y Pos</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Line Space</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Line Space Multiplier</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Word Space</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Curve</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Rotation</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Opacity</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-1">
                    <div class="form-group">
                      <label>Order</label>
                      {/* <!-- add Image here --> */}
                      <input type="text" class="mb-3 form-control" />
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="mt-4 form-group">
                      <Button className="px-4" color="primary">
                        Add
                      </Button>
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
                backgroundColor: "#f0f0f0", // Lightest grey color
                margin: "10px 0",
              }}
            ></div>
            {/* ================================================================ */}
            <div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <div>
                      Related Tags
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder="Select Tags"
                      options={relatedTagOption.options} // Options to display in the dropdown
                      selectedValues={relatedTagOption.selectedValue} // Preselected value to persist in dropdown
                      onSelect={handleTagSelect} // Function will trigger on select event
                      onRemove={handleTagRemove} // Add the onRemove event handler
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div>
                      Style
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder="Select Styles"
                      options={styleOption.options} // Options to display in the dropdown
                      selectedValues={styleOption.selectedValue} // Preselected value to persist in dropdown
                      onSelect={handleStyleSelect} // Function will trigger on select event
                      onRemove={handleStyleRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>Select Category {/* add Image here */}</div>
                    <Select
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
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder="Select Subcategory"
                      options={subcategoryOption.options} // Options to display in the dropdown
                      selectedValues={subcategoryOption.selectedValue} // Preselected value to persist in dropdown
                      onSelect={handleSubcategorySelect} // Function will trigger on select event
                      onRemove={handleSubcategoryRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Select Theme
                    </div>
                    <Multiselect
                      name="states[]"
                      placeholder="Select Keywords"
                      options={themeOption.options} // Options to display in the dropdown
                      selectedValues={themeOption.selectedValue} // Preselected value to persist in dropdown
                      onSelect={handleThemeSelect} // Function will trigger on select event
                      onRemove={handleThemeRemove} // Function will trigger on remove event
                      displayValue="name" // Property name to display in the dropdown options
                    />
                  </div>
                </div>
              </div>

              {/* --------------------------------------------- */}
              <div className="row mt-3">
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Select Date Range
                    </div>
                    <input type="date" class="mb-3 form-control" />
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
                      <option value="0">False</option>
                      <option value="1">True</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <div>
                      Status
                    </div>
                    <select
                      className="form-control"
                      // value={data.status}
                      name="status"
                    >
                      <option value="0">False</option>
                      <option value="1">True</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <Button color="primary" className="px-3 btn">
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
