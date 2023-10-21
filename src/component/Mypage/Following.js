import axiosInstance from "../../axiosConfig";
import React, { useEffect, useState } from 'react';
import "../../css/mypage/Following.css"
import user from '../../img/user.png';
import LoadSpinner from '../Spinner/SpinnerComponent';

const Following = () => {

//스피너
const [Loading,setLoading] = useState(true);
  
const [userfollowing, setfollowing] = useState([]);

  useEffect(() => {
    
    // 서버의 내가 팔로우하는 사람
            axiosInstance.get('api/v1/users/following?page=0&size=5')
            .then((res) => {

              //팔로잉 정보 저장
                const followingData = res.data.result.content;
                setfollowing(followingData);

                //스피너
                setLoading(false);

                // console.log(res.data);
            })
            .catch((error) => {
                console.log('Failed to fetch user info:', error);
                setLoading(true);
            });
    
    
        }, []);

    return (
      <main className="layout_wing" onClick={(e) => e.stopPropagation()}>
        <div className="following_lay">
          <h4 className="alarm_font">팔로잉</h4>
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
                  {userfollowing.length === 0 ? (
                      <div className="no-following">팔로우 중인 사람이 없습니다.</div>
                    ) : (
                      <>
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
                    </>
                    )}
                  </div>               
                </tbody>
              </table>
            )}</div>
          </main>
        );
      }

  export default Following;