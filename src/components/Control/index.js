import React from 'react';
import './styles.css';

function Control({ icon, text, special, action, getData, sendResponse }) {

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

    function handleClick() {
        let response = '';
        switch (action) {
            case "capitalize":
                response = capitalize(getData);
                break;
            case "uppercase":
                response = getData.toUpperCase();
                break;
            case "lowercase":
                response = getData.toLowerCase();
                break;
            case "alternating":
                response = alternateCases(getData);
                break;

            default:
                break;
        }

        sendResponse(response);
    }

    if (icon) {
        return (
            <button onClick={handleClick} className={`control ${special ? "special" : ""}`}>
                <i className={icon}></i>
            </button>
        );
    }

    return (
        <button onClick={handleClick} className={`control ${special ? "special" : ""}`}>
            <h1>{text}</h1>
        </button>
    );
}

export default Control;