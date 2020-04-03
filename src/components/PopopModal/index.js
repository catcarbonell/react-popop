import React from 'react';
import './PopopModal.css';

const PopopModal = ({ handleClose, show, children }) => {
    
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return(
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button className="modal-btn" onClick={handleClose}>close</button>
            </section>
        </div>
    );
}

export default PopopModal;