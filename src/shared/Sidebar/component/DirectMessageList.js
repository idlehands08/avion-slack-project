import DirectMessageItem from './DirectMessageItem';
import './DirectMessageList.scoped.css'

function DirectMessageList ({ showCloseIcon, directMessageList }) {
    return (
        <ul>
            { directMessageList.map(item => {
                return <DirectMessageItem 
                    key={item.id} 
                    item={item} 
                    showCloseIcon={showCloseIcon} 
                />
            }) }
        </ul>
    )
}

export default DirectMessageList;
