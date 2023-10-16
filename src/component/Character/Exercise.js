import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';
import "../../css/character/Exercise.css"
import ExerciseLv01 from '../../img/Exercise-Lv01.png'
import { FiEdit } from "react-icons/fi";

const Health = () => {

  const [Exercisecharactername, setExercisecharactername] = useState([]);//캐릭터 이름
  const [Exercisecomplete, setExercisecomplete] = useState([]);//캐릭터 완료 미션
  const [Exerciseexp, setExerciseexp] = useState([]);//캐릭터 exp
  const [Exerciselevel, setExerciselevel] = useState([]);//캐릭터 level
  // const [imageSrc, setImageSrc] = useState([]);//캐릭터 이미지

  const [ExerciseisEditing, setExerciseEditing] = useState(false);

  const handleExEditClick = () => {
    setExerciseEditing(true);
  };

  const handleExSaveClick = () => {
    setExerciseEditing(false);
    // 여기에서 이름을 저장하거나 다른 작업을 수행할 수 있다.
  };

  const handleExNameChange = (e) => {
    setExercisecharactername(e.target.value);
  };

  useEffect(() => {

// 서버의 캐릭터 정보 가져오기
    axiosInstance.get('/userCharacter')
    .then((res) => {

      setExercisecharactername(res.data[2].userCharacter.character_name);
      setExerciseexp(res.data[2].exp);
      setExerciselevel(res.data[2].level);

      console.log(res.data[2]);

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
      setExercisecomplete(res.data.result[0].completeTotal);
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
              {ExerciseisEditing ? (
        <input type="text" value={Exercisecharactername} onChange={handleExNameChange} />
      ) : (
        <h2 className="health_font1">{Exercisecharactername}</h2>
      )}
      {ExerciseisEditing ? (
        <button className="save_name_button" onClick={handleExSaveClick}>
          저장
        </button>
      ) : (
        <button className="edit_name_button" onClick={handleExEditClick}>
          <FiEdit className="edit_name_icon" />
        </button>
      )}
            </div>  
            <img className ="Lv_health" src={ExerciseLv01} alt='운동레벨'></img>
              <h4 className="health_font2">현재 당신의 레벨은</h4>
                <h2 className="health_font3">&#10024;Lv. {Exerciselevel}&#10024;</h2>
                  <div className="status-hpchar">
                      <div className="bar_char">
                          <div className="currentBar_char1" style={{width:`${Exerciseexp}%`}}></div>    
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
                        <h4 className="health_font4">{Exercisecomplete} 개</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
              </div>
      </main> 
 
    );
  }

  export default Health;