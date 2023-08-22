import React from 'react';
import '../../css/login/signup.css'
import {Routes, Route, Link} from "react-router-dom";
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
import Login from "../Login/Login";
import logo from '../../img/smallLogo.png';

function Signup() {
  
  return (
    <body className='signup_body'>
    <div className="LoginLayout">
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>

      <div className="signUpForm"> 
        <div className="signUpID">
          <p className="loginTitle">회원가입</p>  
          <img className="loginLogo" src={logo} alt="로고" />

          <TextField className="loginBox"
            label="Name" name="Name"
            autoComplete="Name"
            autoFocus/> <br/>
        </div>

        <div className="signUpID">
          <TextField className="loginBox" label="Email"
            type="Email" name="Email"
            autoComplete="Email"/> <br/>  
        </div>

        <div className="signUpID">
          <TextField className="loginBox" label="ID"
            type="ID" name="ID"
            autoComplete="ID"/> <br/> 
        </div>

        <TextField className="loginBox" label="Password"
          type="Password" name="Password"
          autoComplete="Password"/> <br/>   

        <Link to="/Mission">
          <Button type="submit" className="btnLogin">
            회원가입
          </Button> <br/><br/>
        </Link>

        </div>
      </div>
      </body>  
  );
}

export default Signup;