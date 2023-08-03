import React, { useState } from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";
import { Form, Modal } from "react-bootstrap";

export default function KeyWord() {
  const navigate = useNavigate();
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
              onClick={() =>handleShow()}
              className="m-2 btn"
            >
              Add Keyword
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
              <tr className="border-top">
                <td>1</td>
                <td>Om Kakadiya</td>
                <td>ACTIVE</td>
                <td>
                  {" "}
                  <FiMoreVertical />
                </td>
              </tr>
              <tr className="border-top">
                <td>1</td>
                <td>Om Kakadiya</td>
                <td>ACTIVE</td>
                <td>
                  {" "}
                  <FiMoreVertical />
                </td>
              </tr>
              <tr className="border-top">
                <td>1</td>
                <td>Om Kakadiya</td>
                <td>ACTIVE</td>
                <td>
                  {" "}
                  <FiMoreVertical />
                </td>
              </tr>
              <tr className="border-top">
                <td>1</td>
                <td>Om Kakadiya</td>
                <td>ACTIVE</td>
                <td>
                  {" "}
                  <FiMoreVertical />
                </td>
              </tr>
            </tbody>
          </Table>
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
        <Modal.Body  style={{width:"500px"}}>
          <Form > 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Keyword</Form.Label>
              <Form.Control placeholder="Enter Keyword" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Keyword Title</Form.Label>
              <Form.Control placeholder="Enter Keyword Title" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Meta Title</Form.Label>
              <Form.Control placeholder="Enter Meta Title" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Meta Desc</Form.Label>
              <Form.Control as="textarea" placeholder="Enter Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Short Desc</Form.Label>
              <Form.Control as="textarea" placeholder="Enter Short Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Long Desc</Form.Label>
              <Form.Control as="textarea" style={{ height: '100px' }} placeholder="Enter Long Description" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Status</Form.Label>
              <Form.Control as="select">
                <option value="">ACTIVE</option>
                <option value="">DEACTIVE</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <Button className="w-100" variant="primary" onClick={handleClose}>
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
      </Modal>
    </div>
  );
}
