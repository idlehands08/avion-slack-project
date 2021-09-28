import React, { useState, useEffect } from 'react';
import ConversationItems from './component/ConversationItems';
import ConvoHeader from './component/ConvoHeader';
import MessageApi from '../../api/MessageApi';
import './Conversation.scoped.css';
import faker from 'faker';

import Cookies from 'js-cookie';
import TextArea from '../TextArea/TextArea';

function Conversation ({ participantId }) {

    const [messages, setMessages] = useState([]);
    const [imageLoggedInUser, setImageLoggedInUser] = useState('');
    const [imageParticipant, setImageParticipant] = useState('');

    useEffect(() => {
        retrieveMessage();
        setImageLoggedInUser(faker.internet.avatar());
        setImageParticipant(faker.internet.avatar());
     },[]);
    
     const retrieveMessage = async () => {
        const params =`receiver_class=User&receiver_id=800`
    
        await MessageApi.retrieve(params)
          .then(res => setMessages(res.data.data))
          .catch(error => console.log(error.response.data.errors))
      }
      const displayMessages = () => {
          console.log(messages);
          console.log(messages[0].sender.id);
          messages.map(message => console.log(message.sender.id))
      }

    return (
        <div className='container-conversation'>
            <div className='container-text-area'>
                <TextArea/>
            </div>
            <div className='container-conversation-items'>
                < ConversationItems className='conversation-items' messages={messages} imageLoggedInUser={imageLoggedInUser} imageParticipant={imageParticipant}/>
            </div>
            <button onClick={displayMessages}>displayMessagesOnConsole</button>
        </div>

    )

}

export default Conversation;
