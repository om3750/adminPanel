import React, { useState, useEffect } from "react";
import { Button, Table, Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import OneSignal from "react-onesignal";

export default function NortificationSetting() {

  useEffect(() => {
    OneSignal.init({ appId: "954f9f8c-2200-4ad0-945c-0a4552dd34fc" });
  });
  
  const onHandleTag = async (tag) => {
    console.log('taggerd');
    try {
      await OneSignal.sendTag('tech', tag);
      console.log('Tagged');
    } catch (error) {
      console.error('Error tagging:', error);
    }
  }
  

  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [datas, setDatas] = useState([]);
  console.log("datas", datas);

  useEffect(() => {
    axios
      .get(`${BaseURL}notification/showNotification`)
      .then((res) => {
        console.log("API Response:", res.data); // Log the response data
        setDatas(res.data.record);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const defaultData = {
    key: "",
    app_id: "",
  };

  const [data, setData] = useState(defaultData);

  useEffect(() => {
    if (datas.length > 0) {
      setData({
        ...data,
        key: datas[0].key,
        app_id: datas[0].app_id,
      });
    }
  }, [datas]);

  console.log("data", data);

  const handleKeyChange = (e) => {
    setData({
      ...data,
      key: e.target.value,
    });
  };

  const handleAppIdChange = (e) => {
    setData({
      ...data,
      app_id: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsUploading(true);

    // const formData = new FormData();
    // for (const key in data) {
    //   formData.append(key, data[key]);
    // }

    axios
      .post(
        `${BaseURL}notification/updateNotification/64c39ec0d0ce4f660c68348d`,
        data
      )
      .then((res) => {
        console.log("res", res);
        setIsUploading(false);
        navigate("/nortification");
      })
      .catch((error) => {
        console.error("error", error);
        setIsUploading(false);
      });
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          {isLoading ? (
            <div className="text-center mt-3">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : datas && datas.length > 0 ? (
            <div>
              {/* <h4 className="card-title mb-3">Payment Setting</h4> */}
              {/* --------------------------------------------------------------- */}
              <div className="mb-3 form-group">
                <label>Onesignal Api Key</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="key"
                  value={data.key}
                  onChange={handleKeyChange}
                  placeholder="Onesignal Api Key"
                />
              </div>
              <div className="form-group">
                <label>Onesiganl Appid</label>
                <input
                  type="text"
                  className=" mb-3 form-control"
                  name="app_id"
                  value={data.app_id}
                  onChange={handleAppIdChange}
                  placeholder="Onesiganl Appid"
                />
              </div>
              <button onClick={handleSubmit} className="mb-3 btn btn-primary">
                Submit
              </button>{" "}
            </div>
          ) : (
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <tbody>
                <tr>
                  <td colSpan="11" className="text-center">
                    No Data Available
                  </td>
                </tr>
              </tbody>
            </Table>
          )}
        </CardBody>
      </Card>
      <Card className="m-3">
        <CardBody>
          {/* <h4 className="card-title mb-3">Payment Setting</h4> */}
          {/* --------------------------------------------------------------- */}
          <div className="mb-3 form-group">
            <label>Title</label>
            <input
              type="text"
              className=" mb-3 form-control"
              name="name"
              placeholder="Title"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className=" mb-3 form-control"
              name="name"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <label>Large Icon</label>
            <input type="file" className=" my-3 form-control" name="catimage" />
          </div>
          <div className="form-group">
            <label>Big Picture</label>
            <input type="file" className=" my-3 form-control" name="catimage" />
          </div>
          <div className="form-group">
            <label>Activity Name</label>
            <input
              type="text"
              className=" mb-3 form-control"
              name="name"
              placeholder="Activity Name"
            />
          </div>
          <div className="form-group">
            <label>Schedule</label>
            <input
              type="text"
              className=" mb-3 form-control"
              name="name"
              disabled
              placeholder="Select Date & Time"
            />
          </div>
          <div className="d-flex justify-content-between">
            <button onClick={()=>onHandleTag('react')} className="mb-3 w-100 btn btn-success">
              Add Inserted Data
            </button>
          </div>
          <button className="mb-3 btn float-right btn-primary">Submit</button>
        </CardBody>
      </Card>
    </div>
  );
}
