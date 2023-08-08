import React from "react";
import "../../css/Health.css"
import Hobby1 from '../../img/Hobby1.png'

const Hobby = () => {
    return (
      <main className="layout_health">
        <div className="health_lay">
        <div className="however">
          <h2 className="health_font1"><strong>취미</strong></h2>
            <img className ="Lv_health" src={Hobby1} alt='운동레벨'></img>
              <h4 className="health_font2">당신의 레벨은 현재</h4>
                <h2 className="health_font3"><strong>Lv. _</strong></h2>
                  <div className="status-hpchar">
                      <div className="bar_char">
                          <div className="currentBar_char3" style={{width:'70px'}}></div>    
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

  export default Hobby;