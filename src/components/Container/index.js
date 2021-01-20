import React, { useState } from 'react';
import './styles.css';

import Control from '../Control';
import TextArea from '../TextArea';
import ShareButton from '../ShareButton';
import Popup from '../Popup';

function Container() {

    const [state, setState] = useState('');
    const [popup, setPopup] = useState(false);

    function handleChange(data) {
        setState(data);
    } 
    
    function togglePopup() {
        setPopup(!popup);
    }

    return (
        <div className="container">
            <div className="container-controls">
                <div className="container-controls-area">
                    <Control getData={state} sendResponse={handleChange} text="Aa" action="capitalize" />
                    <Control getData={state} sendResponse={handleChange} text="TT" action="uppercase" />
                    <Control getData={state} sendResponse={handleChange} text="tt" action="lowercase" />
                    <Control getData={state} sendResponse={handleChange} text="AaA" special="true" action="alternating" />
                </div>

                <div className="container-controls-sharebutton">
                    <ShareButton onClick={togglePopup} />
                </div>
            </div>
            
            <div className="container-textarea">
                <TextArea setData={handleChange} getData={state} />
            </div>

            { popup && <Popup togglePopup={togglePopup} /> }
        </div>
    );
}

export default Container;