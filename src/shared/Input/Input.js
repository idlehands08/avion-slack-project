import React from 'react';
import './Input.css'

function Input ({ placeholder, value, hasError, type, faIcon, hasIcon = false }) {
    const setStyles = () => {
        let classes = '';

        if (hasError) {
            classes += 'red-border-line'
        }

        return classes;
    }

    const FaIcon = () => {
        return <i className={`icons fa fa-${faIcon}`} aria-hidden="true"></i>
    }

    return (
        <div className='input-wrapper'>
            { hasIcon && <FaIcon /> }
            <input 
                placeholder={placeholder}
                value={value}
                className={setStyles()}
                type={type}
            />
        </div>
    )
}

export default Input;
