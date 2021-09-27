
import { AiOutlineClose } from 'react-icons/ai';
import './ConvoHeader.scoped.css';

function ConvoHeader ({ participant_id }) {
    return (
        <header>
            <div>
                
            </div>
            <div className='bookmark-div'>
                    <AiOutlineClose className='close-icon' />
            </div>
        </header>
    )
}

export default ConvoHeader;
