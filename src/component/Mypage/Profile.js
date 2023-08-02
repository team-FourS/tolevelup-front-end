import React from "react";
import alka1 from '../../img/alka1.png';
import alka2 from '../../img/alka2.png';
import alka3 from '../../img/alka3.png';
import alka4 from '../../img/alka4.png';
import uyung1 from '../../img/uyung1.png';
import uyung2 from '../../img/uyung2.png';
import uyung3 from '../../img/uyung3.png';
import uyung4 from '../../img/uyung4.png';
import dalcool1 from '../../img/dalcool1.jpg';
import dalcool2 from '../../img/dalcool2.jpg';
import dalcool3 from '../../img/dalcool3.jpg';
import dalcool4 from '../../img/dalcool4.jpg';
import '../../css/Profile.css';

const Profile = () => {
return (
      <div>
      <header className="header2" style={{backgroundColor:'white'}} >
                  <div className="" style={{margin:'15px'}}>
                        <div>알카</div>
                              <img className ="size" src={alka1} alt='알카1' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={alka2} alt='알카2' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={alka3} alt='알카3' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={alka4} alt='알카4' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <hr />

                        <div>알카</div>
                              <img className ="size" src={alka1} alt='알카1' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={alka2} alt='알카2' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={alka3} alt='알카3' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={alka4} alt='알카4' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <hr />

                        <div>우융</div>
                              <img className ="size" src={uyung1} alt='우융1' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={uyung2} alt='우융2' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={uyung3} alt='우융3' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={uyung4} alt='우융4' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <hr />

                        <div>달쿨</div>
                              <img className ="size" src={dalcool1} alt='달쿨1' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={dalcool2} alt='달쿨2' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={dalcool3} alt='달쿨3' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                              <img className ="size" src={dalcool4} alt='달쿨4' style={{width:"100px",height:"100px",margin:'10px'}}></img>
                  </div>
                  <div>
                        <div>
                              <button className="probtn1">선택</button>
                              <button className="probtn2" onClick={window.close}>취소</button>
                        </div>
                  </div>
      </header>
      </div>
    );
  }

  export default Profile;