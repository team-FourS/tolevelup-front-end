import React, {  useState } from 'react';
import axiosInstance from "../../../axiosConfig";
import "../../../css/mypage/EditProfile.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

import { BiShow, BiHide } from 'react-icons/bi';
const EidtPW = () => {

    const [password, setpassword] = useState('');
    const [showPswd, setShowPswd] = useState(false);

    const toggleShowPswd = () => {
        setShowPswd(!showPswd);
    };

    const handlePasswordClick =() => {
        axiosInstance.put('api/v1/users/information',{
            type:"password",
            data: password
        })
            .then((res) => {
                setpassword(''); 
                window.location.href = '/mypage';
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
                <div className="editFieldContainer">
                    <TextField className="editField1" type={showPswd ? "text" : "password"}
                        placeholder='비밀번호'
                        name="Secure"
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        autoComplete="Secure"
                        autoFocus />
                        <div className="absolute top-[16px] right-[20px] sm:right-[30px]" style={{display:'inline',marginLeft:'10px'}}>
                            {showPswd ? (
                            <BiShow onClick={toggleShowPswd} />
                        ) : (
                            <BiHide onClick={toggleShowPswd} />
                        )}</div></div>
                    <button className='check_button1' onClick={handlePasswordClick}>확인</button>
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