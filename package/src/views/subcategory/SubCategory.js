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

export default function SubCategory() {
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState([]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  const [data, setData] = useState({
    name: "",
    status: "1",
  });

  const HandleSubmit = (event) => {
    axios
      .post(`${BaseURL}subCat/addSubCat`, data)
      .then((res) => {
        console.log("res", res);
        window.location.reload(false);
        // navigate("/subategory");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const HandleEditSubmit = () => {
    axios
      .post(`${BaseURL}subCat/updateSubCat/${editItems._id}`,editItems) // Use editItems for the update data
      .then((res) => {
        console.log("res", res);
        window.location.reload(false);
        // navigate("/subcategory");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}subCat/showSubCat`).then((res) => {
      console.log("API Response:", res.data); // Log the response data
        setDatas(res.data.record);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [editItems, setEditItems] = useState({ name: "", status: '' });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditShow = (items) => {
    setEditShow(true);
    setEditItems({ ...editItems, ...items }); // Merge the existing editItems state with the selected subcategory's information
  };

  const handleEditClose = () => setEditShow(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = (id) => {
    axios.post(`${BaseURL}subCat/deleteSubCat/${id}`).then((res) => {
      // After successful delete, you might want to refresh the data
      // Fetch the updated list of fonts
      axios.get(`${BaseURL}subCat/showSubCat`).then((res) => {
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
              onClick={() => handleShow()}
              className="m-2 btn"
            >
              Add Subcategory
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
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
                    <td>{items.name}</td>
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
                          <DropdownItem onClick={() => handleEditShow(items)}>
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

      {/* --------------------new model------------------------ */}

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          width: "auto",
          height: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "400px" }}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Subcategory Name</Form.Label>
              <Form.Control
                name="name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Enter Subcategory Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              name="status"
              onChange={(e) => setData({ ...data, status: e.target.value })}
              controlId="status"
            >
              <Form.Label>Status</Form.Label>
              <Form.Control as="select">
                <option value="1">ACTIVE</option>
                <option value="0">DEACTIVE</option>
              </Form.Control>
            </Form.Group>
          <Button
            className="w-100"
            variant="primary"
            onClick={() => {
              handleClose();
              HandleSubmit();
            }}
          >
            Submit
          </Button>
        </Modal.Body>
      </Modal>

      {/* ----------------- edit model ------------ */}

      <Modal
        show={editShow}
        onHide={handleEditClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          width: "auto",
          height: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "400px" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subcategory Name</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEditItems({ ...editItems, name: e.target.value });
                }}
                value={editItems.name}
                placeholder="Enter New Subcategory Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) =>
                  setEditItems({ ...editItems, status: e.target.value })
                }
                value={editItems.status}
              >
                <option value='1'>ACTIVE</option>
                <option value='0'>DISABLE</option>
              </Form.Control>
            </Form.Group>
          <Button
            className="w-100"
            variant="primary"
            onClick={() => {
              handleEditClose();
              HandleEditSubmit();
            }}
          >
            Submit
          </Button>
        </Modal.Body>
      </Modal>
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
