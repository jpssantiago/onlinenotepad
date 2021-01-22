import React, { useState, useEffect } from 'react';
import './styles.css';

import Control from '../Control';
import TextArea from '../TextArea';
import ShareButton from '../ShareButton';
import Popup from '../Popup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

// window.location.pathname

toast.configure();

function Container() {

    const [state, setState] = useState('');
    const [popup, setPopup] = useState(false);
    const [url, setUrl] = useState('');

    function handleChange(data) {
        setState(data);
    } 
    
    function togglePopup() {
        setPopup(!popup);
    }

    function generateNote() {
        //if (url) return;

        api.get('generateurl')
            .then(res => {
                setUrl(res.data.url);
                window.location.pathname = res.data.url;
        });
    }

    function getNote(id) {
        setUrl(id);

        api.get(id)
            .then(res => setState(res.data.data));
    }

    function saveNote() {
        if (!state) {
            toast.error('You can\'t save an empty note.');
            return;
        }

        api.post('createnote', {
            id: url,
            data: state
        });

        // generateNote();

        toast.success('Your text has been saved!');
    }

    useEffect(() => {
        const id = window.location.pathname.replace('/', '');
        if (id) {
            getNote(id);
        } else {
            generateNote();
        }
    }, []);

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
                    <i onClick={saveNote} className="far fa-save fa-2x"></i>
                    <ShareButton onClick={togglePopup} />
                </div>
            </div>
            
            <div className="container-textarea">
                <TextArea setData={handleChange} getData={state} />
            </div>

            { popup && <Popup togglePopup={togglePopup} url={url} /> }
        </div>
    );
}

export default Container;