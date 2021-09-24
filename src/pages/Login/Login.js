import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container/Container';

import { isValidEmail, isEmpty } from '../../utils';

import './Login.scoped.css';

function Login () {
    const [email, setEmail] = useState({
        valid: null,
        value: '',
        error: ''
    });
    const [password, setPassword] = useState({
        valid: null,
        value: '',
        error: ''
    });

    useEffect(() => {
        handleRegistration(email, password);
    }, [email, password])

    const handleLogin = () => {
        if (isEmpty(email.value)) {
            setEmail(email => ({ 
                    ...email,
                    valid: false,
                    error: 'Please enter email address'
                }
            ));
        } else if (!isValidEmail(email.value)) {
            setEmail({ 
                ...email, 
                valid: false, 
                error: 'Invalid email address' 
            });
        } else {
            setEmail({ 
                ...email, 
                valid: true, 
                error: '' 
            });
        }

        if (isEmpty(password.value)) {
            setPassword({ 
                ...password, 
                valid: false, 
                error: 'Please enter password' 
            });
        } else {
            setPassword({ 
                ...password, 
                valid: true, 
                error: '' 
            });
        }
    }

    const handleRegistration = (email, password) => {
        if (email.valid && password.valid) {
            // perform user registartion here
            // use the api we made
            // integrate api with frontend
            // once login successful, redirect to '/' using (window.location = '/')
            console.log('Data are valid and ready for submission');
        }
    }

    const handleEmailChange = (e) => {
        setEmail({ ...email, value: e.target.value });
    }

    const handlePasswordChange = (e) => {
        setPassword({ ...password, value: e.target.value });
    }

    return (
        <div className="d-flex content-center full-height">
            <Container>
                <Input 
                    placeholder='Email'
                    isValid={email.valid}
                    type='text'
                    value={email.value}
                    handleChange={handleEmailChange}
                    message={email.error}
                    label='Email Address'
                >
                    <FaEnvelope />
                </Input>
                <Input 
                    placeholder='Password'
                    isValid={password.valid}
                    type='password'
                    value={password.value}
                    handleChange={handlePasswordChange}
                    message={password.error}
                    label='Password'
                >
                    <FaLock />
                </Input>
                <Button 
                    text='Login'
                    handleClick={handleLogin}
                />
            </Container>
        </div>
    );
}

export default Login;
