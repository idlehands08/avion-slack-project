import React, { useState } from 'react';
import userApi from './api/UserApi';
import channelApi from './api/ChannelApi';
import messageApi from './api/MessageApi';
import './App.css';
import { isValidEmail } from './utils';

import AuthApi from './services/AuthApi';
import Cookies from 'js-cookie';

function App() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const headers = {
    'access-token': Cookies.get('access-token'),
    'client': Cookies.get('client'),
    'uid': Cookies.get('uid'),
    'expiry': Cookies.get('expiry')
  }

  const handleRegistration = async () => {
    const payload = {
      email: '_1____user2@example.com',
      password: '12345678',
      password_confirmation: '12345678'
    }
    const { 
      email, 
      password, 
      password_confirmation 
    } = payload
    
    if (!isValidEmail(email)) {
      return setError('Please enter a valid email address')
    } else if (password !== password_confirmation) {
      return setError('Password does not match')
    } else {
      await userApi.register(payload)
        .then(() => setSuccess('Successfully registered'))
        .catch(error => setError(error.response.data.errors.full_messages))
    }
  }

  const handleLogin = async () => {
    const payload = {
      email: 'user1@example.com',
      password: '12345678',
    }
    const { 
      email, 
      password,
    } = payload

    if (!isValidEmail(email)) {
      return setError('Please enter a valid email address')
    } else {

      AuthApi.authenticate(email, password, (res) => {
        if (!AuthApi.isAuthenticated()) {
          setError('Whoops! Incorrect email or password');
        } else {
          setSuccess('Log-in successful')
        }
        
      })

      // await userApi.login(payload)
      //   .then(res => {
      //     const header = res.headers
          
      //     setSuccess('Log-in successful')
      //     setAccessToken(header['access-token'])
      //     setClient(header['client'])
      //     setLoggedInUid(header['uid'])
      //     setExpiry(header['expiry'])

      //   })
      //   .catch(error => setError(error.response.data.errors))
    }
  }

  const handleLogout = () => {
    AuthApi.logout();
  }

  const sendMessage = async () => {
    const payload = {
      'receiver_id': 1,
      'receiver_class': "User",
      'body': "kamusta?"
    }

    await messageApi.send(payload)
    .then(res => console.log(res))
    .catch(error => setError(error.response.data.errors))
  }

  const createChannel = async () => {
    const payload = {
      'name': 'channel002',
      'user_ids': [1, 2, 3, 4, 5]
    };

    await channelApi.create(payload)
    .then(res => console.log(res))
    .catch(error => setError(error.response.data.errors))
  }

  const retrieveMessage = async () => {
    const params =`receiver_class=User&receiver_id=1`

    await messageApi.retrieve(params)
      .then(res => console.log(res))
      .catch(error => setError(error.response.data.errors))
  }
  const getRecentMessages = async () => {

    await userApi.recentMessages()
      .then(res => console.log(res))
      .catch(error => setError(error.response.data.errors))
  }

  const usersChannel = async () => {

    await userApi.channels()
      .then(res => console.log(res))
      .catch(error => setError(error.response.data.errors))
  }

  const getChannelDetails = async () => {
    const id = "2"

    await channelApi.details(id)
      .then(res => console.log(res))
      .catch(error => setError(error.response.data.errors))
  }

  const memberToChannel = async () => {
    const payload = {
      "id": 1,
      "member_id": 3
  }

    await channelApi.members(payload)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  const getAllUsers = async () => {
    await userApi.all()
      .then(res => console.log(res))
      .catch(error => setError(error.response.errors))
  }

  const getOwnedChannels = async () => {
    await userApi.ownedChannels()
      .then(res => console.log(res))
      .catch(error => setError(error.response.errors))
  }

  return (
    <div>
      <button onClick={handleRegistration} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Register
      </button>
      <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Login
      </button>
      <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Send Message
      </button>
      <button onClick={createChannel} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Create channel
        </button>
      <button onClick={retrieveMessage} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Retrieve Messages
      </button>
      <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Logout
        </button>
      <button onClick={usersChannel} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
       Users Channel
      </button>
      <button onClick={getChannelDetails} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
       Channel Details
      </button>
      <button onClick={memberToChannel} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
       Add Member To Channel
      </button>
      <button onClick={getRecentMessages} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
       Get Recent Messages
      </button>
      <button onClick={getAllUsers} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
       Get All Users
      </button>
      <button onClick={getOwnedChannels} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
       User owned channels
      </button>
      { error ? error : success }
    </div>
  );
}

export default App;
