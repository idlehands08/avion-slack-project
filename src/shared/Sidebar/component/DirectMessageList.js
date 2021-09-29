import DirectMessageItem from './DirectMessageItem';
import './DirectMessageList.scoped.css'

function DirectMessageList ({ showCloseIcon, directMessageList, loggedInUserId}) {
    return (
        <ul>
            { directMessageList.map(item => {
                return <DirectMessageItem 
                    key={item.id} 
                    item={item} 
                    showCloseIcon={showCloseIcon} 
                    loggedInUserId={loggedInUserId}
                />
            }) }
        </ul>
    )
}

export default DirectMessageList;
