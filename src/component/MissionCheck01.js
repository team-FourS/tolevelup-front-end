import React from 'react';
import '../css/MissionCheck.css';
import Header from "../component/Header";
import Footer from "../component/Footer";

const MissionCheck = () => {
    return (
        <div className='layout'>
          <Header/>
          <div className="checkList">
            <button className="btnMissionCheck">운동</button>
              <div className="checkBox">
                <div className="checkWrap">
                  <input type="checkbox" id="btn1" />
                  <label htmlFor="btn1"> 아침 스트레칭하기 </label> <br/><br/>
                </div>  

                <div className="checkWrap">
                  <input type="checkbox" id="btn2" />
                  <label htmlFor="btn2"> 30분 이상 산책하기 </label> <br/><br/>
                </div>  

                <div className="checkWrap">
                  <input type="checkbox" id="btn3" />
                  <label htmlFor="btn3"> 줄넘기 100회 하기 </label>
                </div>
              </div>  
          </div>
          <Footer/>
        </div>  
    )
}

export default MissionCheck;