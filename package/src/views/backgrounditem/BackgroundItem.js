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
import IPcalling from "../../urls/IPcalling";
// ... other imports
const ITEMS_PER_PAGE = 10; // Number of items to show per pagex`

export default function BackgroundItem() {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  const [cat, setCat] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}background/showallcat`).then((res) => {
      setCat(res.data.record);
      // console.log("res", res.data.record);
      setIsLoading(false); // Turn off loading state when data is retrieved
    });
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState([]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}background/bgitem`).then((res) => {
      console.log("API Response:", res.data); // Log the response data
      setDatas(res.data.record);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setIsLoading(false);
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

  const handleDelete = (id) => {
    axios.post(`${BaseURL}background/deleteBgItem/${id}`).then((res) => {
      // After successful delete, you might want to refresh the data
      // Fetch the updated list of fonts
      axios.get(`${BaseURL}background/bgitem`).then((res) => {
        setDatas(res.data.record);
      });
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
<div className="d-flex justify-content-between align-items-center mb-3">
            {/* <h4 className="card-title">Admin List</h4> */}
            <Button
              color="primary"
              onClick={() => navigate("/addBackgroundItem")}
              className="m-2 btn"
            >
              Add New Background
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Background Id</th>
                <th>Category Name</th>
                <th>Background Name</th>
                <th>Background Image</th>
                <th>Is Premium</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((items, index) => {
                const category = cat.find(
                  (category) => category._id === items.bg_cat_id
                );

                return (
                  <tr className="border-top" key={items._id}>
                    {/* Add a unique key for each row */}
                    <td>{items._id}</td>
                    <td>
                      {category ? category.bg_category_name : items.bg_cat_id}
                    </td>
                    <td>{items.bg_name}</td>
                    <td>
                      <img
                        style={{ height: "100%", width: "100px" }}
                        src={`${IPcalling}${items.bg_image}`}
                        alt="Logo"
                      />
                    </td>
                    <td>{items.is_premium ? "Yes" : "No"}</td>
                    <td>{items.status ? "LIVE" : "NOT LIVE"}</td>
                    <td>
                      <Dropdown
                        direction="left" // Set the direction to "left" 
                        isOpen={dropdownOpen[index]} // Use individual open state
                        toggle={() => toggleDropdown(index)}
                      >
                        <DropdownToggle color="white">
                          <FiMoreVertical />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            onClick={() => {
                              navigate("/UpdateBackgroundItem", {
                                state: items,
                              });
                            }}
                          >
                            Update
                          </DropdownItem>
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
          </div>              </div>
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
