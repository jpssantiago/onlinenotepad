import React from 'react';
import './styles.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Popup({ togglePopup, url }) {
    
    const inputRef = React.createRef();

    function handleClick() {
        const input = inputRef.current;

        input.select();

        document.execCommand("copy");

        toast.success('Link copied.');
    }
    
    
    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-inner-header">
                    <h1>Share this note.</h1>
                    <i onClick={togglePopup} className="fas fa-times fa-lg"></i>
                </div>

                <p>Link:</p>
                <div className="popup-inner-bottom">
                    <input type="text" value={`https://portablelevel.com/${url}`} ref={inputRef} readOnly />
                    <button onClick={handleClick} >Copy</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;