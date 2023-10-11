// import React, { useState} from 'react';
import React, { useState} from 'react';
// import React, { useState,useEffect } from 'react';
// import axiosInstance from "../../axiosConfig";

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

//   세연 캐릭터 연동 코드 start 삭제금지

//   useEffect(() => {

    
//     // 서버의 캐릭터 정보 가져오기

//     axiosInstance.get('api/v1/users/character')
//     .then((res) => {
//       console.log('Image data:', res.data);
//     })
//     .catch((error) => {
//         console.log('Failed to fetch user info:', error);
//     });
// }, []);

//  세연 캐릭터 연동 코드 end 삭제금지
    
  return (
    <div className="layout_char">
      <Header />
        <main className="main_character">
          <button className="btn_exercise_character">
            <span id ="health" onClick={() => setHealth(!health)}>
              {health && (
                <CModal closeModal={() => setHealth(!health)}>
                  <Exercise />
                </CModal>
            )}
            <h2 className="character_name">운동이</h2>
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
              <Eat />
            </CModal>
          )}
          <h2 className="character_name">냠냠이</h2>
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
              <Culture />
            </CModal>
          )}
          <h2 className="character_name">문생이</h2>
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
              <Hobby />
            </CModal>
          )}
          <h2 className="character_name">취밍이</h2>
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