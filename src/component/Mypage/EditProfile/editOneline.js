import React from 'react';
import "../../../css/mypage/EditProfile.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

const eidtOneline = () => {

return (
    <body className='check_body1'>
      <main className="check_main1">
        <div className="layout_check1">
            <div className="checkForm1">
                <p className='user_check1'>한줄소개 변경</p>
                <p className='editExplain'>* 변경할 한줄소개를 입력해주세요.</p>
                    <TextField className="editField1"
                        placeholder='한줄소개'
                        name="Secure"
                        autoComplete="Secure"
                        autoFocus />
                <Link to="/modify">
                    <button className='check_button1'>확인</button>
                </Link>
                <Link to="/modify">
                    <button className='check_button1'>취소</button>
                </Link>
            </div>
        </div>
        </main>
    </body>
)
}

export default eidtOneline;