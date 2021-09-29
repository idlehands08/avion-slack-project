import Image from '../../../shared/Image/Image';

import './MessageItem.scoped.css';

function MessageItem ({ message }) { 
    const imgStyle = {
        height: '36px',
        borderRadius: '4px'
    }

    return (
        <li>
            <Image 
                source={message.image}
                width={36}
                customStyle={imgStyle}
            />
            <div className='message-content'>   
                <h4>{ message.name }</h4>
                <div className="d-flex flex-column message-gap">
                    { message.body.map((body, i) =><small key={i}>{ body }</small>) }
                </div>
            </div>  
        </li>
    )
}

export default MessageItem;
