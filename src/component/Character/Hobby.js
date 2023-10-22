import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';
import "../../css/character/Exercise.css"
import HobbyLv01 from '../../img/Hobby-Lv01.png'
import { FiEdit } from "react-icons/fi";

const Hobby = (props) => {

  const [Hobbyname, setHobbyname] = useState([]);//캐릭터 이름
  const [Hobbycomplete, setHobbycomplete] = useState([]);//캐릭터 완료 미션
  const [Hobbyexp, setHobbyexp] = useState([]);//캐릭터 exp
  const [Hobbylevel, setHobbylevel] = useState([]);//캐릭터 level
  // const [imageSrc, setImageSrc] = useState([]);//캐릭터 이미지

  const [HobbyisEditing, setHobbyEditing] = useState(false);

  const character_id = props.userId;

  const handleExEditClick = () => {
    setHobbyEditing(true);
  };

  const handleExSaveClick = () => {
    axiosInstance.put(`characterName/?character_id=${character_id}`,{
      character_name:Hobbyname
    })
    .then((res) => {
      setHobbyEditing('');

    })
    .catch((error) => {
      console.log('캐릭터 이름변경중 에러', error);


    });
  };

  const handleExNameChange = (e) => {
    setHobbyname(e.target.value);
  };

  useEffect(() => {

// 서버의 캐릭터 정보 가져오기
    axiosInstance.get('/userCharacter')
    .then((res) => {

      setHobbyname(res.data[3].userCharacter.character_name);
      setHobbyexp(res.data[3].exp);
      setHobbylevel(res.data[3].level);
      console.log('취미',res.data[3]);

    })
    .catch((error) => {
        console.log('Failed to fetch user info:', error);
    });
    
//캐릭터 이미지 가져오기
  // axiosInstance.get('/image?imageName=%EB%AC%B8%ED%99%941.png', { responseType: 'arraybuffer' })
  // .then((response) => {
  // // ArrayBuffer를 Blob으로 변환
  //   const blob = new Blob([response.data], { type: 'image/png' });

  // // Blob을 Data URL로 변환 (Base64)
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImageSrc(reader.result);
  //   };
  //   reader.readAsDataURL(blob);
  // })
  //   .catch((error) => {
  //       console.log('이미지 불러오기 실패:', error);
  //   });

//캐릭터 완료미션 가져오기
    axiosInstance.get('api/v1/users/missions/themes/counts')
    .then((res) => {
      setHobbycomplete(res.data.result[3].completeTotal);
      console.log(res.data.result[3]);
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
            {HobbyisEditing ? (
        <input type="text" value={Hobbyname} onChange={handleExNameChange} />
      ) : (
        <h2 className="health_font1">{Hobbyname}</h2>
      )}
      {HobbyisEditing ? (
        <button className="save_name_button" onClick={handleExSaveClick}>
          저장
        </button>
      ) : (
          <FiEdit className="edit_name_icon" onClick={handleExEditClick}/>
      )}
            </div>
            <img className ="Lv_health" src={HobbyLv01} alt='식습관레벨'></img>
              <h4 className="health_font2">현재 당신의 레벨은</h4>
                <h2 className="health_font3"><strong>&#10024;Lv. {Hobbylevel}&#10024;</strong></h2>
                  <div className="status-hpchar">
                      <div className="bar_char">
                          <div className="currentBar_char4" style={{width:`${Hobbyexp}px`}}></div>    
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
                        <h4 className="health_font4">{Hobbycomplete} 개</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
</div>
      </main> 
 
    );
  }

  export default Hobby;