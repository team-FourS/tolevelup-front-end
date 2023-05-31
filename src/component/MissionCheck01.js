import React from 'react';
import '../css/MissionCheck.css';

const MissionCheck = () => {
    return (
        <div className='layout'>
          <div className="checkList">
            <button className="btnMission">운동</button>
              <div className="checkBox">
                <div className="checkWrap">
                  <input type="checkbox" id="btn1" />
                  <label htmlFor="btn1"> 아침에 스트레칭하기 </label> <br/><br/>
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
        </div>  
    )
}

export default MissionCheck;