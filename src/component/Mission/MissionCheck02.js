import React from 'react';
import '../../css/MissionCheck.css';

const MissionCheck = () => {
    return (
        <div className='layout_mission'>
          <div className="checkList">
            <button className="btnMissionCheck">식습관</button>
              <div className="checkBox">
                <div className="checkWrap">
                  <input type="checkbox" id="btn1" />
                  <label htmlFor="btn1"> 물 6잔 이상 마시기 </label> <br/><br/>
                </div>  

                <div className="checkWrap">
                  <input type="checkbox" id="btn2" />
                  <label htmlFor="btn2"> 탄수화물 적게 먹기 </label> <br/><br/>
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