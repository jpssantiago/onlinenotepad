import React from 'react';
import './styles.css'

function TextArea({ setData, getData }) {
    return (
        <div className="textarea">
            <div className="textarea-text">
                <textarea onChange={e => setData(e.target.value)} value={getData} type="text" />
            </div>
        </div>
    );
}

export default TextArea;