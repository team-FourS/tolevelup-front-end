import React, {useState, useEffect } from 'react';
import user2 from '../../img/user.png';
import "../../css/mypage/Modify.css";
import Mypage from "../Mypage/Mypage";
import {Routes, Route, Link,useNavigate} from "react-router-dom";
import Profile from './Profile';
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

    /* id 정보 불러오기 */
    const [userId, setUserId] = useState('');
    useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    if (storedUserId) {
        setUserId(storedUserId);
    }
}, []);

    const [username, setUsername] = useState('');
    useEffect(() => {
        const storedUserName = sessionStorage.getItem('username');
    if (storedUserName) {
        setUsername(storedUserName);
    }
}, []);
    

    const [selectedImage, setSelectedImage] = useState(user2);
    const handleImageSelection = (imageName) => {
        setSelectedImage(imageName);
    };

    const navigate = useNavigate();
    // 이전 페이지로 이동

    const handleBack = () => {
        navigate(-2); //뒤로가기
    };

    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
    // isOpen의 상태를 변경하는 메소드를 구현
    // !false -> !true -> !false
    setIsOpen(!isOpen) 
    };
    // const [editprofile, setprofile] = useState(false);

    const useConfirm = (message = null, onConfirm, onCancel) => {
        if ((!onConfirm || typeof onConfirm !== "function") === true) {
            return;
        }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if (window.confirm(message)) {
        onConfirm();
        } else {
        onCancel();
        }
    };
    return confirmAction;
    };

    const deleteConfirm = () => {
        alert("저장되었습니다.");
        window.location.href = '/mypage';
    };
    const cancelConfirm = () => alert("취소되었습니다.");
    const confirmSave = useConfirm("저장하시겠습니까?", deleteConfirm, cancelConfirm
);

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
                                <img className ="profils" src={selectedImage} alt='프로필' rowspan="2"></img>

                                <>
                <ModalContainer>
                    <ModalBtn onClick={openModalHandler}
                    // 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
                    ><h4 className='profil_font'>프로필 이미지 편집</h4>
                    {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현 */}
                    </ModalBtn>
                        {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현 */}
                        {isOpen ? 
                            <ModalBackdrop onClick={(e) => e.stopPropagation()}>
                                {/* //event 버블링을 막는 메소드  */}
                                <ModalView onClick={(e) => e.stopPropagation()}>
                                    <ExitBtn onClick={openModalHandler}>
                                        완료
                                    </ExitBtn>
                                    <div className='desc'>
                                        <Profile onSelectImage={handleImageSelection}/>
                                    </div>
                                </ModalView>
                            </ModalBackdrop> : null }
                </ModalContainer>
                </>
                            </td>
                        </tr>
                        
                        <tr className='modify_bold'>
                            <td className='nickname_bold'>
                                <p className='oneline_font'>닉네임</p>
                            </td>
                            <td>
                            <p className='intro'>{username}</p>
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
                            <p className='intro'> 한줄소개 불러오기</p>
                                <Link to="/editOneline">
                                    <button className='intro_edit_button'> 수정</button>
                                </Link>
                            </td>
                        </tr>

                        <tr className='pass_bold'>
                            <td className='id_bold' colspan="2">
                                <p className='id_font'>아이디</p></td>
                            <td>
                                <p className='intro'>{userId}</p>
                                <Link to="/editID">
                                    <button className='id_edit_button'> 수정</button>
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
                                <p className='intro'> 이메일 값 불러오기</p>
                                        <Link to="/editEmail">
                                            <button className='email_edit_button'> 수정</button>
                                        </Link>
                                </td>
                        </tr>
        
                    </tbody>
            </table>
                    

            <div className='btn_modi'>
                <button className='btnstyle' onClick={confirmSave} >저장</button>

                <Link to='/mypage'>
                    <button className='btnstyle'>취소</button>
                </Link>
            </div>
            </div>
            </div>
        </div>
</div>
</body>
    )
}
export default Modify;