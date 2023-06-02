import React from 'react';
import user from '../img/user.png';
import "../css/Modify.css";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Modify = () => {
    return (
        <div className="layout">
            <Header />
            <div className='momo'>
                <div className='mama'>
                    {/* <img className ="myimg" src={set} alt='이미지변경' style={{width:"40px",height:"40px", float: "left"}}></img> */}
                        <div className="square">
                                <img className ="profils" src={user} alt='프로필' style={{width:"120px",height:"120px", margin: "auto"}}></img>   
                                    <h4 style={{margin:'20px'}}>
                                        <input type='text' className='rename' placeholder='닉네임'/>                               
                                    </h4>
                            <input type='text' className='intro' placeholder='한 줄 소개'/>      
                    </div>
                </div>
            <div >
                <button className='btnstyle'>저장</button>
                <button className='btnstyle'>취소</button>
            </div>
        </div>
        <Footer/> 
</div>
    )
}
export default Modify;