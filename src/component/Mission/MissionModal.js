import React from "react";
import "../../css/MissionModal.css";

function MissionModal(props) {
function closeModal() {
    props.closeModal();
  }
  return (
    <div className="outside_modal" onClick={closeModal}>
      <div className="missionModal" onClick={(e) => e.stopPropagation()}>
        <button id="modalCheckButton" onClick={closeModal}>
        <h2 className="h2_checkButton">✔</h2>
        </button>
        {props.children}
      </div>
    </div>

  );
}
export default MissionModal;