import React,{useState} from 'react';
import '../../css/login/login.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
// import FormControlLabel from '@mui/material/FormControlLabel';
import {Routes, Route, Link, useLocation} from "react-router-dom";
import Mission from "../Mission/Mission";
import Signup from "../Login/Signup";
import axios from 'axios';
import fullnameLogo from '../../img/logo/fullname-logo.png';

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
      url:'api/v1/users/login',
      method: 'POST',
      data: {
        id: inputId,
        password: inputPw,
      },
      })
      .then((res) => {
        const { Token } = res.data.result.token;
        
        //Token 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`;
        sessionStorage.setItem('token',Token);

        // 사용자 아이디를 세션에 저장
        sessionStorage.setItem('userId', inputId);
      
        console.log(res.data.result);
        console.log(sessionStorage);

        document.location.href = "/Mission";

      })
      .catch((error)=>{
        console.log(error);
      });
  };

  // Enter 키로 로그인 넘기기
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      onClickLogin(); 
    }
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
          <img className="loginLogo" src={fullnameLogo} alt="로고" />
        
        <div className="idField">
          <TextField className="loginBox"
            label="ID"
            value={inputId}
            onChange={handleInputId}
            name="ID"
            autoComplete="ID"
            autoFocus /> <br />
        </div>

        <div className="pwField">
          <TextField className="loginBox" label="Password"
            type="password"
            value={inputPw}
            onChange={handleInputPw}
            onKeyPress={handleOnKeyPress}
            name="password"
            autoComplete="password" /> <br  />  
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
        

          <Link to="/signup" className="signUp">
              ToLevelUp 회원가입
          </Link>
        </div>
      </div>
    </body>
  );
}

export default Login;