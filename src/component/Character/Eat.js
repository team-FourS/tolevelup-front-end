import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';

import "../../css/character/Exercise.css"
import EatLv01 from '../../img/Eat-Lv01.png'
import { FiEdit } from "react-icons/fi";

const Eat = () => {

  const [Eatcharactername1, setEatcharactername1] = useState([]);//캐릭터 이름
  const [Eatcomplete2, setcomplete2] = useState([]);//캐릭터 이름

  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // 여기에서 이름을 저장하거나 다른 작업을 수행할 수 있다.
  };

  const handleNameChange = (e) => {
    setEatcharactername1(e.target.value);
  };

  useEffect(() => {

    // 서버의 캐릭터 정보 가져오기
    axiosInstance.get('/userCharacter')
    .then((res) => {

      setEatcharactername1(res.data[1].character_name);

    })
    .catch((error) => {
        console.log('Failed to fetch user info:', error);
    });

    axiosInstance.get('api/v1/users/missions/themes/counts')
    .then((res) => {

      setcomplete2(res.data.result[1].completeTotal);
      console.log(res.data.result[1].completeTotal);

    })
    .catch((error) => {
        console.log('Failed to fetch user info:', error);
    });

}, []);

    return (
      <main className="layout_health">
        <div className="health_lay">
        <div className="however">
          <div className="name_container">
              {isEditing ? (
        <input type="text" value={Eatcharactername1} onChange={handleNameChange} />
      ) : (
        <h2 className="health_font1">{Eatcharactername1}</h2>
      )}
      {isEditing ? (
        <button className="save_name_button" onClick={handleSaveClick}>
          저장
        </button>
      ) : (
        <button className="edit_name_button" onClick={handleEditClick}>
          <FiEdit className="edit_name_icon" />
        </button>
      )}
            </div>
            <img className ="Lv_health" src={EatLv01} alt='식습관레벨'></img>
              <h4 className="health_font2">현재 당신의 레벨은</h4>

                <h2 className="health_font3">&#10024;Lv. _&#10024;</h2>
                  <div className="status-hpchar">
                      <div className="bar_char">
                          <div className="currentBar_char2" style={{width:'70px'}}></div>    
                      </div>
                    </div>
                  <hr />
                  <table>
                    <thead></thead>
                    <tbody style={{display:'inline-flex'}}>
                      <tr>
                        <td>
                        <h4 className="health_font2">완료미션</h4>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <h4 className="health_font4">{Eatcomplete2} 개</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
</div>
      </main> 
 
    );
  }

  export default Eat;