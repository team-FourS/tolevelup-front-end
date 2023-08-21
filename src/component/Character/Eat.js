import React from "react";
import "../../css/character/Exercise.css"
import EatLv01 from '../../img/Eat-Lv01.png'

const Eat = () => {
    return (
      <main className="layout_health">
        <div className="health_lay">
        <div className="however">
          <h2 className="health_font1"><strong>식습관</strong></h2>
            <img className ="Lv_health" src={EatLv01} alt='운동레벨'></img>
              <h4 className="health_font2">당신의 레벨은 현재</h4>

                <h2 className="health_font3"><strong>&#10024;Lv. _&#10024;</strong></h2>
                  <div className="status-hpchar">
                      <div className="bar_char">
                          <div className="currentBar_char4" style={{width:'70px'}}></div>    
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
                        <h4 className="health_font4">20 개</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
</div>
      </main> 
 
    );
  }

  export default Eat;