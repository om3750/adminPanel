import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import axios from "axios";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";
export default function EditableTitle() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    brand_id: "",
    status: "1",
  });

  const HandleSubmit = (event) => {
    axios
      .post(`${BaseURL}editableMode/addEditableMode`, data)
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
    axios.get(`${BaseURL}editableMode/showEditableMode`).then((res) => {
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
              Add Title
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>brand_id</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((items) => {
                return (
                  <tr className="border-top" key={items.no}>
                    {" "}
                    {/* Add a unique key for each row */}
                    <td>{items._id}</td>
                    <td>{items.name}</td>
                    <td>{items.brand_id}</td>
                    <td>{items.status ? "ACTIVATE" : "DESABLE"}</td>
                    <td>Button</td>
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
          <Modal.Title>Add Title</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "400px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Title Name</Form.Label>
              <Form.Control
                name="name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Enter Title Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Brand ID</Form.Label>
              <Form.Control
                name="brand_id"
                onChange={(e) => setData({ ...data, brand_id: e.target.value })}
                placeholder="Enter Brand ID"
                autoFocus
              />
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
