import React, { useState } from "react";
import cauldron from '../../img/cauldron.png'
import seer from '../../img/seer.png'
import magicwand from '../../img/magicwand.png'
import doll from '../../img/doll.png'
import "../../css/Character.css"
import Header from "../Header";
import Footer from "../Footer";
import CModal from "../CModal";
import Health from "./Health";
import Eat from "./Eat";
import Culture from "./Culture";
import Hobby from "./Hobby";

const Character = () => {
  const [health, setHealth] = useState(false);
  const [eat, setEat] = useState(false);
  const [culture, setPlay] = useState(false);
  const [hobby, setHobby] = useState(false);
    
  return (
    <div className="layout_char">
      <Header />
        <main className="main">
          <span id ="health" onClick={() => setHealth(!health)}>
          {health && (
            <CModal closeModal={() => setHealth(!health)}>
              <Health />
            </CModal>
          )}
            <img className ="home" src={cauldron} alt='운동'></img>
            <h2 className="h2">운동</h2>
      </span>

        <span id ="hobby" style ={{display:'block'}} onClick={() => setHobby(!hobby)}>
          {hobby && (
            <CModal closeModal={() => setHobby(!hobby)}>
              <Hobby />
            </CModal>
          )}
          <img className ="home" src={magicwand} alt='취미'></img>
          <h2 className="h2">취미임</h2>
      </span>
    </main>

  <main className="main2">
  <span id ="eat" style ={{display:'block'}} onClick={() => setEat(!eat)}>
          {eat && (
            <CModal closeModal={() => setEat(!eat)}>
              <Eat />
            </CModal>
          )}
            <img className ="home" src={seer} alt='식습관'></img>
            <h2 className="h2">식습관</h2>
        </span>

      <span id ="play" style ={{display:'block'}} onClick={() => setPlay(!culture)}>
          {culture && (
            <CModal closeModal={() => setPlay(!culture)}>
              <Culture />
            </CModal>
          )}
          <img className ="home" src={doll} alt='문화생활'></img>
          <h2 className="h2">문화</h2>
      </span>
  </main>
  <Footer/>
</div>
    );
  }

  export default Character;