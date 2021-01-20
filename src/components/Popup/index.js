import React from 'react';
import './styles.css';

function Popup({ togglePopup }) {
    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-inner-header">
                    <h1>Share this note.</h1>
                    <i onClick={togglePopup} className="fas fa-times fa-lg"></i>
                </div>

                <p>Link:</p>
                <div className="popup-inner-bottom">
                    <input type="text" value="https://www.google.com" disabled="disabled" />
                    <button>Copy</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;