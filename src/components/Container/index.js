import React, { useState } from 'react';
import './styles.css';

import Control from '../Control';
import TextArea from '../TextArea';
import ShareButton from '../ShareButton';

function Container() {
    const [state, setState] = useState('');

    function sendData() {
        return state;
    }

    function updateData(data) {
        setState(data);
    }

    return (
        <div className="container">
            <div className="container-controls">
                <div className="container-controls-area">
                    <Control callback={sendData} updateData={updateData} text="Aa" action="capitalize" />
                    <Control callback={sendData} updateData={updateData} text="TT" action="uppercase" />
                    <Control callback={sendData} updateData={updateData} text="tt" action="lowercase" />
                    <Control callback={sendData} updateData={updateData} text="AaA" special="true" action="alternating" />
                </div>

                <div className="container-controls-sharebutton">
                    <ShareButton />
                </div>
            </div>
            
            <div className="container-textarea">
                <TextArea callback={text => setState(text)} newState={state} />
            </div>
        </div>
    );
}

export default Container;