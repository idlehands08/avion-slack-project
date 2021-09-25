import React, { useState, useEffect } from 'react';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container/Container';
import authApi from '../../services/AuthApi';
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
        handleAuthentication(email, password);
    }, [email, password])

    const handleLogin = () => {
        handleValidation();
    }

    const handleValidation = () =>{
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

    const handleAuthentication = (email, password) => {
        if (email.valid && password.valid) {
            authApi.authenticate(email.value, password.value, res => {
                if (!res.result) {
                    setEmail({ ...email,  valid: false });
                    setPassword({ ...password, valid: false });
                }
            })
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
