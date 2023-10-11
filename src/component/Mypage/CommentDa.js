import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';
import "../../css/mypage/CommentDa.css"

const CommentDa = () => {

  const [userCommentModal, setuserComment] = useState([]);

  useEffect(() => {
    
    // 모달 속 코맨트
            axiosInstance.get('api/v1/users/comments/receive?page=0&size=5')
            .then((res) => {

              //팔로잉 정보 저장
                const CommentModal = res.data.result.content;
                setuserComment(CommentModal);

                console.log(res.data);
            })
            .catch((error) => {
                console.log('Failed to fetch user info:', error);
            });
    
    
        }, []);

    return (
      <main className="layout_alr" onClick={(e) => e.stopPropagation()}>
        <div className="alarm_lay">
          <h4 className="alarm_font">코멘트</h4>
            <hr />
            <div className="scroll_box_comment">
              <div className="inner_content_comment">
              <table>
                    <tr>
                      <th></th>
                    </tr>
                    <tr className="comment_data">
                        <td>
                          <td className="td_comment">
                            <div className="table_lay">
                            {userCommentModal.map((commentmodal, commentkey) => (
                            <div className="" key={commentkey}>
                                <div className='comment_box_click'>{commentmodal.comment} 
                                <p className='user_comment'>{commentmodal.fromUserDate.name}</p>
                              </div>
                            </div>))}
                              </div>
                          </td>
                        </td>
                      </tr>
              </table>
              </div>
            </div>
        </div>
    </main>  
    );
  }

  export default CommentDa;