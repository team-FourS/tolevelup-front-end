import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Mypage from "../component/Mypage";
import Modify from "./Modify"
// import user from '../img/user.png';
import {Routes, Route, Link} from "react-router-dom";

const Edit = () => {
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
        <div className="layout">
            <Routes>
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/modify" element={<Modify />} />
            </Routes>
            <Header />
            <div className='edit'>
                <Link to="/edit">
                    <h1 className='fonsz'>개인정보 수정</h1>
                </Link>
                <Link to="/modify">
                    <h1 className='fonsz'>프로필 수정</h1>
                </Link>
            </div>
            <div className='momo'>
                
                <div className='mama'>
                        <div className="square">
                                {/* <img className ="profils" src={user} alt='프로필' 
                                style={{width:"120px",
                                height:"120px", 
                                margin: "auto", 
                                cursor:"pointer"}}/> */}
        
                                    <h4 style={{margin:'20px'}}>
                                        <input type='text' className='rename' placeholder='비밀번호'/>                               
                                    </h4>

                            <input type='text' className='intro' placeholder='아이디'/>      
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
  );
}

  export default Edit;