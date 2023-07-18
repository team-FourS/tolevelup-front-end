import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../css/Feed.css"
import user from '../img/user.png';
import {BiSearchAlt2} from "react-icons/bi";

const Feed = () => {
    return (
      <main className="layout">
        <Header/>
        <div>
          <div className="searchID">
            <label className="searching">
              <input className="searchBox"
              type="text" placeholder="닉네임을 입력해주세요.." 
              required />
              <BiSearchAlt2 />
            </label>
          </div>

        <h4>전체  |   팔로우 중</h4>
        
        <div className="feedBox">
          <img className ="user_profile" src={user} alt='프로필' /> 
          <div className="feedContent">  
            <div className="userInfo">
              <h4> Lv3. 나세계최강 </h4>
                <p className='user_id'>world_strong</p>   
                  <p className="oneLine">하루하루 성실하게!!</p>
            </div>     
            <div className="feedChecklist">          
              <input type="checkbox" id="btn1" />
              <label htmlFor="btn3"> 줄넘기 100회 하기 </label> <br/>
              <input type="checkbox" id="btn2" />
              <label htmlFor="btn3"> 전시회 다녀오기 </label>
            </div>
          </div>

            <div className="commentContainer">
              <form className="commentWrap">
                <label>
                <input className="Comment"
                  type="text"
                  placeholder="코멘트 달기..." />
                  <button className="commetBtn">게시</button>
                </label>
              </form>
            </div>
        </div>

        <div className="feedBox" />

        </div>
        <Footer/>
      </main>  
    );
  }

  export default Feed;