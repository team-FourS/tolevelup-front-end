import React from "react";
import user from '../../img/user.png';
import RankingNum1 from '../../img/medal1.png';
import RankingNum2 from '../../img/medal2.png';
import RankingNum3 from '../../img/medal3.png';

import "../../css/ranking/Fifth.css";

const RankCulture = () => {
    return (
<main className="layout_fifth">
  <table className="rank_table">
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
                      <h4 className="rank_user_name"> Lv1. 더줘 </h4> 
                      <h4 className="rank_user_id">jh__om</h4>
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

  export default RankCulture;