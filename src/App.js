import React, { useState } from 'react';
import userApi from './api/UserApi'
import './App.css';
import { isValidEmail } from './utils'

function App() {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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

  return (
    <div>
      <button onClick={handleRegistration} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Register
      </button>
      { error ? error : success }
    </div>
  );
}

export default App;
