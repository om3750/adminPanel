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

export default function Package() {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState([]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  const [data, setData] = useState({
    package_name: "",
    desc: "",
    validity: "",
    price: "",
    actual_price: "",
    price_dollar: "",
    actual_price_dollar: "",
    status: "1",
  });

  const HandleSubmit = (event) => {
    axios
      .post(`${BaseURL}subscription/addSubscription`, data)
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
        `${BaseURL}subscription/updateSubscription/${editItems._id}`,
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
    axios.get(`${BaseURL}subscription/showSubscription`).then((res) => {
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
  const [editItems, setEditItems] = useState({
    package_name: "",
    desc: "",
    validity: "",
    price: "",
    actual_price: "",
    price_dollar: "",
    actual_price_dollar: "",
    status: "1",
  });
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
      .post(`${BaseURL}subscription/deleteSubscription/${id}`)
      .then((res) => {
        // After successful delete, you might want to refresh the data
        // Fetch the updated list of fonts
        axios.get(`${BaseURL}subscription/showSubscription`).then((res) => {
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
              Add Package
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Id</th>
                <th>package Name</th>
                <th>Validity(Day)</th>
                <th>Price(Rs.)</th>
                <th>Price($)</th>
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
                    <td>{items.package_name}</td>
                    <td>{items.validity}</td>
                    <td>{items.price}</td>
                    <td>{items.price_dollar}</td>
                    <td>{items.status ? "ACTIVE" : "DISABLE"}</td>
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
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Package</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "500px" }}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Package Name</Form.Label>
            <Form.Control
              name="package_name"
              onChange={(e) =>
                setData({ ...data, package_name: e.target.value })
              }
              placeholder="Package Name"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Descreption</Form.Label>
            <Form.Control
              name="desc"
              onChange={(e) => setData({ ...data, desc: e.target.value })}
              placeholder="Descreption"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Validity (Day)</Form.Label>
            <Form.Control
              name="validity"
              onChange={(e) => setData({ ...data, validity: e.target.value })}
              placeholder="Validity"
              autoFocus
            />
          </Form.Group>
          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label className="mb-0">Actual Price ₹</Form.Label>
                <Form.Control
                  name="actual_price"
                  onChange={(e) =>
                    setData({ ...data, actual_price: e.target.value })
                  }
                  placeholder="Enter Actual Price"
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label className="mb-0">Price ₹</Form.Label>
                <Form.Control
                  name="price"
                  onChange={(e) => setData({ ...data, price: e.target.value })}
                  placeholder="Enter Price"
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label className="mb-0">Actual Price $</Form.Label>
                <Form.Control
                  name="actual_price_dollar"
                  onChange={(e) =>
                    setData({ ...data, actual_price_dollar: e.target.value })
                  }
                  placeholder="Enter Price"
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label className="mb-0">Price $</Form.Label>
                <Form.Control
                  name="price_dollar"
                  onChange={(e) =>
                    setData({ ...data, price_dollar: e.target.value })
                  }
                  placeholder="Enter Price"
                />
              </Form.Group>
            </div>
          </div>

          <Form.Group
            className="mb-3"
            controlId="status"
            name="status"
            onChange={(e) => setData({ ...data, status: e.target.value })}
          >
            <Form.Label className="mb-0">Status</Form.Label>
            <Form.Control as="select">
              <option value="1">ACTIVE</option>
              <option value="0">DEACTIVE</option>
            </Form.Control>
          </Form.Group>
          <Button
            className="mt-2 w-100"
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
          <Modal.Title>Edit Subcategory</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "500px" }}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Package Name</Form.Label>
            <Form.Control
              name="package_name"
              onChange={(e) =>
                setEditItems({ ...editItems, package_name: e.target.value })
              }
              value={editItems.package_name}
              placeholder="Package Name"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Package Name</Form.Label>
            <Form.Control
              name="desc"
              value={editItems.desc}
              onChange={(e) =>
                setEditItems({ ...editItems, desc: e.target.value })
              }
              placeholder="Description"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Validity (Day)</Form.Label>
            <Form.Control
              name="validity"
              value={editItems.validity}
              onChange={(e) =>
                setEditItems({ ...editItems, validity: e.target.value })
              }
              placeholder="validity"
              autoFocus
            />
          </Form.Group>
          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label className="mb-0">Actual Price ₹</Form.Label>
                <Form.Control
                  name="actual_price"
                  value={editItems.actual_price}
                  onChange={(e) =>
                    setEditItems({ ...editItems, actual_price: e.target.value })
                  }
                  placeholder="actual price"
                  autoFocus
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label className="mb-0">Price ₹</Form.Label>
                <Form.Control
                  name="price"
                  value={editItems.price}
                  onChange={(e) =>
                    setEditItems({ ...editItems, price: e.target.value })
                  }
                  placeholder="price"
                  autoFocus
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label className="mb-0">Actual Price $</Form.Label>
                <Form.Control
                  name="actual_price_dollar"
                  value={editItems.actual_price_dollar}
                  onChange={(e) =>
                    setEditItems({
                      ...editItems,
                      actual_price_dollar: e.target.value,
                    })
                  }
                  placeholder="actual price dollar"
                  autoFocus
                />
              </Form.Group>
            </div>
            <div className="col-lg-6">
              <Form.Group className="mb-3">
                <Form.Label className="mb-0">Price $</Form.Label>
                <Form.Control
                  name="price_dollar"
                  value={editItems.price_dollar}
                  onChange={(e) =>
                    setEditItems({ ...editItems, price_dollar: e.target.value })
                  }
                  placeholder="Enter Price"
                />
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Control
                name="status"
                onChange={(e) =>
                  setEditItems({ ...editItems, status: e.target.value })
                }
                value={editItems.status}
                as="select"
              >
                <option value="">-- Select Type --</option>
                <option value="0">DISABLE</option>
                <option value="1">ACTIVE</option>
              </Form.Control>
            </Form.Group>
          </div>
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
