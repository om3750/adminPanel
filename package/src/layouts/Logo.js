// import { ReactComponent as LogoDark } from "../assets/images/logos/xtremelogo.svg";
import image from "../../src/assets/images/logos/craftyart_main_logo.png";
import { Link } from "react-router-dom";
// import Image from 'react-bootstrap'

const Logo = () => {
  return (
    <Link to="/">
      <div className="navbar-brand" href="/">
          <img src={image} className="ms-5" height="30" alt="" />
        </div>
      {/* <LogoDark /> */}
    </Link>
  );
};

export default Logo;
