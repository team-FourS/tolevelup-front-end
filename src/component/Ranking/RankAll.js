import React from "react";
import user from '../../img/user.png';
import RankingNum1 from '../../img/medal1.png';
import RankingNum2 from '../../img/medal2.png';
import RankingNum3 from '../../img/medal3.png';

import "../../css/ranking/Fifth.css";

const RankAll = () => {
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
                  <h4 className="rank_user_name"> Lv3. 올라프 </h4> 
                  <h4 className="rank_user_id">_ilikesummer</h4>
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
                  <h4 className="rank_user_name"> Lv2. 나어딨게 </h4> 
                  <h4 className="rank_user_id">here_iam</h4>
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
                  <h4 className="rank_user_name"> Lv4. 내가최강 </h4> 
                  <h4 className="rank_user_id">iam_strong</h4>
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
                  <h4 className="rank_user_name"> Lv2. 어쩔티비 </h4> 
                  <h4 className="rank_user_id">what_a_tv</h4>
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
                  <h4 className="rank_user_name"> Lv3. 가보자고 </h4> 
                  <h4 className="rank_user_id">letttsgo</h4>
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
                  <h4 className="rank_user_name"> Lv2. 햄최몇 </h4> 
                  <h4 className="rank_user_id">hammbuger</h4>
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
                  <h4 className="rank_user_name"> Lv1. 최우식 </h4> 
                  <h4 className="rank_user_id">_whoops</h4>
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
                  <h4 className="rank_user_name"> Lv2. 감초사탕 </h4> 
                  <h4 className="rank_user_id">candy</h4>
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
                  <h4 className="rank_user_name"> Lv4. 고구마말랭 </h4> 
                  <h4 className="rank_user_id">_whoops</h4>
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
                  <h4 className="rank_user_name"> Lv2. 수분촉촉 </h4> 
                  <h4 className="rank_user_id">_whoops</h4>
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

  export default RankAll;