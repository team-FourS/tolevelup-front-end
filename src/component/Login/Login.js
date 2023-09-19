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
  const URL = "/api/v1/users/login"
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
        localStorage.setItem('token',res.data.result.token);
        console.log(res.data.result.token);
        document.location.href = "/Mission"
        // console.log(res);
        // console.log("res.data.userId :: ", res.data.userId);
        // console.log("res.data.msg :: ", res.data.msg);
        // if (res.data.id === undefined) {
        //   // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
        //   console.log("======================", res.data.msg);
        //   alert("입력하신 id 가 일치하지 않습니다.");
        // } else if (res.data.id === null) {
        //   // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
        //   console.log(
        //     "======================",
        //     "입력하신 비밀번호 가 일치하지 않습니다."
        //   );
        //   alert("입력하신 비밀번호 가 일치하지 않습니다.");
        // } else if (res.data.id === inputId) {
        //   // id, pw 모두 일치 userId = userId1, msg = undefined
        //   console.log("======================", "로그인 성공");
        //   sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
        //   sessionStorage.setItem("name", res.data.name); // sessionStorage에 id를 user_id라는 key 값으로 저장
        //   document.location.href = "/Mission";
        // }
        // // 작업 완료 되면 페이지 이동(새로고침)
        // document.location.href = "/";

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
            autoFocus /> <br />
        </div>
          <TextField className="loginBox" label="Password"
            type="password"
            value={inputPw}
            onChange={handleInputPw}
            name="password"
            autoComplete="password" /> <br  />  

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
// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button } from '@mui/material';

// function Login() {
//   const [userName, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
    
//     try {
//       const response = axios.post('/api/v1/user/login')
//       .then(response => response.data);
//       return{
//         userName:userName,
//         password:password,
//       };
      
//       // 로그인 성공 시 서버에서 반환한 응답을 확인하고 필요한 작업 수행
//       // eslint-disable-next-line
//       console.log('서버 응답:', response.data);
//     } catch (e) {
//       // 로그인 실패 시 오류 처리
//       console.e('로그인 실패:', e);
//     }
//   };

//   return (
//     <div>
//       <TextField
//         label="ID"
//         value={userName}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <TextField
//         label="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button onClick={handleLogin}>로그인</Button>
//     </div>
//   );
// }

// export default Login;