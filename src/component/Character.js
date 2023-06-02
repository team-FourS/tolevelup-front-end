import React from "react";
import cauldron from '../img/cauldron.png'
import seer from '../img/seer.png'
import magicwand from '../img/magicwand.png'
import doll from '../img/doll.png'
import "../css/Character.css"
import Header from "../component/Header";
import Footer from "../component/Footer";

const Character = () => {
    return (
      <div className="layout">
        <Header />
      <main className="main">
        <span id ="health" style ={{display:'block'}}>
            <img className ="home" src={cauldron} alt='집'></img>
            <h2 className="h2">운동</h2>
      </span>

        <span id ="eat" style ={{display:'block'}}>
            <img className ="home" src={seer} alt='집'></img>
            <h2 className="h2">식습관</h2>
        </span>
    </main>

  <main className="main2">
      <span id ="hobby" style ={{display:'block'}}>
          <img className ="home" src={magicwand} alt='집'></img>
          <h2 className="h2">취미</h2>
      </span>

      <span id ="play" style ={{display:'block'}}>
          <img className ="home" src={doll} alt='집'></img>
          <h2 className="h2">문화생활</h2>
      </span>
  </main>
  <Footer/>
</div>
    );
  }

  export default Character;