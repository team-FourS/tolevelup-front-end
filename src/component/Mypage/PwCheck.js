import React, {useState} from 'react';
// import React,{useState} from 'react';
import axiosInstance from "../../axiosConfig"
import "../../css/mypage/PwCheck.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

const PwCheck = () => {

    const [password, setInputPw] = useState("");

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
      };
    
      const onClickHandler = () => {
        axiosInstance.post('api/v1/users/password',{
            password:password
        })
          .then((res) => {
            console.log(res);
            setInputPw('')
            document.location.href = "/Modify";
          })
          .catch((error)=>{
            console.log(error);
            alert("비밀번호가 올바르지 않습니다.");
          });
      };

return (
    <body className='check_body'>
    <main className="check_main">
        <div className="layout_check">
            <div className="checkForm">
                <p className='user_check'>사용자 확인</p>
                <p>* 사용자의 비밀번호를 입력해주세요</p>
                    <TextField className="loginBox"
                        label="비밀번호"
                        value={password}
                        onChange={handleInputPw}
                        name="Secure"
                        autoComplete="Secure"
                        autoFocus />
                {/* <Link to="/modify"> */}
                    {/* <button className='check_button' onClick={onClickModify}>확인</button> */}
                    <button className='check_button' onClick={onClickHandler}>확인</button>
                {/* </Link> */}
                <Link to="/mypage">
                    <button className='check_button'>취소</button>
                </Link>
            </div>
        </div>
    </main>
    </body>
)
}

export default PwCheck;