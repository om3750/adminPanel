import React, { useState, useEffect } from "react";
import { Button, Card, CardBody } from "reactstrap";
import TemplateInfo from "./TemplateInfo";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateTemplate() {
  const { state } = useLocation();
  // console.log("state", state);

  const [pages, setPages] = useState([{ isOpen: true }]); // First page is open by default
  const [selectedPage, setSelectedPage] = useState(0); // First page is selected by default

  const handlePageClick = (pageIndex) => {
    if (selectedPage === pageIndex) {
      setSelectedPage(null); // Close the form if clicking the same page again
    } else {
      setSelectedPage(pageIndex);
    }
  };

  const handleAddPage = () => {
    setPages([...pages, { isOpen: false }]);
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Button
                size="lg"
                color="primary"
                onClick={handleAddPage}
                className="m-2"
              >
                Add New Page
              </Button>
            </div>
            <div className="flex-grow-1 d-flex align-items-center">
              {pages.map((page, index) => (
                <Button
                  color="secondary"
                  key={index}
                  className={`ms-2 page-content `}
                  onClick={() => handlePageClick(index)}
                >
                  Page {index + 1}
                </Button>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
      {selectedPage !== null && (
        <div className="selected-page-info">
          <TemplateInfo />
        </div>
      )}
    </div>
  );
}
