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

import ExerciseCharacter from '../../img/Exercise-Lv01.png'
import EatCharacter from '../../img/Eat-Lv01.png'
import HobbyCharacter from '../../img/Hobby-Lv01.png'
import CultureCharacter from '../../img/Culture-Lv01.png'


const Character = () => {

  const [health, setHealth] = useState(false);
  const [eat, setEat] = useState(false);
  const [culture, setPlay] = useState(false);
  const [hobby, setHobby] = useState(false);

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

      // console.log(res.data[3]);

    })

}, []);
    
  return (
    <div className="layout_char">
      <Header />
        <main className="main_character">
          <button className="btn_exercise_character">
            <span id ="health" onClick={() => setHealth(!health)}>
              {health && (
                <CModal closeModal={() => setHealth(!health)}>
                  <Exercise userId={saveExerciseId}/>
                </CModal>
            )}
            <h2 className="character_name">{charactername3}</h2>
            <img className ="character_img" src={ExerciseCharacter} alt='운동'></img>
            <p className="character_theme">운동</p>
      </span>
</button>
</main>
<main className="main_character">
      <button className="btn_eat_character" onClick={() => setEat(!eat)}>
        <span className ="eat" style ={{display:'block'}} onClick={() => setEat(!eat)}>
          {eat && (
            <CModal closeModal={() => setEat(!eat)}>
              <Eat userId={saveId}/>
            </CModal>
          )}
          <h2 className="character_name">{charactername2}</h2>
          <img className ="character_img" src={EatCharacter} alt='식습관'></img>
          <p className="character_theme">식습관</p>
        </span>
        
        </button>
        </main>
    

  <main className="main_character">
    <button className="btn_culture_character">
      <span id ="play" style ={{display:'block'}} onClick={() => setPlay(!culture)}>
          {culture && (
            <CModal closeModal={() => setPlay(!culture)}>
              <Culture userId={saveCulture}/>
            </CModal>
          )}
          <h2 className="character_name">{charactername1}</h2>
          <img className ="character_img" src={CultureCharacter} alt='문화생활'></img>
          <p className="character_theme">문화생활</p>
      </span>
      </button>
      </main>
      <main className="main_character">
      <button className="btn_hobby_character">
      <span id ="hobby" style ={{display:'block'}} onClick={() => setHobby(!hobby)}>
          {hobby && (
            <CModal closeModal={() => setHobby(!hobby)}>
              <Hobby userId={saveHobbyId}/>
            </CModal>
          )}
          <h2 className="character_name">{charactername4}</h2>
            <img className ="character_img" src={HobbyCharacter} alt='취미'></img>
            <p className="character_theme">취미</p>
      </span>
      </button>

  </main>
  <Footer/>
</div>
    );
  }

  export default Character;