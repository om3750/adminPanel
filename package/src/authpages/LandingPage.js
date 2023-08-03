import React from "react";
import { Button } from "reactstrap";
import Logo from "../layouts/Logo";
// import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
// import AdminLogin from "./AdminLogin";
import { useNavigate } from "react-router-dom";

const LandingPageHeader = () => {
  // const handleSignIn = () => {
  //   localStorage.setItem("token", "done");
  //   window.location.reload();
  // };

  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center justify-content-between bg-body-tertiary py-3 px-4">
      <div>
        <Logo width="100" />
      </div>
      <div>
        <Button color="secondary" onClick={()=> {(navigate('/adminlogin'))}}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

const LandingPage = () => {
  // Your existing landing page content here

  return (
    <div className="d-flex flex-column min-vh-100">
      <LandingPageHeader />
      <div className="container-fluid flex-grow-1">
        <header className="text-center mt-5">
          <h1>CraftyArt</h1>
          <p className="lead">It sure is great to see you again!</p>
        </header>
        {/* Your other content goes here */}
      </div>
      <footer className="text-center py-3 bg-light">
        <p>&copy; {new Date().getFullYear()} CraftyArt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
