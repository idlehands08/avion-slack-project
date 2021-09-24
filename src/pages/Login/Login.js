import React, { useState, useEffect } from 'react';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container/Container';

import { isValidEmail, isEmpty } from '../../utils'

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
        if (email.value && email.valid && password.value && password.valid) {
            // perform user registartion here
            // use the api we made
            // integrate api with frontend
            // once login successful, redirect to '/' using window.location = '/'
            
            console.log('Login successful');
        }
    }

    const handleEmailChange = (e) => {
        setEmail({ ...email, value: e.target.value });
    }

    const handlePasswordChange = (e) => {
        setPassword({ ...password, value: e.target.value });
    }

    return (
        <div className="d-flex content-center full-content">
            <Container>
                <Input 
                    placeholder='Email'
                    isValid={email.valid}
                    type='text'
                    hasIcon={true}
                    faIcon='envelope'
                    value={email.value}
                    handleChange={handleEmailChange}
                    message={email.error}
                    label='Email Address'
                />
                <Input 
                    placeholder='Password'
                    isValid={password.valid}
                    type='password'
                    hasIcon={true}
                    faIcon='lock'
                    value={password.value}
                    handleChange={handlePasswordChange}
                    message={password.error}
                    label='Password'
                />
                <Button 
                    text='Login'
                    handleClick={handleLogin}
                />
            </Container>
        </div>
    );
}

export default Login;
