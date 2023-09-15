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
import IPcalling from "../../urls/IPcalling";
const ITEMS_PER_PAGE = 10; // Number of items to show per pagex`

export default function StickerCategory() {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState([]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };


  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}sticker/showStk`).then((res) => {
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
    axios.post(`${BaseURL}sticker/deleteStkCat/${id}`).then((res) => {
      // After successful delete, you might want to refresh the data
      // Fetch the updated list of fonts
      axios.get(`${BaseURL}sticker/showStk`).then((res) => {
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
              onClick={() => navigate("/AddStickerCategory")}
              className="m-2 btn"
            >
              Add New Sticker Category
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Sticker Id</th>
                <th>Category Name</th>
                <th>Sticker Image</th>
                <th>Sequence Number</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((items,index) => {
                return (
                  <tr className="border-top" key={items._id}>
                    <td>{items._id}</td>
                    <td>{items.stk_category_name}</td>
                    <td>
                      <img
                        style={{ height: "100%", width: "100px" }}
                        src={`${IPcalling}${items.stk_category_thumb}`}
                        alt="Logo"
                      />
                    </td>
                    <td>{items.sequence_number}</td>
                    <td>{items.status ? "ACTIVATE" : "DISABLE"}</td>
                    <td><Dropdown
                        isOpen={dropdownOpen[index]} // Use individual open state
                        toggle={() => toggleDropdown(index)}
                      >
                        <DropdownToggle color="white">
                          <FiMoreVertical />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={() => {
                              navigate("/updateStickerCategory", { state: items });
                            }}>Update</DropdownItem>
                          <DropdownItem onClick={() => {
                              handleDelete(items._id);
                            }}>Delete</DropdownItem>
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
