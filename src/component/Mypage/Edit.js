import React, {useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer";
import Mypage from "./Mypage";
import Modify from "./Modify"
import "../../css/mypage/edit.css"
import {Routes, Route, Link} from "react-router-dom";
import styled from 'styled-components';

const Edit = () => {

    const [currentTab, setCurrentTab] = useState('SUV');

    const changeUnderLine = e => {
        setCurrentTab(e.target.value);
    };

    const CategoryBtnSuv = styled.button`
    display: inline-block;
    border: none;
    background: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
border-bottom: ${props => (props.title === 'Sedan' ? '4px solid #222' : '')};
`;

const CategoryBtnSedan = styled.button`
display: inline-block;
  border: none;
  background: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
border-bottom: ${props => (props.title === 'SUV' ? '4px solid #222' : '')};
`;

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
        <div className="layout1">
            <Routes>
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/modify" element={<Modify />} />
            </Routes>
            <Header />
            
        <div className='modify_allbox'>            
            <div className='edit1'>
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
            </div>
            <hr />
            <div className="square_edit">
                <div className='square_in_edit'>
            <div className="pro_box">
                            </div>
                            <table className='modify_bold'>
                                <thead></thead>
                                <tbody>
                                    <tr className='modify_bold'>
                                        <td className='nickname_bold'><h4 className='nickname_font'>이름</h4></td>
                                        <td>
                                            <input type='text' className='intro' placeholder='이름 수정'></input>
                                        </td>
                                    </tr>
                                    <tr className='modify_bold'>
                                        <td className='oneline_bold'><h4 className='oneline_font'>비밀번호</h4></td>
                                        <td>
                                            <input type='text' className='intro_edit' placeholder='비밀번호 수정'></input>
                                        </td>
                                    </tr>
                                    <tr className='modify_bold'>
                                        <td className='oneline_bold'><h4 className='oneline_font'>이메일</h4></td>
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
  );
}

  export default Edit;