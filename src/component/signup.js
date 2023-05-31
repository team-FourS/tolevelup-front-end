import React from 'react';
import '../css/signup.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/base';


function Signup() {
  
  return (
    <div className="signUpForm"> 
      <div className="signUpID">
        <p className="signUpTitle">Sign Up</p>          
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

      <div className="signUpID">
        <TextField classname ="signUpBox"
          label="Name"
          type="Name" name="Name"
          autoComplete="Name"/> 
      </div>

        <TextField classname ="signUpBox"
          label="Email"
          type="Email" name="Email"
          autoComplete="Email"/>  

        <Button type="submit" className="btnsignUp">
          SignUp
        </Button> <br/>
        </div>

  );
}

export default Signup;