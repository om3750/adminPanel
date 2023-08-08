import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import axios from "axios";
import { Button, Card, CardBody, Table } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";

export default function Admin() {
  // const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    user_type: "1",
  });

  const HandleSubmit = () => {
    axios
      .post(`${BaseURL}employee/createUser`, data)
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
    axios.get(`${BaseURL}employee/showAllUser`).then((res) => {
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
              Add Admin
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>NO.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Employee Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((items) => {
                return (
                  <tr className="border-top" key={items.no}>
                    {/* Add a unique key for each row */}
                    <td>{items._id}</td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.user_type}</td>
                    <td>button</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
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
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "400px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Enter Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Enter Email ID"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                // type="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                placeholder="Enter Password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="user_type">
              <Form.Label>Type</Form.Label>
              <Form.Control
                name="user_type"
                onChange={(e) =>
                  setData({ ...data, user_type: e.target.value })
                }
                as="select"
              >
                <option value="">-- Select Type --</option>
                <option value="0">designer</option>
                <option value="1">programmer</option>
                <option value="2">employeer</option>
                <option value="3">sco</option>
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
          <Form>
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
