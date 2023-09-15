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

export default function FontList() {
  const navigate = useNavigate();

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
    // axios
    //   .post(
    //     `${BaseURL}editableMode/updateEditableMode/${editItems._id}`,
    //     editItems
    //   ) // Use editItems for the update data
    //   .then((res) => {
    //     console.log("res", res);
    //     window.location.reload(false);
    //     // navigate("/subcategory");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const handleDelete = (id) => {
    // axios
    //   .post(`${BaseURL}editableMode/deleteEditableMode/${id}`)
    //   .then((res) => {
    //     // After successful delete, you might want to refresh the data
    //     // Fetch the updated list of fonts
    //     axios.get(`${BaseURL}editableMode/showEditableMode`).then((res) => {
    //       setDatas(res.data.record);
    //     });
    //   });
  };

  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [editItems, setEditItems] = useState({ name: "", status: "1" });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditShow = (items) => {
    setEditShow(true);
    setEditItems(items);
  };
  const handleEditClose = () => setEditShow(false);

  const index = "0"; // remove it
  const items = "0"; // remove it

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              {/* <h4 className="card-title">Admin List</h4> */}
              <Button
                color="primary"
                onClick={() => handleShow()}
                className="m-2 btn"
              >
                Add Font
              </Button>
            </div>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Font Family</th>
                  <th>Font Name</th>
                  <th>Font Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-top">
                  {/* Add a unique key for each row */}
                  <td>ID</td>
                  <td>Family</td>
                  <td>Name</td>
                  <td>Type</td>
                  <td>Active</td>
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
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
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
          <Modal.Title>Add Font</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "400px" }}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Font Name</Form.Label>
            <Form.Control
              name="name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter Font Name"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Font Family</Form.Label>
            <Form.Control
              name="name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter Font family"
              autoFocus
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            name="status"
            onChange={(e) => setData({ ...data, status: e.target.value })}
            controlId="status"
          >
            <Form.Label>Font Type</Form.Label>
            <Form.Control as="select">
              <option value="0">Normal</option>
              <option value="1">Bold</option>
              <option value="2">Semi-bold</option>
              <option value="3">Italic</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Font File</Form.Label>
            <Form.Control
              type="file"
              name="file"
              onChange={(e) => setData({ ...data, file: e.target.value })}
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
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Font</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Font Name</Form.Label>
            <Form.Control
              onChange={(e) => {
                setEditItems({ ...editItems, name: e.target.value });
              }}
              value={editItems.name}
              placeholder="Enter Font Family Name"
              autoFocus
            />
          </Form.Group>      
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Font Family</Form.Label>
            <Form.Control
              onChange={(e) => {
                setEditItems({ ...editItems, type: e.target.value });
              }}
              value={editItems.type}
              placeholder="Enter Font Family"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            name="status"
            onChange={(e) => setData({ ...data, status: e.target.value })}
            controlId="status"
          >
            <Form.Label>Font Type</Form.Label>
            <Form.Control as="select">
              <option value="0">Normal</option>
              <option value="1">Bold</option>
              <option value="2">Semi-bold</option>
              <option value="3">Italic</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Font File</Form.Label>
            <Form.Control
              type="file"
              name="brand_id"
              onChange={(e) => setData({ ...data, brand_id: e.target.value })}
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
