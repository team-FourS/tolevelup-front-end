import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../css/Ranking.css";

const Rank = () => {
    return (
      <main className="layout_ranking">
        <Header/>
          <div className="header_ranking">
            <button className="ranking_button">전체</button>
            <button className="ranking_button">운동</button>
            <button className="ranking_button">식습관</button>
            <button className="ranking_button">문화생활</button>
            <button className="ranking_button">취미</button>
            
          </div>

          
        <Footer/>
      </main>  
    );
  }

  export default Rank;