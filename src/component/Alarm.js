import React from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
import "../css/Alarm.css"
import user from '../img/user.png';

const Alarm = () => {
    return (
      <main className="layout_alr">

        {/* <Header/> */}

        <div className="alarm_lay">
          <h4 className="alarm_font">알람</h4>
          <hr />

          <table>
            <thead>
                {/* <tr>
                  <th>이미지</th>
                  <th>아이디</th>
                </tr> */}
            </thead>
            <tbody>
            <div className="Alarm_scrollbox">
            <div className="alarmbox">
              <tr>
                <td className="td">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_님이 팔로우 하셨습니다.</h5>
                    <h6 className="id_alarm_time">지금</h6>
                  </div>
                </td>
                <td className="td">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_님이 코멘트를 남기셨습니다.</h5>
                    <h6 className="id_alarm_time">5분전</h6>
                  </div>
                </td>
                <td className="td">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                
              </tr>
              </div>
              </div>
            
            </tbody>
          </table>
        </div>

        {/* <Footer/> */}
      </main>  
    );
  }

  export default Alarm;