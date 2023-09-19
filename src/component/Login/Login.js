import React,{useState} from 'react';
import '../../css/login/login.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
// import FormControlLabel from '@mui/material/FormControlLabel';
import {Routes, Route, Link, useLocation} from "react-router-dom";
import Mission from "../Mission/Mission";
import Signup from "../Login/Signup";
import axios from 'axios';
import logo from '../../img/smallLogo.png';
import naver from '../../img/naver.png';
import google from '../../img/google.png';
import kakao from '../../img/kakao.png';

function Login() {

  const location = useLocation();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("click login");
    console.log("ID : ", inputId);
    console.log("PW : ", inputPw);
    axios({
        url: 'api/v1/users/login',
        method: 'POST',
        data: {
          id: inputId,
          password: inputPw
        },
      })
      .then((res) => {
        localStorage.setItem('token',res.data.result.token);
        console.log(res.data.result.token);
        document.location.href = "/Mission";
      })
      .catch((error)=>{
        console.log(error);
      });
  };

  return (
    <body className='login_body'>
    <div className='totalLogin'>
      <Routes location={location} key={location.pathname}>     
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      
      <div className="loginForm"> 
          <p className="loginTitle">로그인</p>  
          <img className="loginLogo" src={logo} alt="로고" />
        
        <div className="idField">
        <TextField className="loginBox"
            label="ID"
            value={inputId}
            onChange={handleInputId}
            name="ID"
            autoComplete="ID"
            autoFocus/> <br/>
        </div>
        <TextField className="loginBox" label="Password"
          type="password"
          value={inputPw}
          onChange={handleInputPw}
          name="password"
          autoComplete="password"/> <br/>  

        {/* <FormControlLabel className="keepLogin"
          control={<Checkbox value="remember" 
          color="primary"/>} label="로그인 상태 유지"/> <br/> */}
        
        <div className="find">
          {/* <Link to="/FindID" className="findID">
            아이디 찾기  |
        </Link> */}

          <Link to="/FindPassword" className="findPassword">
            비밀번호 찾기
          </Link>
        
          <Link to="/signup" className="signUp">
            회원가입
          </Link>
        </div>

        <div>
          <img className="naver" src={naver} alt="네이버" />
          <img className="google" src={google} alt="구글" />
          <img className="kakao" src={kakao} alt="카카오" />
        </div>
      
        {/* <Link to="/Mission"> */}
          <Button type="submit" className="btnLogin" onClick={onClickLogin}>
            로그인
          </Button> <br/><br/>
        {/* </Link> */}

          <Link to="/signup" className="signUp">
              ToLevelUp 회원가입
          </Link>
        </div>
      </div>
      </body>
  );
}

export default Login;