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

export default function Style() {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [dropdownOpen, setDropdownOpen] = useState([]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  const [data, setData] = useState({
    name: "",
    title: "",
    meta_title: "",
    meta_desc: "",
    short_desc: "",
    long_desc: "",
    status: "1",
  });

  const HandleSubmit = (event) => {
    axios
      .post(`${BaseURL}specialKeyword/addSpecialKeyword`, data)
      .then((res) => {
        console.log("res", res);
        window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const HandleEditSubmit = () => {
    axios
      .post(
        `${BaseURL}specialKeyword/updateSpecialKeyword/${editItems._id}`,
        editItems
      ) // Use editItems for the update data
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
    axios
      .get(`${BaseURL}specialKeyword/showSpecialKeyword`)
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

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleDelete = (id) => {
    axios
      .post(`${BaseURL}specialKeyword/deleteSpecialKeyword/${id}`)
      .then((res) => {
        // After successful delete, you might want to refresh the data
        // Fetch the updated list of fonts
        axios.get(`${BaseURL}specialKeyword/showSpecialKeyword`).then((res) => {
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
                  Add Keyword
                </Button>
              </div>
              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Meta Title</th>
                    <th>Meta description</th>
                    <th>Short description</th>
                    <th>Long description</th>
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
                        <td>{items.title}</td>
                        <td>{items.meta_title}</td>
                        <td>{items.meta_desc}</td>
                        <td>{items.short_desc}</td>
                        <td>{items.long_desc}</td>
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
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Keyword</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "500px" }}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Keyword</Form.Label>
            <Form.Control
              name="name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter Keyword"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Keyword Title</Form.Label>
            <Form.Control
              name="title"
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Enter Keyword Title"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="meta_title">
            <Form.Label>Meta Title</Form.Label>
            <Form.Control
              name="meta_title"
              onChange={(e) => setData({ ...data, meta_title: e.target.value })}
              placeholder="Enter Meta Title"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="meta_desc">
            <Form.Label>Meta Desc</Form.Label>
            <Form.Control
              name="meta_desc"
              onChange={(e) => setData({ ...data, meta_desc: e.target.value })}
              as="textarea"
              placeholder="Enter Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="short_desc">
            <Form.Label>Short Desc</Form.Label>
            <Form.Control
              name="short_desc"
              onChange={(e) => setData({ ...data, short_desc: e.target.value })}
              as="textarea"
              placeholder="Enter Short Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="long_desc">
            <Form.Label>Long Desc</Form.Label>
            <Form.Control
              name="long_desc"
              onChange={(e) => setData({ ...data, long_desc: e.target.value })}
              as="textarea"
              style={{ height: "100px" }}
              placeholder="Enter Long Description"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="status"
            name="status"
            onChange={(e) => setData({ ...data, status: e.target.value })}
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
          <Modal.Title>Edit Keyword</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "500px" }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Keyword Name</Form.Label>
            <Form.Control
              onChange={(e) => {
                setEditItems({ ...editItems, name: e.target.value });
              }}
              value={editItems.name}
              placeholder="Enter New Keyword Name"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Keyword Title</Form.Label>
            <Form.Control
              name="title"
              value={editItems.title}
              onChange={(e) =>
                setEditItems({ ...editItems, title: e.target.value })
              }
              placeholder="Enter Keyword Title"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="meta_title">
            <Form.Label>Meta Title</Form.Label>
            <Form.Control
              name="meta_title"
              value={editItems.meta_title}
              onChange={(e) =>
                setEditItems({ ...editItems, meta_title: e.target.value })
              }
              placeholder="Enter Meta Title"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="meta_desc">
            <Form.Label>Meta Desc</Form.Label>
            <Form.Control
              name="meta_desc"
              value={editItems.meta_desc}
              onChange={(e) =>
                setEditItems({ ...editItems, meta_desc: e.target.value })
              }
              as="textarea"
              placeholder="Enter Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="short_desc">
            <Form.Label>Short Desc</Form.Label>
            <Form.Control
              name="short_desc"
              value={editItems.short_desc}
              onChange={(e) =>
                setEditItems({ ...editItems, short_desc: e.target.value })
              }
              as="textarea"
              placeholder="Enter Short Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="long_desc">
            <Form.Label>Long Desc</Form.Label>
            <Form.Control
              name="long_desc"
              value={editItems.long_desc}
              onChange={(e) =>
                setEditItems({ ...editItems, long_desc: e.target.value })
              }
              as="textarea"
              style={{ height: "100px" }}
              placeholder="Enter Long Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={editItems.status}
              onChange={(e) =>
                setEditItems({ ...editItems, status: e.target.value })
              }
            >
              <option value={1}>ACTIVE</option>
              <option value={0}>DISABLE</option>
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
