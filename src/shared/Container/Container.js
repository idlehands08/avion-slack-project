import React from 'react';
import './Container.scoped.css';

function Container ({ children }) {
    return (
        <div className='container-wrapper'>
            { children }
        </div>
    )
}

export default Container;
