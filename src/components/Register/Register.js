import React from "react";
import "./Register.css";
import register_img from "../../images/signup-image.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="register-content">
        <h1 className="form-title">Register</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">
              <i className="fas fa-user"></i>
            </label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>
            </label>
            <input type="email" id="email" placeholder="Your E-mail" />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
            </label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="re-password">
              <i className="fas fa-lock"></i>
            </label>
            <input
              type="password"
              id="re-password"
              placeholder="Repeat Password"
            />
          </div>
          <div className="form-group">
            <Link to="/login">I am a Already Member</Link>
          </div>
          <div className="form-group">
            <button className="btn" type="submit"> Register </button>
          </div>
        </form>
      </div>
      <div className="register-img">
        <img src={register_img} alt="" />
      </div>
    </div>
  );
};

export default Register;
