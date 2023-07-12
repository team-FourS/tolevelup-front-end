import React from 'react';
import '../css/login.css'
import { Checkbox, TextField } from '@mui/material';
import { Button } from '@mui/base';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Routes, Route, Link} from "react-router-dom";
import Mission from "./Mission"
import Signup from "./signup"
import logo from '../img/smallLogo.png';

import naver from '../img/naver.png';
import google from '../img/google.png';
import kakao from '../img/kakao.png';

function Login() {
  
  return (
    <div className='loginback'>
      <Routes>     
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      
      <div className="loginForm"> 
        <div className="loginID">
          <p className="loginTitle">로그인</p>  
          <img className="loginLogo" src={logo} alt="로고" />

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
        
        <div className="find">
          <a href="#!">아이디 찾기  </a> |
          <a href="#!"> 비밀번호 찾기 </a> <br/>
        </div>

        <img className="naver" src={naver} alt="네이버" />
        <img className="google" src={google} alt="구글" />
        <img className="kakao" src={kakao} alt="카카오" />

        <Link to="/Mission">
          <Button type="submit" className="btnLogin">
            로그인
          </Button> <br/><br/>
        </Link>

          <Link to="/signup" className="signup">
              ToLevelUp 회원가입 > 
          </Link>
        </div>
      </div>
  );
}

export default Login;