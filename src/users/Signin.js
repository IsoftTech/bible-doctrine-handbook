import React from 'react';
import './loginStyle.css';
import { Link } from "react-router-dom";
import Bible from "./Login.jpg";
import Logo from "./bdh.png";


function Signin() {
    return (
        <div>
<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
  <div className="card card0 border-0">
    <div className="row d-flex">
      <div className="col-lg-6">
        <div className="card1 pb-5">

          <div className="row"> <img src= {Logo} className= "logo" /> </div>
          <div className="row"> <img src="https://i.imgur.com/CXQmsmF.png" className="logo" /> </div>

          <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={Bible} className="image" /> </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card2 card border-0 px-4 py-5">
          <div className="row mb-4 px-3">
            <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>

            <div className="google text-center mr-3">

            <div className="facebook text-center mr-3">
              <div className="fab fa-google-plus" />
            </div>
          </div>
          <div className="row px-3 mb-4">
            <div className="line" /> <small className="or text-center">Or</small>
            <div className="line" />
          </div>
          <div className="row px-3"> <label className="mb-1">
              <h6 className="mb-0 text-sm">Email Address</h6>
            </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
             </div>


          <div className="row px-3"> <label className="mb-1">
              <h6 className="mb-0 text-sm">Password</h6>
            </label> <input type="password" name="password" placeholder="Enter password" /> 
            </div>

          <div className="row px-3 mb-4">
            <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
          </div>

          <div className="row mb-3 px-3"> <Link to="/admin"> <button type="submit" className="bt btn-outline text-center">Login</button> </Link></div>

          <div className="row mb-3 px-3"> <Link to="/admin"> <button type="submit" className="btn-white text-center">Login</button> </Link></div>

          <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <Link to="/signup" className="text-green ">Register</Link></small> </div>
        </div>
      </div>
    </div>
    <div className="bg-green py-4">
      <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright © 2020. All rights reserved.</small></div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Signin;
