import React from "react";
import "../../css/modal/CModal.css"

function CModal(props) {

function closeModal() {
    props.closeModal();
    document.location.href = '';
  }

  return (
    
    <div className="Modal2" onClick={(e) => e.stopPropagation()}>
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