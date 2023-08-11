import React from "react";
import "../style/login.scss"
import {  useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="row loginContainer">
        <div className="offset-lg-3 col-lg-6">
          <form className="container">
            <div className="card">
              <div className="card-header">
                <h2>Login</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>
                    User Name <span className="errMsg">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                  ></input>
                </div>
                <div className="form-group">
                  <label>
                    Password <span className="errMsg">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                  ></input>
                </div>
                <div className="card-footer">
                  {" "}
                  <button type="submit" className="btn ">
                    Login
                  </button>
                  <button className="btn registerBtn" onClick={()=>navigate("/register")}>
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
