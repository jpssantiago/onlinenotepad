import React from 'react';
import './styles.css';

import Control from '../Control';
import TextArea from '../TextArea';
import ShareButton from '../ShareButton';

function Container() {
    return (
        <div className="container">
            <div className="container-controls">
                <div className="container-controls-area">
                    <Control />
                    <Control />
                    <Control />
                    <Control />
                </div>

                <div className="container-controls-area">
                    <Control />
                    <Control />
                    <Control />
                    <Control />
                </div>

                <div className="container-controls-area">
                    <Control />
                    <Control />
                    <Control />
                    <Control />
                </div>

                <div className="container-controls-sharebutton">
                    <ShareButton />
                </div>
            </div>
            
            <div className="container-textarea">
                <TextArea />
            </div>
        </div>
    );
}

export default Container;