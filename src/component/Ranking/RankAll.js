import React from "react";
import user from '../../img/user.png';
import RankingNum1 from '../../img/medal1.png';
import RankingNum2 from '../../img/medal2.png';
import RankingNum3 from '../../img/medal3.png';

import "../../css/Fifth.css";

const RankAll = () => {
    return (
<main className="layout_fifth">
  <div className="rank_block">
   <div className="rank_locate">
    <img className ="ranking_number" src={RankingNum1} alt='프로필' />
      <img className ="rank_user_profile" src={user} alt='프로필' />
      <div className="rank_Info">
        <h4 className="rank_user_name"> Lv2. 여기는 전체 </h4> 
        <h4 className="rank_user_id">매일을 성실하게!!</h4>
        
      </div>      
  </div>
  </div>
  <div className="rank_block">
  <div className="rank_locate">
    <img className ="ranking_number" src={RankingNum2} alt='프로필' />
      <img className ="rank_user_profile" src={user} alt='프로필' />
      <div className="rank_Info">
        <h4 className="rank_user_name"> Lv2. 여기는 전체 </h4> 
        <h4 className="rank_user_id">매일을 성실하게!!</h4>
      </div>      
  </div>
  </div>
  <div className="rank_block">
  <div className="rank_locate">
    <img className ="ranking_number" src={RankingNum3} alt='프로필' />
      <img className ="rank_user_profile" src={user} alt='프로필' />
      <div className="rank_Info">
        <h4 className="rank_user_name"> Lv2. 여기는 전체 </h4> 
        <h4 className="rank_user_id">매일을 성실하게!!</h4>
        
      </div>      
  </div>
  </div>
    </main>
          

          
    );
  }

  export default RankAll;