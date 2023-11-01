import React from 'react';
import '../../css/modal/FeedCharacterModal.css'

function FeedCharacterModal(props) {
 
    function closeModal() {
        props.closeModal();
      }
     
      return (
        
        <div className="Modalf" >
          <div className="modalBodyf" onClick={(e) => e.stopPropagation()}>
            <button className="modalCloseBtnf" onClick={closeModal}>
              ✖
            </button>
            {props.children}
          </div>
        </div>
    
      );
    }

export default FeedCharacterModal;