import React, {useRef ,useState} from 'react';
// import user2 from '../../img/user.png';
import "../../css/mypage/Modify.css";
import Header from "../Header";
import Footer from "../Footer";
import Mypage from "../Mypage/Mypage";
import Edit from "./Edit";
import {Routes, Route, Link} from "react-router-dom";
import styled from 'styled-components';

const Modify = () => {

    const [imgFile, setImgFile] = useState("");
const imgRef = useRef();

// 이미지 업로드 input의 onChange
const saveImgFile = () => {
   const file = imgRef.current.files[0];
   const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImgFile(reader.result);
      };
};

    const [currentTab, setCurrentTab] = useState('SUV');

        const changeUnderLine = e => {
            setCurrentTab(e.target.value);
        };

        const CategoryBtnSuv = styled.button`
   
        border: none;
        background: #fff;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        border-bottom: ${props => (props.title === 'SUV' ? '4px solid #222' : '')};
`;

const CategoryBtnSedan = styled.button`

    border: none;
    background: #fff;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: ${props => (props.title === 'Sedan' ? '4px solid #222' : '')};
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
    const onClickNew = () => {
    // 새창에서 열기 => 새로고침 필요X
    let windowObj = window.open('/Profile', '_blank','width=500vh,height=700vh,left=900px,top=30px','flase');
   
        windowObj.document.close();
    };

    
    return (
        <div className="layout_modify">
            <Routes>
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/edit" element={<Edit />} />
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
            <div className="square">
                <div className='square_in'>
            <div className="pro_box">
                                <form>
                                    <img src={imgFile ? imgFile :`/img/user.png`} alt="프로필 이미지"></img>
                                    {/* <img className ="profils" src={user2} alt='프로필'></img> */}
                                    <input className="signup-profileImg-input" type="file" accept="image/*" id="profileImg" onChange={saveImgFile} ref={imgRef}/>
                                </form>
                                <h4 className='profil_font' onClick={onClickNew}>프로필 이미지 편집</h4>
                            </div>
                            <table className='modify_bold'>
                                <thead></thead>
                                <tbody>
                                    <tr className='modify_bold'>
                                        <td className='nickname_bold'><h4 className='nickname_font'>닉네임</h4></td>
                                        <td>
                                            <input type='text' className='intro' placeholder='닉네임 수정'></input>
                                        </td>
                                    </tr>
                                    <tr className='modify_bold'>
                                        <td className='oneline_bold'><h4 className='oneline_font'>한줄소개</h4></td>
                                        <td>
                                            <input type='text' className='intro' placeholder='한줄소개를 입력하세요.'></input>
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