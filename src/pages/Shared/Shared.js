import React from 'react';
import Input from '../../shared/Input/Input'

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
        </div>
    )
}

export default Shared;
