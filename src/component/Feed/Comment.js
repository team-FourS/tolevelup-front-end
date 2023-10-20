import React, { useState} from 'react';
import "../../css/feed/Comment.css"
// import axiosInstance from '../../axiosConfig';
const Comment = () => {

    const [comment, setComment] = useState('');

//   const postComment = (userId) => {
//     // 댓글 게시 요청
//     axiosInstance.post(`api/v1/feeds/${userId}/comments`, {
//         comment: comment
//     })
//     .then((res) => {
//         console.log('댓글 게시 완료:', res.data);
//         // 댓글 내용 초기화
//         setComment('');
//     })
//     .catch((error) => {
//         console.error('댓글 게시 실패:', error);
//     });
// };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return(
    <div>
      <div className='all_comment_box'>
        <div className="comment_scroll_box">
            <div className='feed_comment_box'>
            <p className='comment_text'>여기 코멘트 내용 값 불러오기</p>
              <p className='user_feed_comment'>닉네임</p>  
            </div>

            <div className='feed_comment_box'>
            <p className='comment_text'>코멘트 내용 가져오기</p>
              <p className='user_feed_comment'>닉네임</p>  
            </div>

            <div className='feed_comment_box'>
            <p className='comment_text'>여기 코멘트 내용 값 불러오기</p>
              <p className='user_feed_comment'>닉네임</p>  
            </div>

            <div className='feed_comment_box'>
            <p className='comment_text'>여기 코멘트 코멘트 내용 불러오기</p>
              <p className='user_feed_comment'>닉네임</p>  
            </div>
        </div>
        
        <div className="comment_write_box">
          <input type='text'
            className='input_comment_textarea'
            placeholder="코멘트 달기..."
            value={comment}
            onChange={handleCommentChange} />
          <button className='comment_button'
            // onClick={postComment}>
            >
            게시
            </button>
        </div>
      </div>
    </div>
  )

}

export default Comment;