import React, { useState } from 'react';
import "../../css/feed/CommentModal.css";

function CommentModal({ onClose, onSubmit }) {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(comment);
  };

  return (
    <div className="comment-modal">
      <div className="comment-container">
        <textarea className="comment-box"
          value={comment}
          onChange={handleCommentChange}
          placeholder="댓글을 입력하세요..."/>
          
        <button onClick={handleSubmit} className="btnSubmit">등록</button>
      </div>
    </div>  
  );
}

export default CommentModal;
