/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { Navigation } from "./styles";

const LinkNavigation = () => {
  return (
    <Navigation>
      <Link to="/">
        <a>Collections</a>
      </Link>
      <Link to="/">
        <a>Men</a>
      </Link>
      <Link to="/">
        <a>Women</a>
      </Link>
      <Link to="/">
        <a>About</a>
      </Link>
      <Link to="/">
        <a>Contact</a>
      </Link>
    </Navigation>
  );
};

export default LinkNavigation;
