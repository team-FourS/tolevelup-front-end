import React, {useState, useEffect } from 'react';
import {Routes, Route, Link,useNavigate} from "react-router-dom";
import axiosInstance from "../../axiosConfig";

import Mypage from "../Mypage/Mypage";
import user from "../../img/T-logo.png";
import "../../css/mypage/Modify.css";
import styled from 'styled-components';
import back from '../../img/back.png';

export const ModalContainer = styled.div`
// Modal을 구현하는데 전체적으로 필요한 CSS를 구현
    height : 50%;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
    z-index: 1; //위치지정 요소
    position: fixed;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: rgba(0,0,0,0.4);
    border-radius: 10px;
    top : 0;  left : 0;  
    right : 0;  bottom : 0;
`;

export const ModalBtn = styled.button`
    background-color: var(--coz-purple-600);
    text-decoration: none;  border: none;
    cursor: pointer;
`;

export const ExitBtn = styled(ModalBtn) `
    background-color : #afb2b0;
    color : white;  text-decoration: none;
    border-radius: 10px;
    margin: 10px;  margin-left: 60vh;
    padding: 5px 10px;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
    role: 'dialog',
}))`
  // Modal CSS 구현

    align-items: center;  flex-direction: column;
    border-radius: 20px;  heigth: 200px;
    background-color: #ffffff;
    >div.desc {
    display: flex;  align-items: center;
    flex-direction: column;  
    border-radius: 20px;  heigth: 300px;
    background-color: #ffffff;
    >div.desc {
    margin: 50px;  font-size: 20px; 
    color: var(--coz-purple-600);
    }
`;




const Modify = () => {
    //연동
    const [userName, setUserName] = useState('');
    const [userIntro, setUserIntro] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() =>{
        axiosInstance.get('api/v1/users/my' , {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
    })
        .then((res) => {
            setUserName(res.data.result.userData.name);
            setUserIntro(res.data.result.userData.intro);
            setUserEmail(res.data.result.userData.email);
            console.log(res.data);

        })
        .catch((error) => {
            console.log('Failed to fetch user info:', error);
        });

    }, []);

    const navigate = useNavigate();
    // 이전 페이지로 이동

    const handleBack = () => {
        navigate(-2); //뒤로가기
    };

    const onClickWithdrawal = () => {
        const confirmation = window.confirm('정말로 회원탈퇴를 하시겠습니까?');

    if (confirmation) {
      axiosInstance
        .delete('api/v1/users')
        .then((res) => {
          document.location.href = '/';
        })
        .catch((error) => {
          console.log('사용자 정보를 가져오는 데 실패했습니다:', error);
        });
    }
    }

    return (
        <body className='modify_body'>
            <img src={back} className='backbutton' onClick={handleBack} alt='뒤로가기' title='뒤로' />
        <div className="layout_modify">
            <Routes>
                <Route path="/mypage" element={<Mypage />} />
            </Routes>
            <div className='modify_allbox'>            
            <div className="square">
                <div className='square_in'>
            <table className='modify_bold'>
                    {/* <thead/> */}
                    <tbody>
                        <tr>
                            <td className="modify_img" rowspan="3">
                                <img className ="profils" src={user} alt='프로필' rowspan="2"></img>
                            </td>
                        </tr>
                        
                        <tr className='modify_bold'>
                            <td className='nickname_bold'>
                                <p className='oneline_font'>닉네임</p>
                            </td>
                            <td>
                            <p className='intro'>{userName}</p>
                                <Link to="/editNickname">
                                    <button className='nickname_edit_button'> 수정</button>
                                </Link>
                            </td>
                        </tr>

                        <tr className='modify_bold2'>
                            <td className='nickname_bold'>
                                <p className='oneline_font'>한줄소개</p>
                            </td>
                            <td>
                            <p className='intro'> {userIntro}</p>
                                <Link to="/editOneline">
                                    <button className='intro_edit_button'> 수정</button>
                                </Link>
                            </td>
                        </tr>
                    
                        <tr className='pass_bold'>
                            <td className='id_bold' colspan="2">
                                <p className='password_font'>비밀번호</p></td>
                            <td className='intro2'>
                            <p className='intro'> ******</p>
                                <Link to="/editPW">
                                    <button className='password_edit_button'> 수정</button>
                                </Link>
                            </td>
                        </tr>

                        <tr className='pass_bold'>
                            <td className='id_bold' colspan="2">
                                <p className='email_font'>이메일</p>
                            </td>
                                <td className='intro2'>
                                <p className='intro'> {userEmail}</p>
                                        <Link to="/editEmail">
                                            <button className='email_edit_button'> 수정</button>
                                        </Link>
                                </td>
                        </tr>
                        
                    </tbody>
            </table>
            <div className='out_margin'>
            <p className='Withdrawal' onClick={onClickWithdrawal}>회원탈퇴</p>
            </div>
            </div>
            </div>
        </div>
</div>
</body>
    )
}
export default Modify;