import React from 'react';
import Button from '../../shared/Button/Button';
import authApi from '../../services/AuthApi'



const handleLogout = () => {
    authApi.logout();
    window.location = '/Login';
  }

function Home () {
    return (
        <div className="column full-content">
            This is our home page
        <Button text='dummy Logout' handleClick={handleLogout} />
        </div>
        
    )
}

export default Home;
