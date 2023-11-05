import React, { useState } from 'react';
import axiosInstance from "../../../axiosConfig";
import "../../../css/mypage/EditProfile.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

const EditEmail = () => {
    const [email, setemail] = useState('');

    const handleEmailClick =() => {
        axiosInstance.put('api/v1/users/information',{
            type:"email",
            data: email
        })
            .then((res) => {
                setemail(''); 
                window.location.href = '/modify';
            })
            .catch((error) => {
                console.error('닉네임수정중 오류발생:', error);
            });
    }; 
return (
    <body className='check_body1'>
      <main className="check_main1">
        <div className="layout_check1">
            <div className="checkForm1">
                <p className='user_check1'>이메일 변경</p>
                <p className='editExplain'>* 변경할 이메일 주소를 입력해주세요.</p>
                    <TextField className="editField1"
                        placeholder='이메일'
                        name="Secure"
                        value={email}
                        onChange={(e)=>setemail(e.target.value)}
                        autoComplete="Secure"
                        autoFocus />
                    <button className='check_button1' onClick={handleEmailClick}>확인</button>
                <Link to="/modify">
                    <button className='check_button1'>취소</button>
                </Link>
            </div>
        </div>
        </main>
    </body>
)
}

export default EditEmail;