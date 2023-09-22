import React, { useState } from 'react';
import '../../css/login/signup.css'
import {Routes, Route, useNavigate} from "react-router-dom";
import { TextField } from '@mui/material';
import { Button } from '@mui/base';
import Login from "../Login/Login";
import logo from '../../img/smallLogo.png';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();

  const [inputname, setUsernameinput] = useState("");
  const [inputemail, setEmailinput] = useState("");
  const [inputpassword, setPasswordinput] = useState("");
  const [inputid, setId] = useState("");


  const registeraxios = () => {
    console.log("click login");
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
        console.log(response);
        alert("회원가입성공");
        if ((response.status = 200)) {
          return navigate("/Mission");
        }
      }).catch((err)=>{
        console.log(err);
      })
      ;
  };

  return (
    <body className='signup_body'>
    <div className="LoginLayout">
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>

      <div className="signUpForm"> 
        <div className="signUpID">
          <p className="loginTitle">회원가입</p>  
          <img className="loginLogo" src={logo} alt="로고" />

          <TextField className="loginBox"
            label="Name" name="Name"
            autoComplete="Name"
            autoFocus
            onChange={(e) => {
              setUsernameinput(e.target.value);
            }}/> <br/>
        </div>

        <div className="signUpID">
          <TextField className="loginBox" label="Email"
            type="Email" name="Email"
            autoComplete="Email"
            onChange={(e) => {
              setId(e.target.value);
            }} /> <br/>  
        </div>

        <div className="signUpID">
          <TextField className="loginBox" label="ID"
            type="ID" name="ID"
            autoComplete="ID"
            onChange={(e) => {
              setEmailinput(e.target.value);
            }}/> <br/> 
        </div>

        <TextField className="loginBox" label="Password"
          type="Password" name="Password"
          autoComplete="Password"
          onChange={(e) => {
            setPasswordinput(e.target.value);
          }} /> <br/>   

        {/* <Link to="/Mission"> */}
          <Button type="submit" className="btnLogin" onClick={registeraxios}>
            회원가입
          </Button> <br/><br/>
        {/* </Link> */}

        </div>
      </div>
      </body>  
  );
}

export default Signup;