import React from 'react';
import "../../css/mypage/PwCheck.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

const PwCheck = () => {

return (
    <body className='check_body'>
    <main className="check_main">
        <div className="layout_check">
            <div className="checkForm">
                <p className='user_check'>사용자 확인</p>
                <p>* 사용자의 비밀번호를 입력해주세요</p>
                    <TextField className="loginBox"
                        label="Secure"
                        // value={inputId}
                        // onChange={handleInputId}
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
    </main>
    </body>
)
}

export default PwCheck;