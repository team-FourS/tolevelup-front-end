import React from "react";
import "../css/Modal.css"
 
function Modal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    
    <div className="Modal" >
      <div className="modalBody">
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>

  );
}
 
export default Modal;