import 'boxicons';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <nav className="nav-responsive">
        <ul>
          <li>
            <Link to="/">
              <span>
                <box-icon
                  name="home"
                  size="30px"
                  className="icon-home"
                ></box-icon>
              </span>
              Home
            </Link>
          </li>
          <li>
            <Link to="/account">
              <span>
                <box-icon
                  type="solid"
                  name="user-account"
                  size="30px"
                  className="icon-login"
                ></box-icon>
              </span>
              Account
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>
                <box-icon
                  name="envelope"
                  size="30px"
                  className="icon-mail"
                ></box-icon>
              </span>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">
              <box-icon
                name="home"
                size="30px"
                className="icon-home"
                color="#fff"
              ></box-icon>
            </Link>
          </li>
          <li>
            <Link to="/account">
              <box-icon
                type="solid"
                name="user-account"
                size="30px"
                className="icon-login"
                color="#fff"
              ></box-icon>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <box-icon
                name="envelope"
                size="30px"
                className="icon-mail"
                color="#fff"
              ></box-icon>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
