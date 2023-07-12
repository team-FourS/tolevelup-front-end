import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../css/Feed.css"
import user from '../img/user.png';

const Feed = () => {
    return (
      <main className="layout">
        <Header/>
        <div>
          <div>
            <p className="FeedPage">전체</p>
            <p className="FeedPage">팔로우 중</p>
          </div>
          <div className="userImg"> 
            <img className="userProfile" src={user} alt="프로필"/> </div>
          <div className="nickName">우주최강임</div>
          <input type="checkbox" id="btn1" />
          <label htmlFor="btn3"> 줄넘기 100회 하기 </label> <br/>
          <input type="checkbox" id="btn2" />
          <label htmlFor="btn3"> 전시회 다녀오기 </label>
        </div>
        <Footer/>
      </main>  
    );
  }

  export default Feed;