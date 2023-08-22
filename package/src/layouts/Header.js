import React from "react";
import image2 from "../assets/images/users/user1.jpg";
import { Image, Container } from "react-bootstrap";
import {
  Navbar,
  Collapse,
  Nav,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import user1 from "../assets/images/users/user1.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const uname = localStorage.getItem("uname");
  const umail = localStorage.getItem("umail");

  return (
    <Navbar className="bg-body-tertiary" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          {/* <image2 /> */}
        </NavbarBrand>
        <Button
          color="white"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="white"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar></Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="white">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <Container style={{ width: "100%" }}>
              <div className="container text-center p-0">
                <div className="d-flex align-items-center justify-content-start">
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
                    <div className="text-start fw-bold">{uname}</div>
                    <div className="text-start">{umail}</div>
                  </div>
                </div>
              </div>
            </Container>
            <DropdownItem divider />
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem
              onClick={() => {
                localStorage.clear();
                navigate("/");
                window.location.reload();
              }}
            >
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
