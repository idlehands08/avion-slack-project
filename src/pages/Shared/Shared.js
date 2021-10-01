import React from 'react';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import Container from '../../shared/Container/Container';
import Sidebar from '../../shared/Sidebar/Sidebar';
import Header from '../../shared/Header/Header';
import Search from '../../shared/Header/component/Search';
import Footer from '../../shared/Footer/Footer';

function Shared () {
    return (
        <div className="container">
            <div>
                <Footer 
                text="Disclaimer: This app is for educational purposes only." />
            </div>
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
            <div style={{width: '300px'}}>
                <h3>Sidebar</h3>
                <Sidebar />
            </div>
            <div>
                <h3>Search</h3>
                <Search placeholder={'Insert placeholder here'} />
            </div>
            <div>
                <h3>Header</h3>
                <Header />
            </div>
        </div>
    )
}

export default Shared;
