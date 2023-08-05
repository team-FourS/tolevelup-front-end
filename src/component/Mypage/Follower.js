import React from "react";
import "../../css/Follower.css"
import user from '../../img/user.png';

const Follower = () => {
    return (
      <main className="layout_wer">

        <div className="wer_lay">
          <h4 className="wer_font">팔로워</h4>
          <hr />

          <table>
            <thead>
                {/* <tr>
                  <th>이미지</th>
                  <th>아이디</th>
                </tr> */}
            </thead>
            <tbody>
            <div className="follower_scrollbox">
            <div className="followerbox">
              <tr>
                <td className="td1">
                  <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                  <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
                  </div>
                </td>
                <td className="td1">
                <div className="table_wer">
                    <img className ="profil3" src={user} alt='프로필'></img>
                    <h5 className="id_wer">_whoops</h5>
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

  export default Follower;