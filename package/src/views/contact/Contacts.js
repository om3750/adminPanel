import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Image } from "react-bootstrap";
import image2 from "../../assets/images/users/user1.jpg";


export default function Category() {
  const [searchInput, setSearchInput] = useState("");
  const name = [
    { name: "Crafty Art", number: "+91 7418529630" },
    { name: "Om Kakadiya", number: "+91 8529637410" },
    { name: "Harshil Maiyani", number: "+91 7974563210" },
    { name: "Tejas Lakhani", number: "+91 6873549894" },
    { name: "Sanjay Bhai", number: "+91 9637410852" },
    { name: "Vaibhav", number: "+91 8527419630" },
    { name: "Crafty Art", number: "+91 7418529630" },
    { name: "Om Kakadiya", number: "+91 8529637410" },
    { name: "Harshil Maiyani", number: "+91 7974563210" },
    { name: "Tejas Lakhani", number: "+91 6873549894" },
    { name: "Sanjay Bhai", number: "+91 9637410852" },
    { name: "Vaibhav", number: "+91 8527419630" },
    { name: "Crafty Art", number: "+91 7418529630" },
    { name: "Om Kakadiya", number: "+91 8529637410" },
    { name: "Harshil Maiyani", number: "+91 7974563210" },
    { name: "Tejas Lakhani", number: "+91 6873549894" },
    { name: "Sanjay Bhai", number: "+91 9637410852" },
    { name: "Vaibhav", number: "+91 8527419630" },  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredList = name.filter((names) =>
    names.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const chatData = [
    {
      name: "Om Kakadiya",
      number: "+91 84658 98756",
      message: "Hello!",
      time: "10:00 AM",
      isSender: false,
    },
    {
      name: "Me",
      number: "+91 98765 43210",
      message: "Hi, Where are you from?",
      time: "10:05 AM",
      isSender: true,
    },
    {
      name: "Om Kakadiya",
      number: "+91 84658 98756",
      message: "I'm from Infiapp solution, you?",
      time: "10:07 AM",
      isSender: false,
    },
    {
      name: "Om Kakadiya",
      number: "+91 84658 98756",
      message: "Great, me too!!",
      time: "10:07 AM",
      isSender: true,
    },
    {
      name: "Me",
      number: "+91 98765 43210",
      message: "How are you?",
      time: "10:05 AM",
      isSender: true,
    },
    {
      name: "Om Kakadiya",
      number: "+91 84658 98756",
      message: "I'm good, thank you!",
      time: "10:07 AM",
      isSender: false,
    },
  ];

  return (
    <div className="h-100 mainContent">
      <Card>
        <CardBody>
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3">
              <Card className="bg-body-tertiary rounded m-0 p-0">
                <div>
                  <div className="p-3">
                    <input
                      className="form-control w-100 mb-3"
                      type="search"
                      placeholder="Search here"
                      onChange={handleChange}
                      value={searchInput}
                    />
                  </div>

                  <div
                    className="overflow-auto text-center p-0"
                    style={{ maxHeight: "450px" }}
                  >
                    {filteredList.map((item, index) => (
                      <div
                        key={index}
                        className="border-top d-flex align-items-center justify-content-start p-3"
                      >
                        <div>
                          <Image
                            roundedCircle
                            src={image2}
                            className="me-3"
                            height="40"
                            alt=""
                          />
                        </div>
                        <div>
                          <div className="text-start fw-bold">{item.name}</div>
                          <div className="text-start">{item.number}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Chat Page */}
            <div className="col-lg-9 d-flex flex-column">
              {/* Chat Header */}
              <div
                className="rounded"
                style={{
                  height: "80px",
                  display: "flex",
                  backgroundColor: "#f5f5f5",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="d-flex align-items-center justify-content-start p-3">
                  <div>
                    <Image
                      roundedCircle
                      src={image2}
                      className="me-3"
                      height="60"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="text-start fw-bold">Om Kakadiya</div>
                    <div className="text-start">+91 84658 98756</div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                className="rounded overflow-auto mt-3 flex-grow-1"
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: "10px",
                  height: '300px',
                }}
              >
                {chatData.map((chat, index) => (
                  <div
                    key={index}
                    className={`d-flex ${
                      chat.isSender ? "justify-content-end" : "justify-content-start"
                    } mb-2`}
                  >
                    <div
                      className={`bg-light p-2 rounded ${
                        chat.isSender ? "bg-primary text-black" : ""
                      }`}
                    >
                      {/* <div className="fw-bold" style={{ fontSize: "0.6rem", color:'grey' }}>{chat.name}</div> */}
                      <div>{chat.message}</div>
                      <div className="text-end" style={{ fontSize: "0.6rem" }}>
                        {chat.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Type Box */}
              <div
                className="rounded mt-3"
                style={{
                  height: "80px",
                  display: "flex",
                  backgroundColor: "#f5f5f5",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <div className="input w-100">
                  <input
                    type="text"
                    placeholder="Type something..."
                    className="form-control"
                  />
                </div>
                <div className="send ms-3">
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
