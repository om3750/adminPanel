import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import { FiMoreVertical } from "react-icons/fi";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";
import IPcalling from "../../urls/IPcalling";
import "../../assets/scss/app.css";


const ITEMS_PER_PAGE = 10; // Number of items to show per pagex`


export default function Template() {
  const [dropdownOpen, setDropdownOpen] = useState([]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BaseURL}design/ShowDesign`)
      .then((res) => {
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = datas ? Math.ceil(datas.length / ITEMS_PER_PAGE) : 0;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = datas
    ? datas.slice(indexOfFirstItem, indexOfLastItem)
    : [];

    const handleDelete = (id) => {
      axios
        .post(`${BaseURL}importJson/deleteJson/${id}`)
        .then((response) => {
          // Handle success here, e.g., show a success message or update your UI
          console.log("Successfully deleted:", response.data);
    
          // Remove the deleted item from the datas state
          setDatas((prevDatas) => prevDatas.filter((item) => item._id !== id));
        })
        .catch((error) => {
          // Handle error here, e.g., show an error message or log the error
          console.error("Error deleting:", error);
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
                <Button
                  color="primary"
                  onClick={() => navigate("/addtemplate")}
                  className="m-2 btn"
                >
                  Add Template
                </Button>
              </div>
              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Category name</th>
                    <th>W/H</th>
                    <th>Poster Name</th>
                    <th>Poster Thumb</th>
                    <th>Size</th>
                    <th>Views</th>
                    <th>Is Premium</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => {
                    return (
                    <tr className="border-top" key={item._id}>
                      <td>{item.sql_id}</td>
                      <td>Om</td>
                      <td>{item.category_id}</td>
                      <td>
                        {item.height}*{item.width}
                      </td>
                      <td>{item.post_name}</td>
                      <td>
                        <img
                          style={{ height: "100%", width: "100px" }}
                          src={`${IPcalling}${item.post_thumb}`}
                          // src={`http://192.168.0.107:8080/${items.category_thumb}`}
                          alt="Logo"
                        />
                      </td>
                      <td>{item.size}</td>
                      <td>{item.views}</td>
                      <td>{item.is_premium ? "Yes" : "No"}</td>
                      <td>{item.status ? "Live" : "Not Live"}</td>
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
                            <DropdownItem
                              onClick={() => {
                                navigate("/updatetemplate", {
                                  state: item,
                                });
                              }}
                            >
                              Update
                            </DropdownItem>
                            <DropdownItem 
                            onClick={() => {
                              handleDelete(item._id);
                              console.log('item._id',item._id);
                            }}
                              >Delete</DropdownItem>
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