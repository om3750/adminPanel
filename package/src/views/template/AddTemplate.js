import React from "react";
import {Card, CardBody} from "reactstrap";
import { Multiselect } from "multiselect-react-dropdown";

export default function AddTemplate() {
  const relatedOption = {
    options: [
      { name: "relatedOption1", id: 1 },
      { name: "relatedOption2", id: 2 },
      { name: "relatedOption3", id: 3 },
      { name: "relatedOption4", id: 4 },
      { name: "relatedOption5", id: 5 },
    ],
  };
  const styleOption = {
    options: [
      { name: "styleOption1", id: 1 },
      { name: "styleOption2", id: 2 },
    ],
  };
  const interestOption = {
    options: [
      { name: "interestOption1", id: 1 },
      { name: "interestOption2", id: 2 },
    ],
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
        <form action="/template/add_template" method="post">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Post Name</label>
                          <input
                            type="text"
                            className=" my-3 form-control"
                            name="pname"
                            placeholder="Post Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>ID Name</label>
                          <input
                            type="text"
                            className=" my-3 form-control"
                            name="idname"
                            placeholder="ID Name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Description</label>
                          <textarea
                            name="description"
                            className=" my-3 "
                            placeholder="Enter Description"
                            style={{ width: "100%" }}
                            rows="4"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group content">
                          <label className="text-center">Related Tags</label>                        
                          <Multiselect
                            className="my-3"
                            name="states[]"
                            placeholder=""
                            options={relatedOption.options} // Options to display in the dropdown
                            selectedValues={relatedOption.selectedValue} // Preselected value to persist in dropdown
                            // onSelect={onSelect} // Function will trigger on select event
                            // onRemove={onRemove} // Function will trigger on remove event
                            displayValue="name" // Property name to display in the dropdown options
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Select Category</label>
                          <select
                            className=" my-3 js-example-basic-multiple w-100 form-control"
                            name="category"
                          >
                            <option value="">--Select Category--</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Style</label>
                          <Multiselect
                          name="style"
                            className="my-3"
                            placeholder=""
                            options={styleOption.options} // Options to display in the dropdown
                            selectedValues={styleOption.selectedValue} // Preselected value to persist in dropdown
                            // onSelect={onSelect} // Function will trigger on select event
                            // onRemove={onRemove} // Function will trigger on remove event
                            displayValue="name" // Property name to display in the dropdown options
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>Select Interest</label>
                          <Multiselect
                            className="my-3"
                            name="interests"
                            placeholder=""
                            options={interestOption.options} // Options to display in the dropdown
                            selectedValues={interestOption.selectedValue} // Preselected value to persist in dropdown
                            // onSelect={onSelect} // Function will trigger on select event
                            // onRemove={onRemove} // Function will trigger on remove event
                            displayValue="name" // Property name to display in the dropdown options
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>Select Language</label>
                          <select
                            className=" my-3 js-example-basic-multiple w-100 form-control"
                            name="language"
                          >
                            <option value="">--Select Language--</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label>Date</label>
                          <input
                            type="date"
                            className=" my-3 form-control"
                            name="date"
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Premium Item</label>
                          <select
                            className=" my-3 js-example-basic-multiple w-100 form-control"
                            name="premium"
                          >
                            <option value="WY">FALSE</option>
                            <option value="AL" className="h-100">
                              TRUE
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Status</label>
                          <select
                            className=" my-3 js-example-basic-multiple w-100 form-control"
                            name="status"
                          >
                            <option value="AL" className="h-100">
                              LIVE
                            </option>
                            <option value="WY">NOT LIVE</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-primary my-3  ">Submit</button>
                  </form>
        </CardBody>
      </Card>
    </div>
  );
}
