import React from 'react';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container/Container';

function Shared () {
    return (
        <div>
            <h1>List of shared components</h1>
            <div style={{width: '300px'}}>
                <h3>Input</h3>
                <Input 
                    placeholder='Email'
                    hasError={false}
                    type='text'
                    hasIcon={true}
                    faIcon='envelope'
                />
                <Input 
                    placeholder='Password'
                    hasError={true}
                    type='password'
                    faIcon='lock'
                />
                <Input 
                    placeholder='Normal input'
                    type='text'
                />
            </div>
            <div style={{width: '300px'}}>
                <h3>Button</h3>
                <Button 
                    text='Login'
                />
            </div>
            <div>
                <h3>Container</h3>
                <Container>
                    <Input 
                        placeholder='Email'
                        hasError={false}
                        type='text'
                        hasIcon={true}
                        faIcon='envelope'
                    />
                    <Input 
                        placeholder='Password'
                        hasError={true}
                        type='password'
                        hasIcon={true}
                        faIcon='lock'
                    />
                    <Button 
                        text='Login'
                    />
                </Container>
            </div>
        </div>
    )
}

export default Shared;
