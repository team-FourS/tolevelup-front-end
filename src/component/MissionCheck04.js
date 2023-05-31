import React from 'react';
import '../css/MissionCheck.css';

const MissionCheck = () => {
    return (
        <div className='layout'>
          <div className="checkList">
            <button className="btnMission">취미</button>
              <div className="checkBox">
                <div className="checkWrap">
                  <input type="checkbox" id="btn1" />
                  <label htmlFor="btn1"> 캠핑 다녀오기 </label> <br/><br/>
                </div>  

                <div className="checkWrap">
                  <input type="checkbox" id="btn2" />
                  <label htmlFor="btn2"> 좋아하는 가수의 노래듣기 </label> <br/><br/>
                </div>  

                <div className="checkWrap">
                  <input type="checkbox" id="btn3" />
                  <label htmlFor="btn3"> 하루를 돌아오며 일기쓰기 </label>
                </div>
              </div>  
          </div>
        </div>  
    )
}

export default MissionCheck;