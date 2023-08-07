import React, { useState } from "react";
import cauldron from '../../img/cauldron.png'
import "../../css/Character.css"
import Header from "../Header";
import Footer from "../Footer";
import CModal from "../CModal";
import Health from "./Health";
import Eat from "./Eat";
import Culture from "./Culture";
import Hobby from "./Hobby";
import EatCharacter from '../../img/Eat-character.png'
import culturecharacter from '../../img/Cul-chaeacter.png'
import CultureLv01 from '../../img/Culture-Lv01.png'

const Character = () => {

  const [health, setHealth] = useState(false);
  const [eat, setEat] = useState(false);
  const [culture, setPlay] = useState(false);
  const [hobby, setHobby] = useState(false);
    
  return (
    <div className="layout_char">
      <Header />
        <main className="main_character">
        <button className="btn_exercise_character">
          <span id ="health" onClick={() => setHealth(!health)}>
          {health && (
            <CModal closeModal={() => setHealth(!health)}>
              <Health />
            </CModal>
          )}
            <img className ="home" src={cauldron} alt='운동'></img>
            <h2 className="h2">운동</h2>
      </span>
</button>
</main>
<main className="main_character">
      <button className="btn_eat_character">
      <span id ="eat" style ={{display:'block'}} onClick={() => setEat(!eat)}>
          {eat && (
            <CModal closeModal={() => setEat(!eat)}>
              <Eat />
            </CModal>
          )}
            <img className ="home" src={EatCharacter} alt='식습관'></img>
            <h2 className="h2">식습관</h2>
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
          <img className ="home" src={CultureLv01} alt='문화생활'></img>
          <h2 className="h2">문화생활</h2>
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
          <img className ="home" src={culturecharacter} alt='취미'></img>
          <h2 className="h2">취미</h2>
      </span>
      </button>

  </main>
  <Footer/>
</div>
    );
  }

  export default Character;