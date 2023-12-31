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

const ITEMS_PER_PAGE = 10; // Number of items to show per pagex`

export default function Category() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseURL}category/showCategory`)
      .then((res) => {
        setDatas(res.data.record);
        console.log("category", res.data.record); // Log the data inside the function
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      });
  }, []);

  const totalPages = datas ? Math.ceil(datas.length / ITEMS_PER_PAGE) : 0;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = datas
    ? datas.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const [dropdownOpen, setDropdownOpen] = useState([]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleDelete = (categoryId) => {
    axios
      .post(`${BaseURL}category/deleteCategory/${categoryId}`)
      .then((res) => {
        // After successful delete, you might want to refresh the data
        // Fetch the updated list of fonts
        axios.get(`${BaseURL}category/showCategory`).then((res) => {
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
                  onClick={() => navigate("/addcategory")}
                  className="m-2 btn"
                >
                  Add Category
                </Button>
              </div>
              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>Catrgory ID</th>
                    <th>App Name</th>
                    <th>Category Name</th>
                    <th>ID Name</th>
                    <th>Category Thumb</th>
                    <th>Sequence name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((items, index) => {
                    return (
                      <tr className="border-top" key={items._id}>
                        {/* Add a unique key for each row */}
                        <td>{items._id}</td>
                        <td>CraftyArt</td>
                        <td>{items.category_name}</td>
                        <td>{items.id_name}</td>
                        <td>
                          <img
                            style={{ height: "100%", width: "100px" }}
                            src={`${IPcalling}${items.category_thumb}`}
                            // src={`http://192.168.0.107:8080/${items.category_thumb}`}
                            alt="Logo"
                          />
                        </td>
                        <td>{items.sequence_number}</td>
                        <td>{items.status ? "ACTIVATE" : "DESABLE"}</td>
                        <td>
                          <Dropdown
                            isOpen={dropdownOpen[index]} // Use individual open state
                            toggle={() => toggleDropdown(index)}
                          >
                            <DropdownToggle color="white">
                              <FiMoreVertical />
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem
                                onClick={() => {
                                  navigate("/updateCategory", {
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
              </div>
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
