import React, { useState } from 'react';
import '../../css/login/signup.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
import axios from 'axios';
import fullnameLogo from '../../img/logo/fullname-logo.png';

function Signup() {
  
  // const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [inputname, setUsernameinput] = useState("");
  const [inputemail, setEmailinput] = useState("");
  const [inputpassword, setPasswordinput] = useState("");
  const [inputid, setId] = useState("");


  const registeraxios = () => {

    if (!inputname || !inputemail || !inputpassword || !inputid) {
      alert('모든 정보를 입력하세요.'); // Display an alert
      return; // Return early if any field is missing
    }
  
    
    console.log("click Signup");
    console.log("ID : ", inputid);
    console.log("PW : ", inputpassword);
    console.log("Email : ", inputemail);
    console.log("Name : ", inputname);
    axios({
      url:'api/v1/users/join',
      method: 'POST',
      data: {
        name: inputname,
        email: inputemail,
        password: inputpassword,
        id: inputid,
      },
      
    })
  
      .then((response) => {
      //   let accessToken = response.headers['authorization']; // 응답헤더에서 토큰 받기
      //   let refreshToken = response.headers['refresh'];
      //   console.log('access 토큰 :', accessToken);
      //   console.log('refresh 토큰 :', refreshToken);
      //   localStorage.setItem('token',response.data.result.token);
      // // token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
      //   axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
      
        console.log(response.data.result.token);
        sessionStorage.setItem('Name', inputname);
        // console.log(response);
        alert("회원가입성공");
        if ((response.status = 200)) {
          return document.location.href ="/";
        }
      }).catch((err)=>{
        console.log(err);
      })
      ;
  };

  return (
    <body className='signup_body'>
    <div className="LoginLayout">
      <div className="signUpForm"> 
        <div className="signUpID">
          <p className="loginTitle">회원가입</p>  
            <img className="loginLogo" src={fullnameLogo} alt="로고" />

            <div className="signUpID">
          <TextField className="loginBox" label="ID" id="id"
            type="ID" name="ID"
            autoComplete="ID"
            onChange={(e) => {
              setId(e.target.value);
            }}/> <br/> 
        </div>
        
        <TextField className="loginBox" label="Password" id="pass"
          type="Password" name="Password"
          autoComplete="Password"
          onChange={(e) => {
            setPasswordinput(e.target.value);
          }} /> <br/>

<div className="signUpPassword">
          <TextField className="loginBox"
            label="Name" name="Name"
            autoComplete="Name"
            autoFocus
            onChange={(e) => {
              setUsernameinput(e.target.value);
            }}/> <br/></div>
        </div>

        <div className="signUpID">
          <TextField className="loginBox" label="Email"
            type="Email" name="Email"
            autoComplete="Email"
            onChange={(e) => {
              setEmailinput(e.target.value);
            }} /> <br/>  
        </div>

        

          <Button type="submit" className="btnLogin" onClick={registeraxios}>
            회원가입
          </Button> <br/><br/>

        </div>
      </div>
      </body>  
  );
}

export default Signup;