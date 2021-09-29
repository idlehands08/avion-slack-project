import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageItem from './component/MessageItem';
import MessageApi from '../../api/MessageApi';
import TextArea from '../../shared/TextArea/TextArea';
import './Messages.scoped.css';
import faker from 'faker';

import Cookies from 'js-cookie';

function Messages () {
    const [messages, setMessages] = useState([]);
    const { receiverId } = useParams();

    useEffect(() => {
        retrieveMessage();
    }, [receiverId]);

    const alignMessagesWithUser = (data) => {
        let body = [];
        let processedMessages = [];
        let name = '';
        let image = '';

        // loop over response data
        for (let i = 0; i < data.length; i++) {
            if (i !== 0) {
                // check if the current send is same with the previous one
                if (data[i]['sender'].email === data[i - 1]['sender'].email) {
                    // push all body that belongs to current user
                    body.push(
                        ...processedMessages[processedMessages.length - 1].body,
                        data[i].body
                    );
                    name = data[i].name;
                    image = data[i].image;
                    // remove previous data to set newly added body
                    processedMessages.pop();
                } else {
                    body.push(data[i].body);
                    name = data[i].name;
                    image = data[i].image;
                }
            } else {
                body.push(data[i].body);
                name = data[i].name;
                image = data[i].image;
            }
            
            processedMessages.push({ body, name, image });
            body = [];
        }

        return processedMessages;
    }
    
    const retrieveMessage = async () => {
        const params =`receiver_class=User&receiver_id=${receiverId}`
        const fakeSender = {
            name: faker.fake("{{name.firstName}} {{name.lastName}}"),
            image: faker.fake("{{image.avatar}}")
        }
        const fakeReceiver = {
            name: faker.fake("{{name.firstName}} {{name.lastName}}"),
            image: faker.fake("{{image.avatar}}")
        }
    
        await MessageApi.retrieve(params)
          .then(res => {
                const data = res.data.data;
                // loop every item and set fake name & image
                data.map(data => {
                    if (data['sender'].email === Cookies.get('uid')) {
                        data.name = fakeSender.name;
                        data.image = fakeSender.image;
                    } else {
                        data.name =fakeReceiver.name;
                        data.image = fakeReceiver.image;
                    }
                })
                setMessages(alignMessagesWithUser(data));
          })
          .catch(error => console.log(error.response.data.errors))
    }

    return (
        <div className='container-conversation'>
            <div className='container-text-area'>
                <TextArea/>
            </div>
            <div className='container-conversation-items'>
                <ul>
                    { 
                        messages.map((message, index) => {
                            return <MessageItem 
                                key={index} 
                                message={message} 
                            />
                        }) 
                    }
                </ul>
            </div>
        </div>
    )
}

export default Messages;
