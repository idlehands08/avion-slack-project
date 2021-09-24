import React from 'react';

import './FaIcon.scoped.css';

function FaIcon ({ faIcon }) {
    return <i className={`icons fa fa-${faIcon}`} aria-hidden="true"></i>;
}

export default FaIcon;
