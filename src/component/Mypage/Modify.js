import React, {useState} from 'react';
import user2 from '../../img/user.png';
import "../../css/mypage/Modify.css";
import Header from "../Header/Header";
import Footer from "../Footer";
import Mypage from "../Mypage/Mypage";
// import Edit from "./Edit";
import {Routes, Route, Link} from "react-router-dom";
import Profile from './Profile';
// import Modal from "../Modal";
// import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
// Modal을 구현하는데 전체적으로 필요한 CSS를 구현
// display : flex;
// justify-content : center;
// align-items : center;
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
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
//   padding: 20px;
//   color: white;
//   border-radius: 30px;
//   cursor: grab;
`;

export const ExitBtn = styled(ModalBtn) `
background-color : #4000c7;
border-radius: 10px;
text-decoration: none;
margin: 10px;
padding: 5px 10px;
width: 40px;
height: 40px;
display : flex;
// float:right;
margin-right: .25rem;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
}))`
  // Modal창 CSS를 구현합니다.
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 650px;
  heigth: 200px;
  background-color: #ffffff;
    >div.desc {
      margin: 20px;
      font-size: 20px;
      color: var(--coz-purple-600);
    }
`;

const Modify = () => {

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
        <div className="layout_modify">
            <Routes>
                <Route path="/mypage" element={<Mypage />} />
            </Routes>
            <Header />
            <div className='modify_allbox'>            
            {/* <div className='edit1'>
                <div className='block'>
                <div className='private_locate'>
                        <Link to="/edit">
                            <CategoryBtnSedan title={currentTab} value="Sedan" onClick={changeUnderLine}>  
                                개인정보 수정
                            </CategoryBtnSedan>
                        </Link>
                    </div>

                <div className='profile_locate'>
                    <Link to="/modify">
                        <CategoryBtnSuv title={currentTab} value="SUV" onClick={changeUnderLine} >
                            프로필 수정
                        </CategoryBtnSuv>
                    </Link>
                </div>
            </div>
            </div> */}
            {/* <hr /> */}
            <div className="square">
                <div className='square_in'>
            <div className="pro_box">
                                <form>
                                    <img className ="profils" src={user2} alt='프로필'></img>
                                </form>
                                <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}
        // 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
        ><h4 className='profil_font'>프로필 이미지 편집</h4>
          {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현 */}
        </ModalBtn>
        {/* 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현 */}
        {isOpen ? 
        <ModalBackdrop onClick={openModalHandler}>
          {/* //event 버블링을 막는 메소드  */}
            <ModalView onClick={(e) => e.stopPropagation()}>
              <ExitBtn onClick={openModalHandler}>x</ExitBtn>
              <div className='desc'><Profile /></div>
            </ModalView>
          </ModalBackdrop>
          : null
        }
      </ModalContainer>
    </>
                                {/* <h4 className='profil_font' onClick={() => setprofile(!editprofile)}>
                                    {editprofile && (
                                        <Modal closeModal={() => setprofile(!editprofile)} >
                                            <Profile />
                                        </Modal>
                                )}프로필 이미지 편집</h4> */}
                            </div>
                            <table className='modify_bold'>
                                <thead></thead>
                                <tbody>
                                    <tr className='modify_bold'>
                                        <td className='nickname_bold'><p className='oneline_font'>닉네임</p></td>
                                        <td>
                                            <input type='text' className='intro' placeholder='닉네임 수정'></input>
                                        </td>
                                    </tr>
                                    <tr className='modify_bold'>
                                        <td className='nickname_bold'><p className='oneline_font'>한줄소개</p></td>
                                        <td>
                                            <input type='text' className='intro' placeholder='한줄소개를 입력하세요.'></input>
                                        </td>
                                    </tr>
                                    <tr className='modify_bold'>
                                        <td className='nickname_bold'><p className='oneline_font'>이름</p></td>
                                        <td>
                                            <input type='text' className='intro' placeholder='이름 수정'></input>
                                        </td>
                                    </tr>
                                    <tr className='modify_bold'>
                                        <td className='nickname_bold'><p className='oneline_font'>비밀번호</p></td>
                                        <td>
                                            <input type='text' className='intro_edit' placeholder='비밀번호 수정'></input>
                                        </td>
                                    </tr>
                                    <tr className='modify_bold'>
                                        <td className='nickname_bold'><p className='oneline_font'>이메일</p></td>
                                        <td>
                                            <input type='text' className='intro_edit' placeholder='이메일 수정'></input>
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
        <Footer/> 
</div>
    )
}
export default Modify;