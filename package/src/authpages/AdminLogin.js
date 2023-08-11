import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BaseURL from "../urls/BaseUrl";

export default function AdminLogin() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const HandleSubmit = (event) => {
    event.preventDefault();
    // console.log('url',BaseURL);
    axios
      .post(`${BaseURL}employee/login`, data)
      .then((res) => {
        console.log("res", res);
        // localStorage.setItem("token", "done");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("uname", res.data.name);
        localStorage.setItem("umail", res.data.email);
        // localStorage.setItem('user',res.data.token);
        console.log(token);
        handleClose();
        window.location.reload(false);
        
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  const [show, setShow] = useState(true);

  return (
    <Modal
      show={show}
      className="align-items-center"
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
      <h3 className="text-center mt-4 fw-bold">Welcome Back to CraftyArt!</h3>
      <div className="text-center mb-2">It sure is great to see you again.</div>
      <hr style={{ borderColor: "#999" }} className="m-3 " />

      <Modal.Body style={{ width: "400px" }}>
        <Form>
          {" "}
          {/* Use onSubmit to handle form submission */}
          <Form.Group className="mb-3 mx-4 card" controlId="email">
            <Form.Control
              placeholder="Email"
              value={data?.email}
              autoFocus
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3 mx-4 card" controlId="password">
            <Form.Control
              placeholder="Password"
              autoFocus
              value={data?.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.Checkbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button
            className={`w-100 mb-2`}
            style={{ height: "45px" }}
            variant="primary"
            type="submit"
            onClick={HandleSubmit}
          >
            Log In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
