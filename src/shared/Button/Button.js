import React from 'react';
import './Button.css';

function Button ({ text }) {
    return (
        <div>
            <button>{ text }</button>
        </div>
    )
}

export default Button;
