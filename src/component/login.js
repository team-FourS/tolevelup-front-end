import React from 'react';
import '../css/login.css'
import { Checkbox, TextField } from '@mui/material';
import { Button } from '@mui/base';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Routes, Route, Link} from "react-router-dom";
import Mission from "./Mission"

function Login() {
  
  return (
    <>
    <Routes>     
      <Route path="/Mission" element={<Mission />} />
    </Routes>
    <div className="loginForm"> 
      <div className="loginID">
        <p className="loginTitle">Login</p>  
        <TextField className="loginBox"
          label="ID" name="ID"
          autoComplete="ID"
          autoFocus/> <br/>
      </div>
      <TextField className="loginBox" label="Password"
        type="password" name="password"
        autoComplete="password"/> <br/>  

      <FormControlLabel className="keepLogin"
        control={<Checkbox value="remember" 
        color="primary"/>} label="로그인 상태 유지"/> <br/>
      
      <Link to="/Mission">
        <Button type="submit" className="btnLogin">
          Login
        </Button> <br/><br/>
      </Link>

        <a href="#!">아이디 찾기  </a> |
        <a href="#!"> 비밀번호 찾기 </a> |
        <a href="#!"> 회원가입 </a>
      </div>
      </>
  );
}

export default Login;