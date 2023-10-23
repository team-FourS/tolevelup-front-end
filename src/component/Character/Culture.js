import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';
import "../../css/character/Exercise.css"
import { FiEdit } from "react-icons/fi";

const Culture = (props) => {

  const [Culturename, setCulturename] = useState([]);//캐릭터 이름
  const [Culturecomplete, setCulturecomplete] = useState([]);//캐릭터 완료 미션
  const [Cultureexp, setCultureexp] = useState([]);//캐릭터 exp
  const [Culturelevel, setCulturelevel] = useState([]);//캐릭터 level
  const [CultureimageSrc, setCultureimageSrc] = useState([]);//캐릭터 이미지

  const [CultureisEditing, setCultureEditing] = useState(false);

  const character_id = props.userId;
  const Cultureimg = props.userId3;

  const handleExEditClick = () => {
    setCultureEditing(true);
  };

  const handleExSaveClick = () => {
    axiosInstance.put(`characterName/?character_id=${character_id}`,{
      character_name:Culturename
    })
    .then((res) => {
      setCultureEditing('');
      console.log('캐릭터이름 저장완료',res.data)
      // console.log(res.data);

    })
    .catch((error) => {
      console.log('캐릭터 이름변경중 에러', error);


    });
  };

  const handleExNameChange = (e) => {
    setCulturename(e.target.value);
  };

  useEffect(() => {

// 서버의 캐릭터 정보 가져오기
    axiosInstance.get('/userCharacter')
    .then((res) => {

      setCulturename(res.data[0].userCharacter.character_name);
      setCultureexp(res.data[0].exp);
      setCulturelevel(res.data[0].level);

      // console.log('문화',res.data[0]);

    })
    .catch((error) => {
        console.log('Failed to fetch user info:', error);
    });
    
//캐릭터 이미지 가져오기
  axiosInstance.get('/image?imageName=%EB%AC%B8%ED%99%941.png', { responseType: 'arraybuffer' })
  .then((response) => {
  // ArrayBuffer를 Blob으로 변환
    const blob = new Blob([response.data], { type: 'image/png' });

  // Blob을 Data URL로 변환 (Base64)
    const reader = new FileReader();
    reader.onload = () => {
      setCultureimageSrc(reader.result);
    };
    reader.readAsDataURL(blob);
  })
    .catch((error) => {
        console.log('이미지 불러오기 실패:', error);
    });

//캐릭터 완료미션 가져오기
    axiosInstance.get('api/v1/users/missions/themes/counts')
    .then((res) => {
      setCulturecomplete(res.data.result[2].completeTotal);
      // console.log('완료미션',res.data.result[2]);
    })
    .catch((error) => {
        console.log('Failed to fetch user info:', error);
    });
}, [Cultureimg]);

    return (
      <main className="layout_health">
        <div className="health_lay">
          <div className="however">
            <div className="name_container">
            {CultureisEditing ? (
        <input type="text" value={Culturename} onChange={handleExNameChange} />
      ) : (
        <h2 className="health_font1">{Culturename}</h2>
      )}
      {CultureisEditing ? (
        <button className="save_name_button" onClick={handleExSaveClick}>
          저장
        </button>
      ) : (
          <FiEdit className="edit_name_icon" onClick={handleExEditClick}/>
      )}
            </div>
            {CultureimageSrc ? (
        <img src={CultureimageSrc} alt="이미지" className="Lv_health"/>
      ) : (
        <p>이미지를 불러오는 중입니다...</p>
      )}
              <h4 className="health_font2">현재 당신의 레벨은</h4>
                <h2 className="health_font3">&#10024; Lv. {Culturelevel}&#10024;</h2>
                  <div className="status-hpchar">
                      <div className="bar_char">
                          <div className="currentBar_char3" style={{width:`${Cultureexp}px`}}></div>    
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
                        <h4 className="health_font4">{Culturecomplete} 개</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
</div>
      </main> 

    );
  }

  export default Culture;