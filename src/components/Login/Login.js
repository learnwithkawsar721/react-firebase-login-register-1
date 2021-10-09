import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import register_img from "../../images/signup-image.jpg";
import "../Register/Register.css";

const Login = (props) => {
  const { signInWithGoogle, signInWithGitHub } = useAuth();
  return (
    <div className="register">
      <div className="register-content">
        <h1 className="form-title">Login</h1>
        <form>
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
            <Link to="/register">Create a New Account</Link>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              {" "}
              Login{" "}
            </button>
          </div>
        </form>
        <hr />
        <div className="form-group">
          <button className="btn google" onClick={signInWithGoogle}>
            <i className="fab fa-google-plus-g"></i>
          </button>
          <button className="btn github" onClick={signInWithGitHub}>
            Git-hub Signin
          </button>
        </div>
      </div>
      <div className="register-img">
        <img src={register_img} alt="" />
      </div>
    </div>
  );
};

export default Login;
