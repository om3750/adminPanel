import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/scss/app.css"; // Import the external CSS file
import { FiMoreVertical } from "react-icons/fi";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
// ... other imports
import { Form, Modal } from "react-bootstrap";
const ITEMS_PER_PAGE = 10; // Number of items to show per pagex`

export default function ShowMessage() {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState([]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };
  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}TransactionLog/showTransactionLog`).then((res) => {
      setDatas(res.data.record);
      console.log("res", res.data.record);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            {/* <h4 className="card-title">Admin List</h4> */}
            <Button
              color="primary"
              onClick={() => navigate("/addcategory")}
              className="m-2 btn"
            >
              Add
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Type</th>
                <th>Is Banner</th>
                <th>Can Cancle</th>
                <th>Keyword</th>
                <th>Link</th>
                <th>Date Range</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((items,index) => {
                return (
                  <tr className="border-top" key={items.no}>
                    {/* Add a unique key for each row */}
                    <td>Id</td>
                    <td>Image</td>
                    <td>Type</td>
                    <td>Is Banner</td>
                    <td>Can Cancle</td>
                    <td>Keyword</td>
                    <td>Link</td>
                    <td>Date Range</td>
                    <td>Status</td>
                    <td><Dropdown
                        isOpen={dropdownOpen[index]} // Use individual open state
                        toggle={() => toggleDropdown(index)}
                      >
                        <DropdownToggle color="white">
                          <FiMoreVertical />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Update</DropdownItem>
                          <DropdownItem>Delete</DropdownItem>
                        </DropdownMenu>
                      </Dropdown></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="pagination-container">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`pagination-item ${
            number === currentPage ? "active" : ""
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </li>
      ))}
    </ul>
  );
}
