import axiosInstance from "../../axiosConfig";
import React, { useEffect, useState } from 'react';
import "../../css/mypage/Following.css"
import user from '../../img/user.png';

const Following = () => {
  
const [userfollowing, setfollowing] = useState([]);

  useEffect(() => {
    
    // 서버의 내가 팔로우하는 사람
            axiosInstance.get('api/v1/users/following?page=0&size=5')
            .then((res) => {

              //팔로잉 정보 저장
                const followingData = res.data.result.content;
                setfollowing(followingData);
                // console.log(res.data);
            })
            .catch((error) => {
                console.log('Failed to fetch user info:', error);
            });
    
    
        }, []);

    return (
      <main className="layout_wing" onClick={(e) => e.stopPropagation()}>

        <div className="following_lay">
          <h4 className="alarm_font">팔로잉</h4>
            <hr />
              <table>
                <thead>
                  <tr />
                </thead>

                <tbody>
                  <div className="following_scrollbox">
                    <div className="followingbox">
                      <tr>
                        <td className="td_following">
                          {userfollowing.map((userfollowings, followingkey) => (
                            <div className="table_following_lay" key={followingkey}>
                              <div className="following_array">
                                <img className ="profil2" src={user} alt='프로필'></img>
                                <h5 className="following_id">{userfollowings.userId}</h5>
                              </div>
                            </div>))}
                        </td>
                      </tr>
                    </div>
                  </div>
                </tbody>

              </table>
            </div>

          </main>
        );
      }

  export default Following;