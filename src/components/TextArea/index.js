import React, { useState , useEffect} from 'react';
import './styles.css'

function TextArea({ callback, newState }) {
    const [state, setState] = useState('');

    function handleChange(e) {
        setState(e.target.value);
        callback(state);
    }

    useEffect(() => {
        setState(newState);
    }, [newState]);

    return (
        <div className="textarea">
            <div className="textarea-text">
                <textarea onChange={handleChange} value={state} type="text" />
            </div>
        </div>
    );
}

export default TextArea;