import React, { useState, useEffect } from 'react';
import ConversationItems from './component/Conversation';
import MessageApi from '../../api/MessageApi';
import './Messages.scoped.css';

import TextArea from '../../shared/TextArea/TextArea';

function Messages ({ participantId, imageParticipant, imageLoggedInUser,  }) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        retrieveMessage();
     },[]);
    
     const retrieveMessage = async () => {
        const params =`receiver_class=User&receiver_id=${ participantId }`
    
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

export default Messages;
