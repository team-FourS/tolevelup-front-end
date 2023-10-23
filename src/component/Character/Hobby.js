import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';
import LoadSpinner from '../Spinner/SpinnerCharacter';
import "../../css/character/Exercise.css"
import { FiEdit } from "react-icons/fi";

const Hobby = (props) => {

  const [Hobbyname, setHobbyname] = useState('');//캐릭터 이름
  const [Hobbycomplete, setHobbycomplete] = useState([]);//캐릭터 완료 미션
  const [Hobbyexp, setHobbyexp] = useState([]);//캐릭터 exp
  const [Hobbylevel, setHobbylevel] = useState([]);//캐릭터 level
  const [HobbyimageSrc, setHobbyImageSrc] = useState();//캐릭터 이미지
  const [Loading, setLoading] = useState(true);
  const [HobbyisEditing, setHobbyEditing] = useState(false);

  const character_id = props.userId;
  const characterimg = props.userIdimg;

  const handleExEditClick = () => {
    setHobbyEditing(true);
  };

  const handleExSaveClick = () => {
    // setHobbyEditing(true);
    axiosInstance.put(`characterName/?character_id=${character_id}`,{
      character_name:Hobbyname
    })
    .then((res) => {
      setHobbyEditing(false);
      console.log('캐릭터이름 저장완료',res.data)
    })
    .catch((error) => {
      console.log('캐릭터 이름변경중 에러', error);


    });
  };

  const handleHbNameChange = (e) => {
    setHobbyname(e.target.value);
  };

  useEffect(() => {

// 서버의 캐릭터 정보 가져오기
    axiosInstance.get('/userCharacter')
    .then((res) => {

      setHobbyname(res.data[3].userCharacter.character_name);
      setHobbyexp(res.data[3].exp);
      setHobbylevel(res.data[3].level);
      // console.log('취미',res.data[3]);

    })
    .catch((error) => {
        console.log('Failed to fetch user info:', error);
    });
    
    
//캐릭터 이미지 가져오기
  axiosInstance.get(`image?imageName=${characterimg}.png`, { responseType: 'arraybuffer' })
  .then((res) => {
  // ArrayBuffer를 Blob으로 변환
    const blob = new Blob([res.data], { type: 'image/png' });

  // Blob을 Data URL로 변환 (Base64)
    const reader = new FileReader();
    reader.onload = () => {
      setHobbyImageSrc(reader.result);
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
      setHobbycomplete(res.data.result[3].completeTotal);
      // console.log(res.data.result[3]);
    })
    .catch((error) => {
        console.log('Failed to fetch user info:', error);
    });
},[characterimg]);

    return (
      <main className="layout_health">
        {Loading ? (
        // 로딩 중인 경우 스피너를 렌더링
        <LoadSpinner />
      ) : (
        <div className="health_lay">
          <div className="however">
            <div className="name_container">
            {HobbyisEditing ? (
        <input type="text" value={Hobbyname} onChange={handleHbNameChange} placeholder="이름 입력"/>
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
            {HobbyimageSrc ? (
        <img src={HobbyimageSrc} alt="이미지" className="Lv_health"/>
      ) : (
        <p>이미지를 불러오는 중입니다...</p>
      )}
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
      )}</main> 
    );
  }

  export default Hobby;