import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';

import "../../css/character/Character.css"
import Header from "../Header/Header";
import Footer from "../Footer";
import CModal from "../Modal/CModal";

import Exercise from "./Exercise";
import Eat from "./Eat";
import Culture from "./Culture";
import Hobby from "./Hobby";

import LoadSpinner from '../Spinner/SpinnerCharacter';

const Character = () => {

  const [health, setHealth] = useState(false);
  const [eat, setEat] = useState(false);
  const [culture, setPlay] = useState(false);
  const [hobby, setHobby] = useState(false);

  const [Loading, setLoading] = useState(true);

  //캐릭터 정보가져오기
  //캐릭터 이름
  const [charactername1, setcharactername1] = useState([]);
  const [charactername2, setcharactername2] = useState([]);
  const [charactername3, setcharactername3] = useState([]);
  const [charactername4, setcharactername4] = useState([]);

  const [saveId, setsaveId] = useState('');
  const [saveExerciseId, setsaveExerciseId] = useState('');
  const [saveCulture, setsaveCultureId] = useState('');
  const [saveHobbyId, setsaveHobbyId] = useState('');

  const [getHobbyImg, setgetHobbyImg] = useState('');
  const [getEatImg, setgetEatImg] = useState('');
  const [getExerciseImg, setgetExerciseImg] = useState('');
  const [getCultureImg, setgetCultureImg] = useState('');
  
  const [EatimageSrc, setEatimageSrc] = useState([]);
  const [ExerciseimageSrc, setExerciseimageSrc] = useState([]);
  const [HobbyImgimageSrc, setHobbyImgimageSrc] = useState([]);
  const [CultureimageSrc, setCultureimageSrc] = useState([]);

  useEffect(() => {

    // 서버의 캐릭터 정보 가져오기
    axiosInstance.get('/userCharacter')
    .then((res) => {

      setcharactername2(res.data[1].userCharacter.character_name);//식습관
      setcharactername3(res.data[2].userCharacter.character_name);//운동
      setcharactername1(res.data[0].userCharacter.character_name);//문화
      setcharactername4(res.data[3].userCharacter.character_name);//취미

      setsaveId(res.data[1].userCharacter.character.id);//식습관
      setsaveExerciseId(res.data[2].userCharacter.character.id);//운동
      setsaveCultureId(res.data[0].userCharacter.character.id);//문화
      setsaveHobbyId(res.data[3].userCharacter.character.id)//취미

      setgetExerciseImg(res.data[2].userCharacter.character.img)//운동
      setgetEatImg(res.data[1].userCharacter.character.img)//식습관
      setgetCultureImg(res.data[0].userCharacter.character.img)//문화
      setgetHobbyImg(res.data[3].userCharacter.character.img)//취미

    })

    //캐릭터 이미지 가져오기=식습관
  axiosInstance.get(`image?imageName=${getEatImg}.png`, { responseType: 'arraybuffer' })
  .then((res) => {
    const blob = new Blob([res.data], { type: 'image/png' });
    const reader = new FileReader();
    reader.onload = () => {
      setEatimageSrc(reader.result);
    };
    reader.readAsDataURL(blob);
    setLoading(false);
  })
    .catch((error) => {
    });

    //캐릭터 이미지 가져오기=운동
  axiosInstance.get(`image?imageName=${getExerciseImg}.png`, { responseType: 'arraybuffer' })
  .then((res) => {
    const blob = new Blob([res.data], { type: 'image/png' });
    const reader = new FileReader();
    reader.onload = () => {
      setExerciseimageSrc(reader.result);
    };
    reader.readAsDataURL(blob);
    setLoading(false);
  })
    .catch((error) => {

    });

  axiosInstance.get(`image?imageName=${getHobbyImg}.png`, { responseType: 'arraybuffer' })
  .then((res) => {
    const blob = new Blob([res.data], { type: 'image/png' });

    const reader = new FileReader();
    reader.onload = () => {
      setHobbyImgimageSrc(reader.result);
    };
    reader.readAsDataURL(blob);
    setLoading(false);
  })
    .catch((error) => {

    });

  axiosInstance.get(`image?imageName=${getCultureImg}.png`, { responseType: 'arraybuffer' })
  .then((res) => {
    const blob = new Blob([res.data], { type: 'image/png' });
    const reader = new FileReader();
    reader.onload = () => {
      setCultureimageSrc(reader.result);
    };
    reader.readAsDataURL(blob);
    setLoading(false);
  })
    .catch((error) => {
    });

}, [getEatImg,getExerciseImg,getCultureImg,getHobbyImg]);
    
  return (
    <div className="layout_char">
      <Header />
      {Loading ? (
        <LoadSpinner />
      ) : (
      <div>
        <main className="main_character">
          <button className="btn_exercise_character">
          {Loading ? (
        <LoadSpinner />
      ) : (
            <span id ="health" onClick={() => setHealth(!health)}>
              {health && (
                <CModal closeModal={() => setHealth(!health)}>
                  <Exercise userId={saveExerciseId} userId1={getExerciseImg}/>
                </CModal>
            )}
            <h2 className="character_name">{charactername3}</h2>
            {ExerciseimageSrc ? (
        <img src={ExerciseimageSrc} alt="이미지" className="character_img"/>
      ) : (
        <p>이미지를 불러오는 중입니다...</p>
      )}
            <p className="character_theme">운동</p>
      </span>
      )}
</button>
</main>
<main className="main_character">
      <button className="btn_eat_character" onClick={() => setEat(!eat)}>
      {Loading ? (
        <LoadSpinner />
      ) : (
        <span className ="eat" style ={{display:'block'}} onClick={() => setEat(!eat)}>
          {eat && (
            <CModal closeModal={() => setEat(!eat)}>
              <Eat userId={saveId} userId2={getEatImg}/>
            </CModal>
          )}
          <h2 className="character_name">{charactername2}</h2>
          {EatimageSrc ? (
        <img src={EatimageSrc} alt="이미지" className="character_img"/>
      ) : (
        <p>이미지를 불러오는 중입니다...</p>
      )}
          <p className="character_theme">식습관</p>
        </span>
        )}
        </button>
        </main>
  <main className="main_character">
    <button className="btn_culture_character">
    {Loading ? (
        <LoadSpinner />
      ) : (
      <span id ="play" style ={{display:'block'}} onClick={() => setPlay(!culture)}>
          {culture && (
            <CModal closeModal={() => setPlay(!culture)}>
              <Culture userId={saveCulture} userId3={getCultureImg}/>
            </CModal>
          )}
          <h2 className="character_name">{charactername1}</h2>
          {CultureimageSrc ? (
          <img src={CultureimageSrc} alt="이미지" className="character_img"/>
      ) : (
        <p>이미지를 불러오는 중입니다...</p>
      )}
          <p className="character_theme">문화생활</p>
      </span>)}
      </button>
      </main>
      <main className="main_character">
      <button className="btn_hobby_character">
      {Loading ? (
        <LoadSpinner />
      ) : (
      <span id ="hobby" style ={{display:'block'}} onClick={() => setHobby(!hobby)}>
          {hobby && (
            <CModal closeModal={() => setHobby(!hobby)}>
              <Hobby userId={saveHobbyId} userIdimg={getHobbyImg}/>
            </CModal>
          )}
          <h2 className="character_name">{charactername4}</h2>
          {HobbyImgimageSrc ? (
          <img src={HobbyImgimageSrc} alt="이미지" className="character_img"/>
      ) : (
        <p>이미지를 불러오는 중입니다...</p>
      )}
            <p className="character_theme">취미</p>
      </span>)}
      </button>
  </main>
  </div>
  )}
  <Footer/>
</div>
    );
  }

  export default Character;