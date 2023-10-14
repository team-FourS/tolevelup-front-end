import React from "react";
import "../../css/ManualModal.css"
 
function ManualModal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    
    <div className="Manual_Modal" >
      <div className="Manual_modalBody" onClick={(e) => e.stopPropagation()}>
        <button className="Manual_modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>

  );
}
 
export default ManualModal;