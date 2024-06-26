import React,{useState} from 'react';
import '../../css/login/login.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
// import FormControlLabel from '@mui/material/FormControlLabel';
import {Routes, Route, Link, useLocation} from "react-router-dom";
import Mission from "../Mission/Mission";
import Signup from "../Login/Signup";
// import axios from 'axios';
import fullnameLogo from '../../img/logo/fullname-logo.png';
import axiosInstance from "../../axiosConfig"

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
    if (!inputId) {
      alert("아이디를 입력해주세요.");
    } else if (!inputPw) {
      alert("비밀번호를 입력해주세요.");
    } else {
      console.log("click login");
      console.log("ID: ", inputId);
      console.log("PW: ", inputPw);
      
    axiosInstance({
      url:'api/v1/users/login',
      method: 'POST',
      data: {
        id: inputId,
        password: inputPw,
      },
      })
      .then((res) => {
        
        //Token 설정
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.data.result.token}`;
        
        // 사용자 아이디를 세션에 저장
        sessionStorage.setItem('token',res.data.result.token);
        console.log(res.data.result.token);

        document.location.href = "/Mission";

      })
      .catch((error)=>{
        console.log(error);
        alert("아이디 또는 비밀번호를 확인해주세요.");
      });
    }
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
            autoFocus
            onKeyPress={(e) => {
              if (inputId.length >= 10 && e.key !== 'Backspace') {
                e.preventDefault();
              }
            }} /> <br />
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