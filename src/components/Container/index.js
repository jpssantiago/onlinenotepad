import React, { useState } from 'react';
import './styles.css';

import Control from '../Control';
import TextArea from '../TextArea';
import ShareButton from '../ShareButton';

function Container() {

    const [state, setState] = useState('');

    function handleChange(data) {
        setState(data);
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
                    <ShareButton />
                </div>
            </div>
            
            <div className="container-textarea">
                <TextArea setData={handleChange} getData={state} />
            </div>
        </div>
    );
}

export default Container;