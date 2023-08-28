import React from "react";
import "../../css/mypage/Following.css"
import user from '../../img/user.png';

const Following = () => {
    return (
      <main className="layout_wing" onClick={(e) => e.stopPropagation()}>

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
            <div className="following_scrollbox">
            <div className="followingbox">
              <tr>
                <td className="td">
                  <div className="table_following_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_.whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_following_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_following_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_following_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_following_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_following_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_following_lay">
                    <img className ="profil2" src={user} alt='프로필'></img>
                    <h5 className="id_alarm">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_following_lay">
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
      </main>  
    );
  }

  export default Following;