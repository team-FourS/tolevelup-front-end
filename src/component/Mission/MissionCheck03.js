import React from 'react';
import '../../css/mission/MissionCheck.css';

const MissionCheck = () => {
    return (
        <div className='layout_mission'>
          <div className="checkList">
            <button className="btnMissionCheck">문화생활</button>
              <div className="checkBox">
                <div className="checkWrap">
                  <input type="checkbox" id="btn1" />
                  <label htmlFor="btn1"> 영화 1편 보기 </label> <br/><br/>
                </div>  

                <div className="checkWrap">
                  <input type="checkbox" id="btn2" />
                  <label htmlFor="btn2"> 독서 200페이지 이상 하기 </label> <br/><br/>
                </div>  

                <div className="checkWrap">
                  <input type="checkbox" id="btn3" />
                  <label htmlFor="btn3"> 전시회 다녀오기 </label>
                </div>
              </div>  
          </div>
        </div>  
    )
}

export default MissionCheck;