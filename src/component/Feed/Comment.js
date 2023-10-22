import React, { useState, useEffect} from 'react';
import axiosInstance from "../../axiosConfig";
import "../../css/feed/Comment.css"
import LoadSpinner from '../Spinner/SpinnerfeedComment';
const Comment = (props) => {

    const [comment, setComment] = useState('');
    const [userComments, setuserComments] = useState([]);
    const userId = props.userId;
     const [Loading, setLoading] = useState(true);


  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const postComment = () => {
    // userId를 사용하여 코멘트를 게시하는 axios 요청
    axiosInstance.post(`api/v1/feeds/${userId}/comments`, { 
      comment:comment 
    })
      .then((res) => {
        console.log("Comment posted successfully:", res.data);
        setComment('');
      })
      .catch((error) => {
        console.error("Failed to post comment:", error);
        console.log(props.userId);

      });

    };

      useEffect(() => {
        axiosInstance.get(`api/v1/feeds/${userId}/comments?page=0&size=5`)
        .then((res) => {

          // content의 모든 정보를 commentsData에 담음
          const commentsData = res.data.result.content;
          setuserComments(commentsData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(`${userId}의 코멘트를 가져오던중 오류`, error);
        });
    });


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = new Date(dateString)
      .toLocaleDateString('ko-KR', options)
      .replace(/\//g, '.') // .로 변경
      .replace(/\. /g, '.')
      .replace(',', '');
    return formattedDate;
  };

  return(
    <div>
      {Loading ? (
        // 로딩 중인 경우 스피너를 렌더링
        <LoadSpinner />
      ) : (
      <div className='all_comment_box'>
      
        <div className="comment_scroll_box">
            <div className="inner_content">
            {userComments.length === 0 ? (
                      // 코멘트 목록이 비어 있는 경우 '받은 코멘트가 없습니다.' 메시지를 표시
                      <div className="no-comments">받은 코멘트가 없습니다.</div>
                    ) : (
                      userComments.map((commentData, index) => (
                        <div className='comment_box_feed' key={index}>
                          <p className='mypage_comment_text'> {commentData.comment}  </p>
                          <p className='user_comment'><p className="get-registered-mypage">
                            {`등록일: ${formatDate(commentData.registeredAt)}`}
                          </p>{commentData.fromUserData.name }</p>
                        </div>
                      ))
                    )}
                    </div>
              </div>

        
        <div className="comment_write_box">
          <input type='text'
            className='input_comment_textarea'
            placeholder="코멘트 달기..."
            value={comment}
            onChange={handleCommentChange} />
          <button className='comment_button'
            onClick={postComment}>
            
            게시
            </button>
        </div>
      </div>
      )}
    </div>
  )

}

export default Comment;