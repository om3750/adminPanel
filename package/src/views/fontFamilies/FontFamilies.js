import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/scss/app.css"; // Import the external CSS file
import { FiMoreVertical } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";

import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import IPcalling from "../../urls/IPcalling";

const ITEMS_PER_PAGE = 10; // Number of items to show per pagex`

export default function FontFamilies() {
  const navigate = useNavigate();

  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BaseURL}fontFamilys/showFontFamily`)
      .then((res) => {
        setDatas(res.data.record);
        console.log("FontFamily", res.data.record); // Log the data inside the function
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching FontFamily:", error);
        setIsLoading(false);
      });
  }, []);

  const totalPages = datas ? Math.ceil(datas.length / ITEMS_PER_PAGE) : 0;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = datas
    ? datas.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };
  const [dropdownOpen, setDropdownOpen] = useState([]);

  //   const toggleDropdown = (index) => {
  //     const newDropdownOpen = [...dropdownOpen];
  //     newDropdownOpen[index] = !newDropdownOpen[index];
  //     setDropdownOpen(newDropdownOpen);
  //   };

  const [data, setData] = useState({
    name: "",
    brand_id: "",
    status: "1",
  });

  const HandleSubmit = (event) => {
    // axios
    //   .post(`${BaseURL}editableMode/addEditableMode`, data)
    //   .then((res) => {
    //     console.log("res", res);
    //     window.location.reload(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const HandleEditSubmit = () => {
    axios
      .post(
        `${BaseURL}fontFamilys/updateFontFamily/${editItems._id}`,
        editItems
      ) // Use editItems for the update data
      .then((res) => {
        console.log("res", res);
        // window.location.reload(false);
        // navigate("/subcategory");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .post(`${BaseURL}fontFamilys/deleteFontFamily/${id}`)
      .then((res) => {
        // After successful delete, you might want to refresh the data
        // Fetch the updated list of fonts
        axios.get(`${BaseURL}fontFamilys/showFontFamily`).then((res) => {
          setDatas(res.data.record);
        });
      });
  };

  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [editItems, setEditItems] = useState({  });
  console.log('editItems',editItems);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditShow = (items) => {
    setEditShow(true);
    setEditItems({ ...editItems, ...items }); // Merge the existing editItems state with the selected subcategory's information
  };

  const handleEditClose = () => setEditShow(false);

  const handleFileChange = (e) => {
    // Set the actual file object when the input value changes
    setEditItems({ ...editItems, fontThumb: e.target.files[0] });
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
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  {/* <h4 className="card-title">Admin List</h4> */}
                  <Button
                    color="primary"
                    onClick={() => handleShow()}
                    className="m-2 btn"
                  >
                    Add Font Family
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
                      <th>Font Family</th>
                      <th>Font Thumb</th>
                      <th>Support Type</th>
                      <th>Is premium</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((items, index) => {
                      return (
                        <tr className="border-top" key={items._id}>
                          {/* Add a unique key for each row */}
                          <td>{items.id}</td>
                          <td>{items.fontFamily}</td>
                          <td>
                            <img
                              style={{ height: "100%", width: "100px" }}
                              //   src={`${IPcalling}${items.category_thumb}`}
                              src={`${IPcalling}${items.fontThumb}`}
                              alt="Logo"
                            />
                          </td>
                          <td>{items.supportType}</td>
                          <td>{items.is_premium ? "TRUE" : "FALSE"}</td>
                          <td>{items.status ? "ACTIVE" : "DISABLE"}</td>
                          <td>
                            <Dropdown
                              isOpen={dropdownOpen[index]} // Use individual open state
                              toggle={() => toggleDropdown(index)}
                              direction="left"
                            >
                              <DropdownToggle color="white">
                                <FiMoreVertical />
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem
                                  onClick={() => handleEditShow(items)}
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
          <Modal.Title>Add Font Family</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "400px" }}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Font Family</Form.Label>
            <Form.Control
              name="name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter Font Family Name"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Font Thumb</Form.Label>
            <Form.Control
              type="file"
              name="brand_id"
              onChange={(e) => setData({ ...data, brand_id: e.target.value })}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Support Type</Form.Label>
            <Form.Control
              name="name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter Title Name"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            name="status"
            onChange={(e) => setData({ ...data, status: e.target.value })}
            controlId="status"
          >
            <Form.Label>Premium Font</Form.Label>
            <Form.Control as="select">
              <option value="1">TRUE</option>
              <option value="0">FALSE</option>
            </Form.Control>
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
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Font Family</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Font Family</Form.Label>
            <Form.Control
              onChange={(e) => {
                setEditItems({ ...editItems, fontFamily: e.target.value });
              }}
              name="fontFamily"
              value={editItems.fontFamily}
              placeholder="Enter Font Family Name"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Font Thumb</Form.Label>
            <Form.Control
              type="file"
              name="fontThumb"
              onChange={handleFileChange}
              autoFocus
            />
          </Form.Group>
          <img
            style={{ height: "100%", width: "100px" }}
            alt="image"
            src={`${IPcalling}${editItems.fontThumb}`}
            />
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Support Type</Form.Label>
            <Form.Control
              onChange={(e) => {
                setEditItems({ ...editItems, supportType: e.target.value });
              }}
              value={editItems.supportType}
              placeholder="Enter Support Type"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            name="is_premium"
            onChange={(e) => setEditItems({ ...editItems, is_premium: e.target.value })}
            controlId="is_premium"
          >
            <Form.Label>Premium Font</Form.Label>
            <Form.Control as="select">
              <option value="1">TRUE</option>
              <option value="0">FLASE</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            name="status"
            onChange={(e) => setEditItems({ ...editItems, status: e.target.value })}
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
