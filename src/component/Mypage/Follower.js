import axiosInstance from "../../axiosConfig";
import React, { useEffect, useState } from 'react';
import "../../css/mypage/Follower.css"
import user from '../../img/mintUser.png';

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
            </thead>
            <tbody>
                  <div className="following_scrollbox">
                  {userfollower.length === 0 ? (
                      <div className="no-follower">나를 팔로우 중인 사람이 <br/>없습니다.</div>
                    ) : (
                      <>
                    <div className="followingbox">
                    <tr className="follow-table">
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                          {userfollower.map((followers, followerkey) => (
                            <tr className="tr_follower" key={followerkey}>
                              <td>
                                <img className ="profil2" src={user} alt='프로필'></img>
                                </td>
                                <td className="td_follower">
                                  <div className="table_following_lay">
                                    <div className="following_array">
                                      <h5 className="follower_id">{followers.userId}</h5>
                                </div>
                              </div>
                            </td>
                                <td>
                                  <button className="unfollow_button">삭제</button>
                                </td>
                                </tr>
                                ))}
                                </div>
                    </>
                    )}
                  </div>
                </tbody>
          </table>
        )}</div>
      </main>
      
    );
  }

  export default Follower;