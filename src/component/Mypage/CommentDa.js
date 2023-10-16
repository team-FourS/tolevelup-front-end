import axiosInstance from "../../axiosConfig";
import React, { useState,useEffect } from 'react';
import "../../css/mypage/CommentDa.css"
import LoadSpinner from '../Spinner/SpinnerComponent';

const CommentDa = () => {

  //스피너
  const [Loading,setLoading] = useState(true);

  const [userCommentModal, setuserComment] = useState([]);
  
  useEffect(() => {
    // 모달 속 코맨트
            axiosInstance.get('api/v1/users/comments/receive?page=0&size=5')
            .then((res) => {

              //팔로잉 정보 저장
                const CommentModal = res.data.result.content;
                setuserComment(CommentModal);

                console.log(res.data);

                //스피너
                setLoading(false);
            })
            .catch((error) => {
                console.log('Failed to fetch user info:', error);

                //스피너
                setLoading(true);
            });
    
    
        }, []);

        // 등록일 변경 함수
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('ko-KR', options)
      .replace(/\//g, '.')  // .로 변경
      .replace(/\. /g, '.') 
      .replace(',', '');    
    return formattedDate;
  };

    return (
      <main className="layout_commentmodal" onClick={(e) => e.stopPropagation()}>
        <div className="alarm_lay">
          <h4 className="alarm_font">코멘트</h4>
            <hr />
            <div className="scroll_box_comment">
              <div className="inner_content_comment">
              {Loading ? ( // 로딩 중인 경우 스피너를 렌더링
                <LoadSpinner />
            ) : (
              <table>
                    <tr><th></th></tr>
                    <tr className="comment_data">
                    <td>
  <td className="td_comment">
    <div className="table_lay">
      {userCommentModal.map((commentmodal, commentkey) => (
        <div className="" key={commentkey}>
          <div className='comment_box_click'>{commentmodal.comment}
            <p className='user_comment'>{commentmodal.fromUserDate.name}</p>
          </div>
          <p className="get-registered-comment">{`등록일: ${formatDate(commentmodal.registeredAt)}`}</p> {/* 여기에 추가 */}
        </div>
        
      ))}
    </div>
  </td>
</td>
                      </tr>
              </table>
            )}</div>
            </div>
        </div>
    </main>  
    );
  }

  export default CommentDa;