import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import BaseURL from "../../urls/BaseUrl";

export default function ImportJson() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BaseURL}category/showCategory`);
      setCategories(response.data.record);
      console.log("category", response.data.record); // Log the data inside the function
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryChange = (e) => {
    setData({ ...data, category_id: e.target.value });
  };


  const [appIds, setAppIds] = useState([]);

  useEffect(() => {
    fetchAppIds();
  }, []);

  const fetchAppIds = async () => {
    try {
      const response = await axios.get(`${BaseURL}appCat/showAppCat`);
      setAppIds(response.data.record);
      console.log("appIds", response.data.record); // Log the data inside the function
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAppIdsChange = (e) => {
    setData({ ...data, app_id: e.target.value });
  };

  // const [cat, setCat] = useState([]); // Provide an empty array as the initial value
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false); // State for tracking uploading status

  const [data, setData] = useState({
    jsonfile: null,
    // images: [],
    app_id: "",
    category_id: "",
    is_premium: "1",
    status: "1",
  });

  const [images, setImages] = useState([]);

  console.log("data", data);

  const HandleSubmit = () => {
    //  event.preventDefault();
    setIsUploading(true); // Start uploading, show spinner
    const formData = new FormData();
    // // Append all form fields to the FormData
    // // for (const key in data) {
    //   // console.log("cscsv", key, data[key]);
    //   formData.append('jsonfile', data.jsonfile);
    //   formData.append('app_id', data.app_id);
    //   formData.append('category_id', data.category_id);
    //   formData.append('is_premium', data.is_premium);
    //   formData.append('status', data.status);
    // // }

    for (const key in data) {
      formData.append(key, data[key]);
    }
    

    console.log(typeof images); // Check the data type
console.log(images); // Check the contents

const imageValues = Object.values(images);

imageValues.forEach((image, index) => {
      formData.append(`images`, image); // Add each image
    });

    // data.images.forEach((image, index) => {
    //   formData.append(`images_${index}`, image);
    // })

    console.log("data", formData);

    axios
      .post(`${BaseURL}importJson/addimportjson`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setIsUploading(false); // Upload complete, hide spinner
        console.log("res", res);
        // Only navigate when the API call is successful
      })
      .catch((error) => {
        console.error("error", error);
        setIsUploading(false); // Upload complete, hide spinner
      });
  };

  const handleJsonChange = (e) => {
    // Set the actual file object when the input value changes
    console.log("Gdgd", e.target.files[0]);

    setData({ ...data, jsonfile: e.target.files[0] });
  };
  const handleImagesChange = (e) => {
    const imagesArray = [];

    for (let index = 0; index < e.target.files.length; index++) {
      const file = e.target.files[index];
      console.log("Gdgd", file);
      imagesArray.push(file);
    }

    setImages(e.target.files);
    setData({ ...data, images: e.target.files });
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title">Import Json</h4>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Json</label>
                <input
                  type="file"
                  className=" mb-3 form-control"
                  onChange={handleJsonChange}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <label>Images</label>
                <input
                  type="file"
                  className="mb-3 form-control"
                  onChange={handleImagesChange}
                  multiple
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="form-group">
                <label>Select Application</label>
                <select
                  className="mb-3 form-control"
                  name="application"
                  onChange={handleAppIdsChange}
                  value={data.app_id}
                >
                  <option value="">Select an option</option>
                  {appIds &&
                    appIds.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.app_name}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="form-group">
                <label>Select Category</label>
                <select
                  className="mb-3 form-control"
                  name="application"
                  onChange={handleCategoryChange}
                  value={data.category}
                >
                  <option value="">Select an option</option>
                  {categories &&
                    categories.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.category_name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label>Premium Item</label>
                <select
                  className=" mb-3 form-control"
                  name="is_premium"
                  onChange={(e) =>
                    setData({ ...data, is_premium: e.target.value })
                  }
                >
                  <option value="1">TRUE</option>
                  <option value="0">FALSE</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <label>Status</label>
                <select
                  className=" mb-3 form-control"
                  name="status"
                  onChange={(e) => setData({ ...data, status: e.target.value })}
                >
                  <option value="1">LIVE</option>
                  <option value="0">NOT LIVE</option>
                </select>
              </div>
            </div>
          </div>
          {isUploading ? (
            <div className="text-center mt-3">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <button onClick={HandleSubmit} className="mt-3 btn btn-primary">
              Submit
            </button>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
