import React from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";

export default function PaymentSetting() {
  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <h4 className="card-title mb-3">Payment Setting</h4>
          <form
            action="/category/add_category"
            method="post"
            enctype="multipart/form-data"
          >
            {/* --------------------------------------------------------------- */}
            <div className="row">
              <div className="col-lg-4">
                <div className="mb-3form-group">
                  <label>RazorPay</label>
                  <select className="mb-3 form-control" name="application">
                    <option value="">ENABLED</option>
                    <option value="">DISABLED</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-group">
                  <label>Stripe</label>
                  <select className="mb-3 form-control" name="application">
                    <option value="">ENABLED</option>
                    <option value="">DISABLED</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Paypal</label>
                  <select className="mb-3 form-control" name="application">
                    <option value="">ENABLED</option>
                    <option value="">DISABLED</option>
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
                    name="name"
                    placeholder="Razorpay Key ID"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label>Razorpay Secret Key</label>
                  <input
                    type="text"
                    className=" mb-3 form-control"
                    name="name"
                    placeholder="Razorpay Secret Key"
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
                    name="name"
                    placeholder="Stripe Secret Key"
                  />
                </div>
              </div>

              <div className="col-lg-5">
                <div className="form-group">
                  <label>Stripe Pulish Key</label>
                  <input
                    type="text"
                    className=" mb-3 form-control"
                    name="name"
                    placeholder="Stripe Pulish Key"
                  />
                </div>
              </div>              
              <div className="col-lg-2">
                <div className="form-group">
                  <label>Stripe Version</label>
                  <input
                    type="text"
                    className=" mb-3 form-control"
                    name="name"
                    placeholder="Stripe Version"
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
                    name="name"
                    placeholder="Razorpay Key ID"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label>Paypal Secret Key</label>
                  <input
                    type="text"
                    className=" mb-3 form-control"
                    name="name"
                    placeholder="Razorpay Secret Key"
                  />
                </div>
              </div>              
            </div>
            <button className="mb-3 btn btn-primary">Submit</button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
