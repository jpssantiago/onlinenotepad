import React from 'react';
import './styles.css';

function Control({ icon, text, special, action, callback, updateData }) {

    function requestData() {
        const data = callback();
        const response = handleData(data);
        updateData(response);
    }

    function alternateCases(s) {
        let chars = s.toLowerCase().split("");
        for (let i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
        }
        return chars.join("");
    }

    function capitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    } 

    function handleData(data) {
        switch (action) {
            case "capitalize":
                return capitalize(data);
            case "uppercase":
                return data.toUpperCase();
            case "lowercase":
                return data.toLowerCase();
            case "alternating":
                return alternateCases(data);

            default:
                break;
        }
    }

    if (icon) {
        return (
            <button onClick={requestData} className={`control ${special ? "special" : ""}`}>
                <i className={icon}></i>
            </button>
        );
    }

    return (
        <button onClick={requestData} className={`control ${special ? "special" : ""}`}>
            <h1>{text}</h1>
        </button>
    );
}

export default Control;