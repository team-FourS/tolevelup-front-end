import React from "react";
import "../../css/header/Manual.css"
import manual1 from '../../img/manual/manual1.png';
import manual2 from '../../img/manual/manual2.png';
import manual3 from '../../img/manual/manual3.png';
import manual4 from '../../img/manual/manual4.png';
import manual5 from '../../img/manual/manual5.png';
import manual6 from '../../img/manual/manual6.png';

const Manual = () => {

    return (
    <div className="modalContent">
      <div className="manual-scrollbox">
        <img className="manual-imgs" src={manual1} alt="메뉴얼1" />
        <img className="manual-imgs" src={manual2} alt="메뉴얼2" />
        <img className="manual-imgs" src={manual3} alt="메뉴얼3" />
        <img className="manual-imgs" src={manual4} alt="메뉴얼4" />
        <img className="manual-imgs" src={manual5} alt="메뉴얼5" />
        <img className="manual-imgs" src={manual6} alt="메뉴얼6" />

      </div>
    </div>

    );
  }

  export default Manual;