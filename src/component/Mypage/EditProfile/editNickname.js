import React, {  useState } from 'react';
import axiosInstance from "../../../axiosConfig";
import "../../../css/mypage/EditProfile.css"
import { TextField } from '@mui/material';
import {Link} from "react-router-dom";

const EditNickname = () => {
    const [name, setName] = useState('');

    const handleConfirmClick =() => {
        axiosInstance.put('api/v1/users/information',{
            type:"name",
            data: name
        })
            .then((res) => {
                setName(''); 
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
                <p className='user_check1'>닉네임 변경</p>
                <p className='editExplain'>* 변경할 닉네임을 입력해주세요.</p>
                    <TextField 
                        className="editField1"
                        placeholder='닉네임'
                        name="Secure"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        autoComplete="Secure"
                        autoFocus />
                    <button className='check_button1' onClick={handleConfirmClick}>확인</button>

                <Link to="/modify">
                    <button className='check_button1'>취소</button>
                </Link>
            </div>
        </div>
        </main>
    </body>
)
}

export default EditNickname;