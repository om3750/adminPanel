import { Button, Nav, NavItem } from "reactstrap";
import React from "react";
import Logo from "./Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();
  let location = useLocation();

  const Sidelist = [
    {
      id: "1",
      item: "Catagory",
      path: "/category",
    },
    {
      id: "2",
      item: "Subcategory",
      path: "/subcategory",
    },
    {
      id: "3",
      item: "Style",
      path: "/style",
    },
    {
      id: "4",
      item: "Theme",
      path: "/theme",
    },
    {
      id: "5",
      item: "Keyword",
      path: "/keyword",
    },
    {
      id: "6",
      item: "Search Tags",
      path: "/tags",
    },
    {
      id: "7",
      item: "Interest",
      path: "/interest",
    },
    {
      id: "8",
      item: "Language",
      path: "/language",
    },
    {
      id: "9",
      item: "Editable Title",
      path: "/editabletitle",
    },
    {
      id: "10",
      item: "Template",
      path: "/template",
    },
  ];
  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
          ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          <NavItem className="sidenav-bg">
            <Link
              
              to="/starter"
              className={
                location.pathname === "/starter"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Dashboard</span>
            </Link>
          </NavItem>
          {/* <NavItem className="sidenav-bg">
            <Link
              
              to="/admin"
              className={
                location.pathname === "/admin"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              <i className={navi.icon}></i>
              <span className="ms-3 d-inline-block">Admin</span>
            </Link>
          </NavItem> */}
          {/* <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/"
              className={
                location.pathname === "/application"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              <i className={navi.icon}></i>
              <span className="ms-3 d-inline-block">Application</span>
            </Link>
          </NavItem> */}

          <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/fonts"
              className={
                location.pathname === "/fonts"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Fonts</span>
            </Link>
          </NavItem>
          <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>

          <NavItem className="sidenav-bg">
            <Link
              
              to="/customorders"
              className={
                location.pathname === "/customorders"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Custom Orders</span>
            </Link>
          </NavItem>
          <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>
          {Sidelist.map((items) => {
            const condition = items.path === location.pathname;
            return (
              <NavItem className="sidenav-bg" key={items.path}>
                <Link
                  
                  to={items.path}
                  className={
                    condition
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <span className="ms-3 d-inline-block">{items.item}</span>
                </Link>
              </NavItem>
            );
          })}
          <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>

          <NavItem className="sidenav-bg">
            <Link
              
              to="/stickerCategory"
              className={
                location.pathname === "/stickerCategory"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Sticker Category</span>
            </Link>
          </NavItem>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/stickerItem"
              className={
                location.pathname === "/stickerItem"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Sticker Item</span>
            </Link>
          </NavItem>
          <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>
          <NavItem className="sidenav-bg">
            <button
              className={
                location.pathname === "/backgroundCategory"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
              onClick={() => {
                navigate("/backgroundCategory");
                scrollToTop();
              }}
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Background Category</span>
            </button>
          </NavItem>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/backgroundItem"
              className={
                location.pathname === "/backgroundItem"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Background Item</span>
            </Link>
          </NavItem>
          <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/importJson"
              className={
                location.pathname === "/importJson"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Import Json</span>
            </Link>
          </NavItem>
          <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/employees"
              className={
                location.pathname === "/employees"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Employees</span>
            </Link>
          </NavItem>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/users"
              className={
                location.pathname === "/users"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Users</span>
            </Link>
          </NavItem>
          <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/package"
              className={
                location.pathname === "/package"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Subscription Package</span>
            </Link>
          </NavItem>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/payment_setting"
              className={
                location.pathname === "/payment_setting"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Payment Setting</span>
            </Link>
          </NavItem>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/transactionlogs"
              className={
                location.pathname === "/transactionlogs"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Transaction Logs</span>
            </Link>
          </NavItem>
          <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/nortification"
              className={
                location.pathname === "/nortification"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Nortification Setting</span>
            </Link>
          </NavItem>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/showmessage"
              className={
                location.pathname === "/showmessage"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">In App Message</span>
            </Link>
          </NavItem>
          <div className="h4 mx-3 mt-2 border-bottom border-grey"></div>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/feedback"
              className={
                location.pathname === "/feedback"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Feedback</span>
            </Link>
          </NavItem>
          <NavItem className="sidenav-bg">
            <Link
              
              to="/contacts"
              className={
                location.pathname === "/contacts"
                  ? "text-primary nav-link py-3"
                  : "nav-link text-secondary py-3"
              }
            >
              {/* <i className={navi.icon}></i> */}
              <span className="ms-3 d-inline-block">Contacts</span>
            </Link>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
