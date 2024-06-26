import React, { useState } from 'react';
import '../../css/login/signup.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
import axios from 'axios';
import fullnameLogo from '../../img/logo/fullname-logo.png';

function Signup() {
  
  axios.defaults.withCredentials = true;
  const [inputname, setUsernameinput] = useState("");
  const [inputemail, setEmailinput] = useState("");
  const [inputpassword, setPasswordinput] = useState("");
  const [inputid, setId] = useState("");
  const [error, setError] = useState('');


  const registeraxios = () => {

    if (!inputname || !inputemail || !inputpassword || !inputid) {
      alert('모든 정보를 입력하세요.');
      return;
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
  
      .then((res) => {
      
        console.log(res.data.result.token);

        // console.log(response);
        sessionStorage.setItem('userName', inputname);

        alert("회원가입성공");
        if ((res.status = 200)) {
          return document.location.href ="/";
        }
      }).catch((err)=>{
        console.log(err);
      })
      ;
  };

  const handleIdChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 10) {
      setId(inputValue);
      setError('※ 아이디는 변경불가하며, 10글자 이내로 입력해 주세요.');
    } else {
      setError('※ 아이디는 변경불가하며, 10글자 이내로 입력해 주세요.');
    }
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
            onChange={handleIdChange}
            onKeyPress={(e) => {
              if (inputid.length >= 10 && e.key !== 'Backspace') {
                e.preventDefault();
              }
            }}
          /><br/>
          <div style={{ color: 'red',fontSize:'10px',float:'right' }}>{error}</div>
        </div>
        
        <TextField className="loginBox" label="Password" id="pass"
          type="Password" name="Password"
          autoComplete="Password"
          onChange={(e) => {
            setPasswordinput(e.target.value);
          }} /> <br/>

<div className="signUpPassword">
          <TextField className="loginBox"
            label="Nickname" name="Name"
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