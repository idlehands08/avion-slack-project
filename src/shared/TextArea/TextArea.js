import React, { useRef, useEffect, useState } from 'react';
import { RiSendPlane2Fill } from 'react-icons/ri';

import './TextArea.scoped.css';

function TextArea ({ placeholder, handleOnChange, value }) {
    const textareaRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const scrollHeight = computeTextHeight(0);
        textareaRef.current.style.overflow = scrollHeight > window.innerHeight / 2 ? 'auto' : 'hidden';
    }, [value])

    const handleFocus = () => {
        computeTextHeight(1)
        setIsFocused(true);
    }

    const handleBlur = () => {
        computeTextHeight(0);
        setIsFocused(false);
    }

    const computeTextHeight = (deduct) => {
        textareaRef.current.style.height = '0px';
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = `${scrollHeight - deduct}px`;

        return scrollHeight;
    }

    const handleSendMessage = () => {
        computeTextHeight(2);
        textareaRef.current.focus();
    }

    return (
        <div className="textarea-container">
            <textarea
                ref={textareaRef}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <div id="send-container" className={ isFocused ? 'focus' : '' }>
                <button onClick={handleSendMessage}>
                    <RiSendPlane2Fill />
                </button>
            </div>
        </div>
    )
}

export default TextArea;
