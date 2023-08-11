import React from 'react'
import "../style/registration.scss"

const Registration = () => {
 
  return (
    <>
   
     <div id="register" className="offset-lg-3 col-lg-6">
        <form className="container" >
          <div className="card">
            <div className="card-header">
              <h2>New User Registration</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errMsg">*</span>
                    </label>
                    <input className="form-control" name="username"  ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password<span className="errMsg">*</span>
                    </label>
                    <input type="password" className="form-control"  name="password" ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Full Name<span className="errMsg">*</span>
                    </label>
                    <input type="text" className="form-control" name="name" ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email<span className="errMsg" >*</span>
                    </label>
                    <input type="email" className="form-control" name="email" ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Mobile Number<span className="errMsg">*</span>
                    </label>
                    <input type="number" className="form-control" name="mobileNo" ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Country<span className="errMsg">*</span>
                    </label>
                    <select className="form-control" name="country" >
                      <option value="null">Select Country ▽</option>
                      <option value="india">INDIA</option>
                      <option value="usa">USA</option>
                      <option value="Russia">Russia</option>
                      <option value="Germany">Germany</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      Address (city)<span className="errMsg">*</span>
                    </label>
                    <textarea className="form-control" name="address" ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Gender
                    </label>
                    <br/>
                    <input type="radio" className="app-check" value="male"/>
                    <label>Male</label>
                    <input type="radio" className="app-check" value="female" />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              
            </div>
          </div>
        </form>
      </div>
    
    </>
  )
}

export default Registration
