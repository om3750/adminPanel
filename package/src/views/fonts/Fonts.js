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

const ITEMS_PER_PAGE = 10; // Number of items to show per pagex`

export default function Fonts() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(`${BaseURL}font/showFont`).then((res) => {
      setDatas(res.data.record);
      console.log("res", res.data.record);
    });
  }, []);

  const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);

  // Create a state array to track each dropdown's open status
  const [dropdownOpen, setDropdownOpen] = useState([]);

  // Function to toggle the dropdown at a specific index
  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (fontId) => {
    axios.post(`${BaseURL}font/deleteFont/${fontId}`).then((res) => {
      // After successful delete, you might want to refresh the data
      // Fetch the updated list of fonts
      axios.get(`${BaseURL}font/showFont`).then((res) => {
        setDatas(res.data.record);
      });
    });
  };

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Button
              color="primary"
              onClick={() => navigate("/addfonts")}
              className="m-2 btn"
            >
              Add Font
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Font Id</th>
                <th>Font Name</th>
                <th>Extension</th>
                <th>Font Thumb</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((items, index) => {
                return (
                  <tr className="border-top" key={items.no}>
                    <td>{items._id}</td>
                    <td>{items.name}</td>
                    <td>{items.extension}</td>
                    <td>
                      <img
                        style={{ height: "100%", width: "100px" }}
                        src={`http://192.168.29.222:8080/${items.thumb}`}
                        alt="Logo"
                      />
                    </td>
                    <td>{items.status ? "ACTIVATE" : "DESABLE"}</td>
                    <td>
                      <Dropdown
                        direction="right"
                        isOpen={dropdownOpen[index]} // Use individual open state
                        toggle={() => toggleDropdown(index)}
                      >
                        <DropdownToggle color="white">
                          <FiMoreVertical />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={() => {
                             navigate('/updatefont', {state: items})
                            }}>Update</DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              handleDelete(items._id);
                            }}
                          >
                            Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </td>
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
