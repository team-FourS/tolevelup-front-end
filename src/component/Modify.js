import React from 'react';
import user from '../img/user.png';
import "../css/Modify.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Mypage from "../component/Mypage";
import {Routes, Route, Link} from "react-router-dom";

const Modify = () => {

    const onClickNew = () => {
    // 새창에서 열기 => 새로고침 필요X
    let windowObj = window.open('', 'img', 'width=400, height=300, toolbars=no, scrollbars=no, status=no, resizable=no');
        // windowObj.document.images("../img/doll.png");
        windowObj.document.close();
  
  };
  //const onClickDownload = () => {};
  
//   ReactDom.render(
//     <img className ="profils" src={user}></img>
//   )
  return (
        <div className="layout">
            <Routes>
                <Route path="/mypage" element={<Mypage />} />
            </Routes>
            <Header />
            <div className='momo'>
                <div className='mama'>
                    {/* <img className ="myimg" src={set} alt='이미지변경' style={{width:"40px",height:"40px", float: "left"}}></img> */}
                        <div className="square">
                                <img className ="profils" src={user} alt='프로필' style={{width:"120px",height:"120px", margin: "auto", cursor:"pointer"}} 
                                onClick={onClickNew}/>
        
                                    <h4 style={{margin:'20px'}}>
                                        <input type='text' className='rename' placeholder='닉네임'/>                               
                                    </h4>

                            <input type='text' className='intro' placeholder='한 줄 소개'/>      
                    </div>
                </div>
            <div >
                <button className='btnstyle' onClick={()=>window.confirm("저장하시겠습니까?")}>저장</button>
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