import React, { useState } from 'react';
import axiosInstance from "../../../axiosConfig";
import "../../../css/mypage/EditProfile.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

const EidtOneline = () => {
    const [intro, setIntro] = useState('');

    const handleIntroClick =() => {
        axiosInstance.put('api/v1/users/information',{
            type:"intro",
            data: intro
        })
            .then((res) => {
                setIntro(''); 
                console.log('Intro 데이터:', intro);
                window.location.href = '/mypage';
            })
            .catch((error) => {
                console.error('한줄소개 수정중 오류발생:', error);
            });
    }; 
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
                        value={intro}
                        onChange={(e)=>setIntro(e.target.value)}
                        autoComplete="Secure"
                        autoFocus />
                    <button className='check_button1' onClick={handleIntroClick}>확인</button>
                <Link to="/modify">
                    <button className='check_button1'>취소</button>
                </Link>
            </div>
        </div>
        </main>
    </body>
)
}

export default EidtOneline;