import React, { useState, useEffect } from "react";
import { Button, Card, CardBody } from "reactstrap";
import TemplateInfo from "./TemplateInfo";

export default function UpdateTemplate() {
  const [pages, setPages] = useState([{ isOpen: true }]); // First page is open by default
  const [selectedPage, setSelectedPage] = useState(0); // First page is selected by default

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Button
                size="lg"
                color="primary"
                className="m-2"
              >
                Add New Page
              </Button>
            </div>
            <div className="flex-grow-1 d-flex align-items-center">             
            </div>
          </div>
        </CardBody>
      </Card>
        <div className="selected-page-info">
          <TemplateInfo />
        </div>
    </div>
  );
}
