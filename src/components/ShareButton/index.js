import React from 'react';
import './styles.css';

function ShareButton({ onClick }) {
    return (
        <button onClick={onClick} className="sharebutton">Share</button>
    );
}

export default ShareButton;