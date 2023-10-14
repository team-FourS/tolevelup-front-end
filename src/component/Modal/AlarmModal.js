import React from "react";
import "../../css/modal/AlarmModal.css"
 
function AlarmModal(props) {
 
function closeModal() {
    props.closeModal();
  }
 
  return (
    
    <div className="Alarm_Modal" >
      <div className="Alarm_modalBody" onClick={(e) => e.stopPropagation()}>
        <button className="Alarm_modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>

  );
}
 
export default AlarmModal;