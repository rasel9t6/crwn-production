import "./navigation.style.scss";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <Link className="nav-links-container" to="/shop">
          <div className="nav-link">Shop</div>
        </Link>
        <Link className="nav-links-container" to="/sign-in">
          <div className="nav-link">Sign In</div>
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
