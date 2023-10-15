import React, { useState } from 'react';
import "../../css/feed/Comment.css"
const Comment = () => {

    const [comment, setComment] = useState(''); // 댓글 상태를 관리하는 state
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handlePostComment = () => {
      // TODO: 댓글을 게시하는 로직을 추가하세요
      console.log('게시된 댓글:', comment);
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
          <textarea
            className='input_comment_textarea'
            placeholder="코멘트 달기..."
            value={comment}
            onChange={handleCommentChange} />
          <button className='comment_button'
            onClick={handlePostComment}>
            게시
            </button>
        </div>
      </div>
    </div>
  )

}

export default Comment;