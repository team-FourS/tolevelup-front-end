import React from "react";
import "../css/Modal.css"
 
function Modal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody">
      {/* <div className="modalBody" onClick={(e) => e.stopPropagation()}> */}
        <button id="modalCloseBtn" >
          ✖
        </button>
        {props.children}
      </div>
    </div>

  );
}
 
export default Modal;