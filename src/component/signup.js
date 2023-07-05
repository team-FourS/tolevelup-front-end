import React from 'react';
import '../css/signup.css'
import {Routes, Route, Link} from "react-router-dom";
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
import Login from "./login";

function Signup() {
  
  return (
    <div className="LoginLayout">
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>

    <div className="signUpForm"> 
      <div className="signUpID">
        <p className="signUpTitle">Sign Up</p>          
        <TextField classname ="signUpBox"
          label="Name"
          type="Name" name="Name"
          autoComplete="Name"/> 
      </div>

      <div className="signUpID">
      <TextField classname ="signUpBox"
          label="Email"
          type="Email" name="Email"
          autoComplete="Email"/>
      </div>

      <div className="signUpID">
      <TextField classname ="signUpBox"
          label="ID" name="ID"
          autoComplete="ID"
          autoFocus/> <br/>
      </div>

      <div className="signUpID">
      <TextField classname ="signUpBox"
          label="Password"
          type="password" name="password"
          autoComplete="password"/>
      </div>

      <Link to="/login">
        <Button type="submit" className="btnsignUp">
          SignUp
        </Button> <br/>
      </Link>   
        </div>  
      </div>  
  );
}

export default Signup;