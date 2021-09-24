import React from 'react';
import FaIcon from '../FaIcon/FaIcon';

import './Input.scoped.css'

function Input ({ 
    placeholder, 
    value, 
    isValid, 
    type, 
    faIcon, 
    hasIcon = false, 
    handleChange, 
    message,
    label
}) {
    const setStyles = () => {
        if (isValid === false) {
            return 'red-border-line';
        }
    }

    const MessageText = () => {
        return <p>{ message }</p>;
    }

    const Label = () => {
        return <label>{ label }</label>;
    }

    return (
        <div>
            { label && <Label />}
            <div className='input-wrapper'>
                { hasIcon && <FaIcon faIcon={faIcon} /> }
                <input 
                    placeholder={placeholder}
                    value={value}
                    className={setStyles()}
                    type={type}
                    onChange={handleChange}
                />
                { !isValid && <MessageText /> }
            </div>
        </div>
    )
}

export default Input;
