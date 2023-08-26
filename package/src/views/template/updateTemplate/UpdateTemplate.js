import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";
import { Multiselect } from "multiselect-react-dropdown";
import Select from "react-select";
import axios from "axios";
import BaseURL from "../../../urls/BaseUrl";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import TemplateInfo from "./TemplateInfo";

export default function UpdateTemplate() {
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
  //   console.log("Selected Option:", selectedOption);
  // };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <div className="ml-auto">
              <Button
                size="lg"
                color="primary"
                // onClick={}
                className="m-2 btn ml-auto" // Add the "ml-auto" class here
              >
                Add New Page
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>{/* <TemplateInfo/> */}</Card>
    </div>
  );
}
