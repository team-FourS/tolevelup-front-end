import React from 'react';
import '../../css/testMissionCheck.css';

const MissionCheck01 = () => {
    return (
        <div className='layout_mission'>
          <div className="checkList">
            <button className="btnMissionCheck">운동</button>
              <div className="checkBox1">
                <div className="checkWrap">
                  <input type="checkbox" id="btn1" />
                  <label for="btn01"> 계단 오르락 내리락 </label> <br/><br/>
                </div>  

                <div className="checkWrap">
                  <input type="checkbox" id="btn2" />
                  <label for="btn2"> 런닝하기 </label> <br/><br/>
                </div>  

                <div className="checkWrap">
                  <input type="checkbox" id="btn3" />
                  <label for="btn3"> 줄넘기 100회 하기 </label>
                </div>
              </div>  
          </div>
        </div>  
    )
}

export default MissionCheck01;