import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user ? user : null);
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shipping">shipping</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <span> {user.displayName} </span>
        </li>
        {user?.email && (
          <li>
            <button className="btn" onClick={logOut}>
              Log Out
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
