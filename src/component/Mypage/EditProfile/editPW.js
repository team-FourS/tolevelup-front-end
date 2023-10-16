import React, {  useState } from 'react';
import axiosInstance from "../../../axiosConfig";
import "../../../css/mypage/EditProfile.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

const EidtPW = () => {

    const [password, setpassword] = useState('');

    const handlePasswordClick =() => {
        axiosInstance.put('api/v1/users/information',{
            type:"password",
            data: password
        })
            .then((res) => {
                setpassword(''); 
                // console.log(res.type);
                window.location.href = '/mypage';
                // setLoading(false);
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
                <p className='user_check1'>비밀번호 변경</p>
                <p className='editExplain'>* 변경할 비밀번호를 입력해주세요.</p>
                    <TextField className="editField1"
                        placeholder='비밀번호'
                        name="Secure"
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        autoComplete="Secure"
                        autoFocus />
                <Link to="/modify">
                    <button className='check_button1' onClick={handlePasswordClick}>확인</button>
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

export default EidtPW;