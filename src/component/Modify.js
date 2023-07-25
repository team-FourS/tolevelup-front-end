import React from 'react';
import user from '../img/user.png';
import "../css/Modify.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Mypage from "../component/Mypage";
import Edit from "../component/Edit";
import {Routes, Route, Link} from "react-router-dom";
// import { confirmAlert } from 'react-confirm-alert'; // Import

const Modify = () => {

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
        // windowObj.document.images("../img/doll.png");
        windowObj.document.close();
    };
  //const onClickDownload = () => {};
    
    return (
        <div className="layout">
            <Routes>
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>
            <Header />
            <div className='edit'>
                <Link to="/edit">
                    <h1 className='fonsz'>개인정보 수정</h1>
                </Link>
                <Link to="">
                    <h1 className='fonsz'>프로필 수정</h1>
                </Link>
            </div>
            <div className='momo'>
                
                <div className='mama'>
                        <div className="square">
                                <img className ="profils" src={user} alt='프로필' style={{width:"120px",
                                height:"120px", 
                                margin: "auto", 
                                cursor:"pointer"}} onClick={onClickNew} />
                    
                            <div >
                                <div>
                                    <h4 style={{ display:'inline-block'}}>
                                        <div style={{marginBottom:'20px', display:'block',alignItems:'center'}}>* 닉네임</div>
                                        <div style={{display:'block'}}>* 소개</div>                              
                                    </h4>

                                    <div style={{display:'inline-block'}}>
                                        <input style={{display:'block'}} type='text' className='rename' placeholder='닉네임'/>
                                        <input style={{display:'block'}} type='text' className='intro' placeholder='한 줄 소개'/> 
                                    </div>                              
                                </div> 
                            </div>   
                    </div>
                </div>
            <div >
                <button className='btnstyle' onClick={confirmSave} >저장</button>
                {/* onClick={()=>window.confirm("저장하시겠습니까?")} */}
                <Link to='/mypage'>
                    <button className='btnstyle'>취소</button>
                </Link>
            </div>
        </div>
        <Footer/> 
</div>
    )
}
export default Modify;