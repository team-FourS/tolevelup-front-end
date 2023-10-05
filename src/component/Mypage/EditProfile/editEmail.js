import React from 'react';
import "../../../css/mypage/EditProfile.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

const editEmail = () => {

return (
    <body className='check_body'>
        <div className="layout_check">
            <div className="checkForm">
                <p className='user_check'>사용자 확인</p>
                <p>* 변경할 이메일 주소를 입력해주세요</p>
                    <TextField className="editField"
                        label="Secure"
                        name="Secure"
                        autoComplete="Secure"
                        autoFocus />
                <Link to="/modify">
                    <button className='check_button'>확인</button>
                </Link>
                <Link to="/mypage">
                    <button className='check_button'>취소</button>
                </Link>
            </div>
        </div>
    </body>
)
}

export default editEmail;