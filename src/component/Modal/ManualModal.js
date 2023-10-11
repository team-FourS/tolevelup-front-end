import React from "react";
import "../../css/ManualModal.css"
 
function ManualModal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    
    <div className="header_Modal" >
      <div className="header_modalBody" onClick={(e) => e.stopPropagation()}>
        <button className="header_modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>

  );
}
 
export default ManualModal;