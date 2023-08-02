import React from "react";
import "../../css/Following.css"
import user from '../../img/user.png';

const Following = () => {
    return (
      <main className="layout_wing">

        {/* <Header/> */}

        <div className="alarm_lay">
          <h4 className="alarm_font">팔로잉</h4>
          <hr />

          <table>
            <thead>
                {/* <tr>
                  <th>이미지</th>
                  <th>아이디</th>
                </tr> */}
            </thead>
            <tbody>
              <tr>
                <td className="td">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <Footer/> */}
      </main>  
    );
  }

  export default Following;