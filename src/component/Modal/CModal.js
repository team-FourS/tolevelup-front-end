import React from "react";
import "../../css/CModal.css"

function CModal(props) {

function closeModal() {
    props.closeModal();
  }

  return (
    
    <div className="Modal2" >
      <div className="modalBody2" onClick={(e) => e.stopPropagation()}>
        <button className="modalCloseBtn2" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>

  );
}

export default CModal;