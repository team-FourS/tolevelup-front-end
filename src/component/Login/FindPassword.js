import React from 'react';
import '../../css/login/FindPassword.css'
import {Routes, Route} from "react-router-dom";
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
import Login from "./Login";
import logo from '../../img/smallLogo.png';

function FindPassword() {
  
  return (
    <body className='Findpassword_body'>
    <div className="LoginLayout">
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>

      <div className="findPassword-Form"> 
        <div className="loginID">
          <p className="loginTitle">비밀번호 찾기</p>  
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

        <Button type="submit" className="btnLogin" >
          아이디 찾기
        </Button>
      </div>
    </div>
    </body>
  );
}

export default FindPassword;