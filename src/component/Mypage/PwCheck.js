import React, {useState} from 'react';
// import React,{useState} from 'react';
import axiosInstance from "../../axiosConfig"
import "../../css/mypage/PwCheck.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";
import { BiShow, BiHide } from 'react-icons/bi';

const PwCheck = () => {

    const [password, setInputPw] = useState("");

    const [showPswd, setShowPswd] = useState(false);

    const toggleShowPswd = () => {
        setShowPswd(!showPswd);
    };

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
      const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            onClickHandler(); 
        }
      };

return (
    <body className='check_body'>
    <main className="check_main">
        <div className="layout_check">
            <div className="checkForm">
                <p className='user_check'>사용자 확인</p>
                <p>* 사용자의 비밀번호를 입력해주세요</p>
                <div className="editFieldContainer">
                    <TextField className="loginBox" type={showPswd ? "text" : "password"}
                        label="비밀번호"
                        value={password}
                        onChange={handleInputPw}
                        onKeyPress={handleOnKeyPress}
                        name="Secure"
                        autoComplete="Secure"
                        autoFocus />
                        <div className="absolute top-[16px] right-[20px] sm:right-[30px]" style={{display:'inline',marginLeft:'10px'}}>
                            {showPswd ? (
                            <BiShow  className='eye-icon' onClick={toggleShowPswd} />
                        ) : (
                            <BiHide className='eye-icon'  onClick={toggleShowPswd} />
                        )}</div></div>
                    <button className='check_button' onClick={onClickHandler}>확인</button>
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