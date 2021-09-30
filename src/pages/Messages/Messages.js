import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { alignMessagesWithUser } from '../../utils';
import Cookies from 'js-cookie';
import MessageItem from './component/MessageItem';
import MessageApi from '../../api/MessageApi';
import TextArea from '../../shared/TextArea/TextArea';
import faker from 'faker';

import './Messages.scoped.css';

function Messages () {
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [receiver, setReceiver] = useState('');
    const { receiverId } = useParams();

    useEffect(() => {
        retrieveMessage();
    }, [receiverId]);
    
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
        setReceiver(fakeReceiver.name);
    
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

    const handleOnChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="container full-content d-flex flex-column justify-bottom" style={{ gap: '20px' }}>
            <div className="d-flex flex-column justify-bottom content">
                { 
                    messages.map((message, index) => {
                        return <MessageItem 
                            key={index} 
                            message={message} 
                        />
                    }) 
                }
            </div>
            <TextArea
                placeholder={`Message ${receiver}`}
                handleOnChange={handleOnChange}
                value={value}
            />
        </div>
    )
}

export default Messages;
