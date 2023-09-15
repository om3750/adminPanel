import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import axios from "axios";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function PaymentSetting() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios.get(`${BaseURL}paymentSetting/showPaymentSetting`).then((res) => {
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
    razorpay_status: "",
    stripe_status: "",
    paypal_status: "",
    razorpay_ki: "",
    razorpay_ck: "",
    stripe_sk: "",
    stripe_pk: "",
    stripe_ver: "",
    paypal_ci: "",
    paypal_sk: "",
  };

  const [data, setData] = useState(defaultData);

  useEffect(() => {
    if (datas.length > 0) {
      setData({
        ...data,
        razorpay_status: datas[0].razorpay_status,
        stripe_status: datas[0].stripe_status,
        paypal_status: datas[0].paypal_status,
        razorpay_ki: datas[0].razorpay_ki,
        razorpay_ck: datas[0].razorpay_ck,
        stripe_sk: datas[0].stripe_sk,
        stripe_pk: datas[0].stripe_pk,
        stripe_ver: datas[0].stripe_ver,
        paypal_ci: datas[0].paypal_ci,
        paypal_sk: datas[0].paypal_sk,
      });
    }
  }, [datas]);

  console.log('data',data);

  const HandleSubmit = () => {
    setIsUploading(true);

    // const formData = new FormData();
    // for (const key in data) {
    //   formData.append(key, data[key]);
    // }

    axios.post(`${BaseURL}paymentSetting/updatePaymentSetting/64c39f5dd0ce4f660c683496`, data)
      .then((res) => {
        console.log("res", res);
        setIsUploading(false);
        // window.location.reload();
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
          <h4 className="card-title mb-3">Payment Setting</h4>
          
          {isLoading ? (
            <div className="text-center mt-3">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
                  ) : datas && datas.length > 0 ? (

              <div>
               {datas.length > 0 && (
            <div>
              {/* --------------------------------------------------------------- */}
              <div className="row">
                <div className="col-lg-4">
                  <div className="mb-3form-group">
                    <label>RazorPay</label>
                    <select  value={data.razorpay_status}
                      onChange={(e) =>
                        setData({ ...data, razorpay_status: e.target.value })
                      } className="mb-3 form-control" name="razorpay_status">
                      <option value="1">ENABLED</option>
                      <option value="0">DISABLED</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="form-group">
                    <label>Stripe</label>
                    <select  value={data.stripe_status}
                      onChange={(e) =>
                        setData({ ...data, stripe_status: e.target.value })
                      } className="mb-3 form-control" name="stripe_status">
                      <option value="1">ENABLED</option>
                      <option value="0">DISABLED</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label>Paypal</label>
                    <select  value={data.paypal_status}
                      onChange={(e) =>
                        setData({ ...data, paypal_status: e.target.value })
                      } className="mb-3 form-control" name="paypal_status">
                      <option value="1">ENABLED</option>
                      <option value="0">DISABLED</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* --------------------------------------------------------------------- */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3form-group">
                    <label>Razorpay Key ID</label>
                    <input
                      type="text"
                      className=" mb-3 form-control"
                      name="razorpay_ki"
                      placeholder="Razorpay Key ID"
                      value={data.razorpay_ki}
                      onChange={(e) =>
                        setData({ ...data, razorpay_ki: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Razorpay Secret Key</label>
                    <input
                      type="text"
                      value={data.razorpay_ck}
                      className=" mb-3 form-control"
                      name="razorpay_ck"
                      placeholder="Razorpay Secret Key"
                      onChange={(e) =>
                        setData({ ...data, razorpay_ck: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              {/* --------------------------------------------------------------------- */}
              <div className="row">
                <div className="col-lg-5">
                  <div className="mb-3form-group">
                    <label>Stripe Secret Key</label>
                    <input
                      type="text"
                      className=" mb-3 form-control"
                      name="stripe_sk"
                      placeholder="Stripe Secret Key"
                      value={data.stripe_sk}
                      onChange={(e) =>
                        setData({ ...data, stripe_sk: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="form-group">
                    <label>Stripe Pulish Key</label>
                    <input
                      type="text"
                      className=" mb-3 form-control"
                      name="stripe_pk"
                      placeholder="Stripe Pulish Key"
                      value={data.stripe_pk}
                      onChange={(e) =>
                        setData({ ...data, stripe_pk: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <label>Stripe Version</label>
                    <input
                      type="text"
                      className=" mb-3 form-control"
                      name="stripe_ver"
                      placeholder="Stripe Version"
                      value={data.stripe_ver}
                      onChange={(e) =>
                        setData({ ...data, stripe_ver: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              {/* -------------------------------------------------------------------- */}
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3form-group">
                    <label>Paypal Client ID</label>
                    <input
                      type="text"
                      className=" mb-3 form-control"
                      name="paypal_ci"
                      placeholder="Paypal Client ID"
                      value={data.paypal_ci}
                      onChange={(e) =>
                        setData({ ...data, paypal_ci: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Paypal Secret Key</label>
                    <input
                      type="text"
                      className=" mb-3 form-control"
                      name="paypal_sk"
                      placeholder="Paypal Secret Key"
                      value={data.paypal_sk}
                      onChange={(e) =>
                        setData({ ...data, paypal_sk: e.target.value })
                      }
                    />
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
                <button onClick={HandleSubmit} className="my-3 btn btn-primary">
                  Submit
                </button>
              )}
            </div>
          )}
              </div>
            ) : (
              <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <tbody>
                  <tr>
                    <td colSpan="11" className="text-center">
                      Error in fetching details ... !
                    </td>
                  </tr>
                </tbody>
              </Table>
            )}
        </CardBody>
      </Card>
    </div>
  );
}
