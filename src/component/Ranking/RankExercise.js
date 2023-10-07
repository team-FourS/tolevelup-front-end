import React from "react";
import user from '../../img/user.png';
import RankingNum1 from '../../img/medal1.png';
import RankingNum2 from '../../img/medal2.png';
import RankingNum3 from '../../img/medal3.png';

import "../../css/ranking/Fifth.css";

const RankExercise = () => {
    return (
<main className="layout_fifth">
  <table className="rank_table">
  <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
    <tbody >
    <div className="rank_scrollbox">
    <div className="rankingbox">
      <tr>
        <td className="Rank_block">
        <div className="table_wer2">
          <div className="rank_block">
            <div className="rank_locate">
              <td>
                <img className ="ranking_number" src={RankingNum1} alt='프로필' />
              </td>
              <td>
                <img className ="rank_user_profile" src={user} alt='프로필' />
              </td>
              <td>
                <div className="rank_Info">
                  <h4 className="rank_user_name"> Lv1. 안나 </h4> 
                  <h4 className="rank_user_id">._.annajo</h4>
                </div>
              </td>     
            </div>
          </div>
          </div>
        </td>
        <td className="Rank_block">
        <div className="table_wer2">
          <div className="rank_block">
            <div className="rank_locate">
            <td>
                <img className ="ranking_number" src={RankingNum2} alt='프로필' />
              </td>
              <td>
                <img className ="rank_user_profile" src={user} alt='프로필' />
              </td>
              <td>
                <div className="rank_Info">
                  <h4 className="rank_user_name"> Lv3. 근손실 </h4> 
                  <h4 className="rank_user_id">musleking</h4>
                </div>
                </td>     
            </div>
          </div>
          </div>
        </td>
        <td className="Rank_block">
        <div className="table_wer2">
          <div className="rank_block">
            <div className="rank_locate">
            <td>
                <img className ="ranking_number" src={RankingNum3} alt='프로필' />
              </td>
              <td>
                <img className ="rank_user_profile" src={user} alt='프로필' />
              </td>
              <td>
                <div className="rank_Info">
                  <h4 className="rank_user_name"> Lv4. 근육맨 </h4> 
                  <h4 className="rank_user_id">strrrong_man</h4>
                </div>
                </td>     
            </div>
          </div>
          </div>
        </td>
        <td className="Rank_block">
        <div className="table_wer2">
          <div className="rank_block">
            <div className="rank_locate">
            <td>
                <h3 className="rank_4">4</h3>
              </td>
              <td>
                <img className ="rank_user_profile" src={user} alt='프로필' />
              </td>
              <td>
                <div className="rank_Info">
                  <h4 className="rank_user_name"> Lv1. 런닝머신 </h4> 
                  <h4 className="rank_user_id">running_man</h4>
                </div>
                </td>      
            </div>
          </div>
          </div>
        </td>
        <td className="Rank_block">
        <div className="table_wer2">
          <div className="rank_block">
            <div className="rank_locate">
            <td>
                <h3 className="rank_4">5</h3>
              </td>
              <td>
                <img className ="rank_user_profile" src={user} alt='프로필' />
              </td>
              <td>
                <div className="rank_Info">
                  <h4 className="rank_user_name"> Lv2. 새우깡 </h4> 
                  <h4 className="rank_user_id">kannngg</h4>
                </div>
                </td>     
            </div>
          </div>
          </div>
        </td>
        <td className="Rank_block">
        <div className="table_wer2">
          <div className="rank_block">
            <div className="rank_locate">
            <td>
                <h3 className="rank_4">6</h3>
              </td>
              <td>
                <img className ="rank_user_profile" src={user} alt='프로필' />
              </td>
              <td>
                <div className="rank_Info">
                  <h4 className="rank_user_name"> Lv2. 최우수상 </h4> 
                  <h4 className="rank_user_id">gogoB</h4>
                </div>
                </td>     
            </div>
          </div>
          </div>
        </td>
        <td className="Rank_block">
        <div className="table_wer2">
          <div className="rank_block">
            <div className="rank_locate">
            <td>
                <h3 className="rank_4">7</h3>
              </td>
              <td>
                <img className ="rank_user_profile" src={user} alt='프로필' />
              </td>
              <td>
                <div className="rank_Info">
                  <h4 className="rank_user_name"> Lv3. 김우식 </h4> 
                  <h4 className="rank_user_id">_kkhoops</h4>
                </div>
                </td>     
            </div>
          </div>
          </div>
        </td>
        <td className="Rank_block">
        <div className="table_wer2">
          <div className="rank_block">
            <div className="rank_locate">
            <td>
                <h3 className="rank_4">8</h3>
              </td>
              <td>
                <img className ="rank_user_profile" src={user} alt='프로필' />
              </td>
              <td>
                <div className="rank_Info">
                  <h4 className="rank_user_name"> Lv1. 이우식 </h4> 
                  <h4 className="rank_user_id">_leeops</h4>
                </div>
                </td>     
            </div>
          </div>
          </div>
        </td>
        <td className="Rank_block">
        <div className="table_wer2">
          <div className="rank_block">
            <div className="rank_locate">
            <td>
                <h3 className="rank_4">9</h3>
              </td>
              <td>
                <img className ="rank_user_profile" src={user} alt='프로필' />
              </td>
              <td>
                <div className="rank_Info">
                  <h4 className="rank_user_name"> Lv4. 김말랭 </h4> 
                  <h4 className="rank_user_id">mallLang</h4>
                </div>
                </td>     
            </div>
          </div>
          </div>
        </td>
        <td className="Rank_block">
        <div className="table_wer2">
          <div className="rank_block">
            <div className="rank_locate">
            <td>
                <h3 className="rank_4">10</h3>
              </td>
              <td>
                <img className ="rank_user_profile" src={user} alt='프로필' />
              </td>
              <td>
                <div className="rank_Info">
                  <h4 className="rank_user_name"> Lv3. 고추장 </h4> 
                  <h4 className="rank_user_id">spicyman</h4>
                </div>
                </td>     
            </div>
          </div>
          </div>
        </td>
      </tr>
  </div>
  </div>
  </tbody>
  </table>
</main>          
    );
  }

  export default RankExercise;