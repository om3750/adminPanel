import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import axios from "axios";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";

export default function Package() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    status: "1",
  });

  const HandleSubmit = (event) => {
    axios
      .post(`${BaseURL}interest/addInterest`, data)
      .then((res) => {
        console.log("res", res);
        window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value
  useEffect(() => {
    axios.get(`${BaseURL}interest/showInterest`).then((res) => {
      setDatas(res.data.record);
      console.log("res", res.data.record);
    });
  }, []);
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [editItems, setEditItems] = useState({ name: "", status: true });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditShow = (items) => {
    setEditShow(true);
    setEditItems(items);
  };
  const handleEditClose = () => setEditShow(false);
  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
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
              <tr className="border-top">
                <td>12</td>
                <td>1 month</td>
                <td>30</td>
                <td>(299)(299) No offer</td>
                <td>(4.99)(4.99) No offer</td>
                <td>ACTIVE</td>
                <td>Actions</td>
              </tr>
            </tbody>
          </Table>
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
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Package Name</Form.Label>
              <Form.Control
                name="name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Package Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Descreption</Form.Label>
              <Form.Control
                name="descreption"
                onChange={(e) =>
                  setData({ ...data, descreption: e.target.value })
                }
                placeholder="Descreption"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="validity">
              <Form.Label>Validity (Day)</Form.Label>
              <Form.Control
                name="validity"
                onChange={(e) => setData({ ...data, validity: e.target.value })}
                placeholder="Validity"
                autoFocus
              />
            </Form.Group>
            <div className="row">
              <div className="col-lg-6">
              <Form.Group className="mb-3" controlId="aprice">
                <Form.Label>Actual Price ₹</Form.Label>
                <Form.Control
                  name="aprice"
                  onChange={(e) =>
                    setData({ ...data, aprice: e.target.value })
                  }
                  placeholder="Enter Price"
                />
              </Form.Group>
            </div>
              <div className="col-lg-6">
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price ₹</Form.Label>
                <Form.Control
                  name="price"
                  onChange={(e) =>
                    setData({ ...data, price: e.target.value })
                  }
                  placeholder="Enter Price"
                />
              </Form.Group>
            </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
              <Form.Group className="mb-3" controlId="aprice">
                <Form.Label>Actual Price $</Form.Label>
                <Form.Control
                  name="aprice"
                  onChange={(e) =>
                    setData({ ...data, aprice: e.target.value })
                  }
                  placeholder="Enter Price"
                />
              </Form.Group>
            </div>
              <div className="col-lg-6">
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price $</Form.Label>
                <Form.Control
                  name="price"
                  onChange={(e) =>
                    setData({ ...data, price: e.target.value })
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
              <Form.Label>Status</Form.Label>
              <Form.Control as="select">
                <option value="1">ACTIVE</option>
                <option value="0">DEACTIVE</option>
              </Form.Control>
            </Form.Group>
          </Form>
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

      {/* <Modal
        show={editShow}
        onHide={handleEditClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Keyword</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{width:"500px"}}>
          <Form>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={editItems.status}
                onClick={(e) =>
                  setEditItems({ ...editItems, status: e.target.value })
                }
              >
                <option value={true}>ACTIVE</option>
                <option value={false}>DISABLE</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Button className="w-100" variant="primary" onClick={handleEditClose}>
            Submit
          </Button>
        </Modal.Body>
      </Modal> */}
    </div>
  );
}
