import React from "react";
import "../../css/modal/editmodal.css"

function editModal(props) {

  function closeModal() {
    props.closeModal();
  }

  return (
    
    <div className="Modal3">
      <div className="modalBody3" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn3" onClick={closeModal}>✖</button>
        <div onClick={(e) => e.stopPropagation()}>
        {props.children}</div>
      </div>
    </div>

  );
}

export default editModal;