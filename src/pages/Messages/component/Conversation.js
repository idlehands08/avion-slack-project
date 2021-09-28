import Cookies from 'js-cookie'

import './Conversation.scoped.css';


function Conversation ({ messages, imageLoggedInUser, imageParticipant, loggedInUserId}) { 

    return (
        <div>
            <ul>
                {messages.map(message => {
                    if (message.sender.id.toString() === messages[0].id) {
                         return (
                                    <li>
                                        <img src={imageLoggedInUser} alt=""/> 
                                        <div className='flex-column'>   
                                            <h4>{message.sender.email}</h4>
                                            {message.body}
                                        </div>  
                                    </li>
                                    )
                    } else {
                        return (
                            <li>
                                <img src={imageParticipant} alt=""/> 
                                <div className='flex-column'>   
                                    <h4>{message.sender.email}</h4>
                                    {message.body}
                                </div>  
                            </li>
                            )
                    }
                })}
            </ul>

        </div>
    )
}

export default Conversation;
