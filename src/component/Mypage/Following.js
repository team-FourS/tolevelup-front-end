import axiosInstance from "../../axiosConfig";
import React, { useEffect, useState } from 'react';
import "../../css/mypage/Following.css"
import user from '../../img/mintUser.png';
import LoadSpinner from '../Spinner/SpinnerComponent';

const Following = () => {

//스피너
const [Loading,setLoading] = useState(true);
const [userfollowing, setfollowing] = useState([]);

  useEffect(() => {
    
    // 서버의 내가 팔로우하는 사람
            axiosInstance.get('api/v1/users/following?page=0&size=0')
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

  // 언팔로우
  const handleUnfollowClick = async (selectedUserId) => {
    try {
      const response = await axiosInstance.delete(`api/v1/users/follow/${selectedUserId}`);
      const resultCode = response.data.resultCode;

      if (resultCode === 'SUCCESS') {
        // 언팔로우 성공 시 업데이트
        const updatedFollowing = userfollowing.filter((user) => user.userId !== selectedUserId);
        setfollowing(updatedFollowing);
        console.log(`사용자 ${selectedUserId} 언팔로우 성공`);
      } else {
        console.log(`사용자 ${selectedUserId} 언팔로우 실패`);
      }
    } catch (error) {
      console.error(`사용자 ${selectedUserId} 언팔로우 실패:`, error);
    }
  };

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
                </thead>

                <tbody>
                  <div className="following_scrollbox">
                  {userfollowing.length === 0 ? (
                      <div className="no-following">팔로우 중인 사람이 없습니다.</div>
                    ) : (
                      <>
                    <div className="followingbox">
                    <tr className="follow-table">
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    {userfollowing.map((userfollowings, followingkey) => (
                    <tr key={followingkey} className="tr_following">
                      <td>
                        <img className="profil2" src={user} alt="프로필" />
                      </td>
                      <td className="td_following">
                        <div className="table_following_lay">
                          <div className="following_array">
                            <h5 className="following_id">{userfollowings.userId}</h5>
                          </div>
                        </div>
                      </td>
                    <td>
                      <button
                      className="unfollow_button"
                      onClick={() => handleUnfollowClick(userfollowings.userId)}>삭제</button>
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

  export default Following;