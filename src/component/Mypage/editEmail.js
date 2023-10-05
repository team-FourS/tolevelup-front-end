import React from 'react';

import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

const editEmail = () => {

return (
    <body className='check_body'>
    <main className="check_main">
        <div className="layout_check">
            <div className="checkForm">
                <strong><p className='user_check'>이메일 변경</p></strong>
                <p>*변경할 이메일 주소를 입력해주세요</p>
                    <TextField className="loginBox"
                        label="Secure"
                        name="Secure"
                        autoComplete="Secure"
                        autoFocus />
                <Link to="/modify">
                    <button className='check_button'>확인</button>
                </Link>
                
            </div>
        </div>
    </main>
    </body>
)
}

export default editEmail;