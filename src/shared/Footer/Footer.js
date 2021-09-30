import React from 'react'
import './Footer.scoped.css'

function Footer ({ text }) {
    return (
        <div className="Footer">
            <text>{ text }</text>
        </div>
    )
}

export default Footer;
