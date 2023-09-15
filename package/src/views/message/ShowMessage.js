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

export default function ShowMessage() {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [editItems, setEditItems] = useState({ name: "", status: "1" });
  const [isLoading, setIsLoading] = useState(true); // Add loading stateF
  const [dropdownOpen, setDropdownOpen] = useState([]);
  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value
  const [image, setImage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditShow = (items) => {
    setEditShow(true);
    setEditItems(items);
    setImage(items?.image);
  };
  const handleEditClose = () => setEditShow(false);

  const [data, setData] = useState({
    image: null,
    open_type: "1",
    keyword: "",
    link: "",
    is_banner: "1",
    can_cancle: "1",
    status: "1",
  });
  console.log("data", data);

  const navigate = useNavigate();

  const [isUploading, setIsUploading] = useState(false); // State for tracking uploading status

  const HandleSubmit = (event) => {
    setIsUploading(true); // Start uploading, show spinner

    const formData = new FormData();

    // Append all form fields to the FormData
    for (const key in data) {
      formData.append(key, data[key]);
    }

    axios
      .post(`${BaseURL}inAppMessage/addInAppMessage`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        setIsUploading(false);
        // Upload failed, hide spinner
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setIsUploading(false); // Upload failed, hide spinner
      });
  };

  const handleFileChange = (e) => {
    // Set the actual file object when the input value changes
    setData({ ...data, image: e.target.files[0] });
  };
  const handleEditFileChange = (e) => {
    // Set the actual file object when the input value changes
    setEditItems({ ...editItems, image: e.target.files[0] });
  };

  const HandleEditSubmit = () => {
    const formData = new FormData();

    // Append all form fields to the FormData
    for (const key in editItems) {
      formData.append(key, editItems[key]);
    }

    axios
      .post(
        `${BaseURL}inAppMessage/updateInAppMessage/${editItems._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log("res", res);
        window.location.reload(false);

        // navigate("/subcategory");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  useEffect(() => {
    axios.get(`${BaseURL}inAppMessage/showInAppMessage`).then((res) => {
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
    axios
      .post(`${BaseURL}inAppMessage/deleteInAppMessage/${id}`)
      .then((res) => {
        // After successful delete, you might want to refresh the data
        // Fetch the updated list of fonts
        axios.get(`${BaseURL}inAppMessage/showInAppMessage`).then((res) => {
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
                    Add
                  </Button>
                </div>
                <Table
                  className="no-wrap mt-3 align-middle"
                  responsive
                  borderless
                >
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
                    {currentItems.map((items, index) => {
                      return (
                        <tr className="border-top" key={items._id}>
                          {/* Add a unique key for each row */}
                          <td>{items._id}</td>
                          <td>
                            <img
                              style={{ height: "100%", width: "100px" }}
                              src={`${IPcalling}${items.image}`}
                              alt="Logo"
                            />
                          </td>

                          <td>{items.open_type}</td>
                          <td>{items.is_banner}</td>
                          <td>{items.can_cancle}</td>
                          <td>{items.keyword}</td>
                          <td>{items.link}</td>
                          <td>none</td>
                          <td>{items.status ? "ACTIVE" : " DISABLE"}</td>
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
          <Modal.Title>Add Message</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "500px" }}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              type="file"
              onChange={handleFileChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="open_type"
            name="open_type"
            onChange={(e) => setData({ ...data, open_type: e.target.value })}
          >
            <Form.Label>Type</Form.Label>
            <Form.Control as="select">
              <option value="1">Subscription</option>
              <option value="0">Package</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="keyword">
            <Form.Label>Keyword</Form.Label>
            <Form.Control
              type="text"
              name="keyword"
              onChange={(e) => setData({ ...data, keyword: e.target.value })}
              placeholder="Enter Keyword"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="link">
            <Form.Label>Link</Form.Label>
            <Form.Control
              name="link"
              onChange={(e) => setData({ ...data, link: e.target.value })}
              placeholder="Enter Link"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="is_banner"
            name="is_banner"
            onChange={(e) => setData({ ...data, is_banner: e.target.value })}
          >
            <Form.Label>Is Banner</Form.Label>
            <Form.Control as="select">
              <option value="1">TRUE</option>
              <option value="0">FALSE</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="can_cancle"
            name="can_cancle"
            onChange={(e) => setData({ ...data, can_cancle: e.target.value })}
          >
            <Form.Label>Can Cancle</Form.Label>
            <Form.Control as="select">
              <option value="1">TRUE</option>
              <option value="0">FALSE</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Select Date Range</Form.Label>
            <Form.Control
              type="date"
              className="mb-3 form-control"
              name="date"
              placeholder="select date"
              disabled
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
          <Modal.Title>Edit Message</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "500px" }}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              type="file"
              onChange={handleEditFileChange}
            />
            <img
              className="mt-3"
              src={`${IPcalling}${image}`}
              alt="image"
              width="150"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="open_type"
            name="open_type"
            value={editItems.open_type}
            onChange={(e) =>
              setEditItems({ ...editItems, open_type: e.target.value })
            }
          >
            <Form.Label>Type</Form.Label>
            <Form.Control as="select">
              <option value="1">Subscription</option>
              <option value="0">Package</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="keyword">
            <Form.Label>Keyword</Form.Label>
            <Form.Control
              type="text"
              name="keyword"
              value={editItems.keyword}
              onChange={(e) =>
                setEditItems({ ...editItems, keyword: e.target.value })
              }
              placeholder="Enter Keyword"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="link">
            <Form.Label>Link</Form.Label>
            <Form.Control
              name="link"
              value={editItems.link}
              onChange={(e) =>
                setEditItems({ ...editItems, link: e.target.value })
              }
              placeholder="Enter Link"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="is_banner"
            name="is_banner"
            value={editItems.is_banner}
            onChange={(e) =>
              setEditItems({ ...editItems, is_banner: e.target.value })
            }
          >
            <Form.Label>Is Banner</Form.Label>
            <Form.Control as="select">
              <option value="1">TRUE</option>
              <option value="0">FALSE</option>
            </Form.Control>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="can_cancle"
            name="can_cancle"
            value={editItems.can_cancle}
            onChange={(e) =>
              setEditItems({ ...editItems, can_cancle: e.target.value })
            }
          >
            <Form.Label>Can Cancle</Form.Label>
            <Form.Control as="select">
              <option value="1">TRUE</option>
              <option value="0">FALSE</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Select Date Range</Form.Label>
            <Form.Control
              type="date"
              className="mb-3 form-control"
              name="date"
              placeholder="select date"
              disabled
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="status"
            name="status"
            value={editItems.status}
            onChange={(e) =>
              setEditItems({ ...editItems, status: e.target.value })
            }
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
