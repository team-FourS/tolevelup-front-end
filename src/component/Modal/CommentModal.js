import React from "react";
import "../../css/modal/CommentModal.css";
 
function CommentlModal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    
    <div className="comment_Modal" >
      <div className="commentBody" onClick={(e) => e.stopPropagation()}>
        <button className="comment_modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>

  );
}
 
export default CommentlModal;