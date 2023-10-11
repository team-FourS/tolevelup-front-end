import axiosInstance from "../../axiosConfig";
import React, { useEffect, useState } from 'react';
import "../../css/mypage/Follower.css"
import user from '../../img/user.png';

import LoadSpinner from '../Spinner/SpinnerComponent';

const Follower = () => {

  //스피너
  const [Loading,setLoading] = useState(true);

  const [userfollower, setfollower] = useState([]);

  useEffect(() => {
    
    // 서버의 내가 팔로우하는 사람
            axiosInstance.get('api/v1/users/follower?page=0&size=3')
            .then((res) => {

              //팔로잉 정보 저장
                const followerData = res.data.result.content;
                setfollower(followerData);
                console.log(res.data);

                //스피너
                setLoading(false);
            })
            .catch((error) => {
                console.log('Failed to fetch user info:', error);
                setLoading(true);
            });
    
    
        }, []);


  return (
    
    <main className="layout_wer" onClick={(e) => e.stopPropagation()}>
      
      <div className="wer_lay">
        <h4 className="wer_font">팔로워</h4>
          <hr />
          {Loading ? ( // 로딩 중인 경우 스피너를 렌더링
                <LoadSpinner />
            ) : (
          <table>
            <thead>
                  <tr />
            </thead>
            <tbody>
                  <div className="following_scrollbox">
                    <div className="followingbox">
                      <tr>
                      <td className="td_following">
                          {userfollower.map((followers, followerkey) => (
                            <div className="table_follower_lay" key={followerkey}>
                              <div className="follwer_array">
                                <img className ="profil2" src={user} alt='프로필'></img>
                                <h5 className="follower_id">{followers.userId}</h5>
                              </div>
                            </div>))}
                        </td>
                      </tr>
                    </div>
                  </div>
                </tbody>
          </table>
        )}</div>
      </main>
      
    );
  }

  export default Follower;