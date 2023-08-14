import React from "react";
import "../../css/mission/MissionModal.css";

function MissionModal(props) {
function closeModal() {
    props.closeModal();
  }
  return (
    <div className="outside_modal" onClick={closeModal}>
      <div className="missionModal" onClick={(e) => e.stopPropagation()}>
        <button id="modalCheckButton" onClick={closeModal}>
        ✖
        </button>
        {props.children}
      </div>
    </div>

  );
}
export default MissionModal;