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

const [pages, setPages] = useState([])

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
                onClick={()=> setPages([])}
              >
                Add New Page
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <div>
        <TemplateInfo />
      </div>
    </div>
  );
}
