import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';
import LoadSpinner from '../Spinner/SpinnerCharacter';
import "../../css/character/Exercise.css"
// import EatLv01 from '../../img/Eat-Lv01.png'
import { FiEdit } from "react-icons/fi";

const Eat = (props) => {

  const [Eatcharactername1, setEatcharactername1] = useState([]);//캐릭터 이름
  const [Eatcomplete2, setcomplete2] = useState([]);//캐릭터 완료 미션
  const [Eatexp, setEatexp] = useState([]);//캐릭터 exp
  const [Eatlevel, setEatlevel] = useState([]);//캐릭터 level
  const [EatimageSrc, setEatimageSrc] = useState([]);//캐릭터 이미지

  const [EatisEditing, setEatEditing] = useState(false);
  const [Loading, setLoading] = useState(true);
  const character_id = props.userId;
  const Eatimg = props.userId2;

  const handleEditClick = () => {
    setEatEditing(true);
  };

  const handleSaveClick = () => {

    axiosInstance.put(`characterName/?character_id=${character_id}`,{
      character_name:Eatcharactername1
    })
    .then((res) => {
      setEatEditing('');
    })
    .catch((error) => {
      console.log('캐릭터 이름변경중 에러', error);


    });
  };

  const handleNameChange = (e) => {
    setEatcharactername1(e.target.value);
  };

  useEffect(() => {

// 서버의 캐릭터 정보 가져오기
    axiosInstance.get('/userCharacter')
    .then((res) => {

      setEatcharactername1(res.data[1].userCharacter.character_name);
      setEatexp(res.data[1].exp);
      setEatlevel(res.data[1].level);

    })
    .catch((error) => {
        console.log('Failed to fetch user info:', error);
    });
    
//캐릭터 이미지 가져오기
  axiosInstance.get(`image?imageName=${Eatimg}.png`, { responseType: 'arraybuffer' })
  .then((res) => {
  // ArrayBuffer를 Blob으로 변환
  // console.log(res);
    const blob = new Blob([res.data], { type: 'image/png' });

  // Blob을 Data URL로 변환 (Base64)
    const reader = new FileReader();
    reader.onload = () => {
      setEatimageSrc(reader.result);
      setLoading(false);
    };
    reader.readAsDataURL(blob);
  })
    .catch((error) => {
        console.log('이미지 불러오기 실패:', error);
    });

//캐릭터 완료미션 가져오기
    axiosInstance.get('api/v1/users/missions/themes/counts')
    .then((res) => {
      setcomplete2(res.data.result[1].completeTotal);
    })
    .catch((error) => {
        console.log('Failed to fetch user info:', error);
    });
},[Eatimg]);

    return (
      <main className="layout_health">
        {Loading ? (
        // 로딩 중인 경우 스피너를 렌더링
        <LoadSpinner />
      ) : (
        <div className="health_lay">
        <div className="however">
          <div className="name_container">
              {EatisEditing ? (
        <input type="text" value={Eatcharactername1} onChange={handleNameChange} />
      ) : (
        <h2 className="health_font1">{Eatcharactername1}</h2>
      )}
      {EatisEditing ? (
        <button className="save_name_button" onClick={handleSaveClick}>
          저장
        </button>
      ) : (
          <FiEdit className="edit_name_icon" onClick={handleEditClick}/>
      )}
            </div>
            {EatimageSrc ? (
        <img src={EatimageSrc} alt="이미지" className="Lv_health"/>
      ) : (
        <p>이미지를 불러오는 중입니다...</p>
      )}
              <h4 className="health_font2">현재 당신의 레벨은</h4>

                <h2 className="health_font3">&#10024;Lv. {Eatlevel}&#10024;</h2>
                  <div className="status-hpchar">
                      <div className="bar_char">
                          <div className="currentBar_char2" style={{width:`${Eatexp}px`}}></div>    
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
</div>)}
      </main> 
 
    );
  }

  export default Eat;