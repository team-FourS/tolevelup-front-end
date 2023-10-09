import React from 'react';
// import React,{useState} from 'react';
// import axiosInstance from "../../axiosConfig"
import "../../css/mypage/PwCheck.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

const PwCheck = () => {
    //   세연 modify 사용자확인 연동 코드 start
    // const [inputPw, setInputPw] = useState("");

    // const handleInputPw = (e) => {
    //     setInputPw(e.target.value);
    //   };
    
    //   const onClickModify = () => {
    //     console.log("PW : ", inputPw);
    //     axiosInstance({
    //       url:'api/v1/users/login',
    //       method: 'POST',
    //       data: {
    //         password: inputPw
    //       },
    //       })
    //       .then((res) => {
    //         console.log(res);
    //         document.location.href = "/Modify";
    
    //       })
    //       .catch((error)=>{
    //         console.log(error);
    //       });
    //   };
    //   세연 modify 사용자확인 연동 코드 end

return (
    <body className='check_body'>
    <main className="check_main">
        <div className="layout_check">
            <div className="checkForm">
                <p className='user_check'>사용자 확인</p>
                <p>* 사용자의 비밀번호를 입력해주세요</p>
                    <TextField className="loginBox"
                        label="비밀번호"
                        // value={inputPw}
                        // onChange={handleInputPw}
                        name="Secure"
                        autoComplete="Secure"
                        autoFocus />
                <Link to="/modify">
                    {/* <button className='check_button' onClick={onClickModify}>확인</button> */}
                    <button className='check_button'>확인</button>
                </Link>
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