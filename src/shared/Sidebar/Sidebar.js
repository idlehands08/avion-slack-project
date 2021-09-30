import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import DirectMessageList from './component/DirectMessageList';
import UserApi from '../../api/UserApi';
import { VscTriangleRight, VscTriangleDown } from 'react-icons/vsc';
import { TiMessages, TiMessage } from 'react-icons/ti';
import { IoCreateOutline } from 'react-icons/io5';
import style from './Sidebar.scoped.css';
import Cookies from 'js-cookie';
import faker from 'faker';

function Sidebar ({ routes }) {
    let history = useHistory();
    const [isToggled, setIsToggled] = useState(false);
    const [directMessageList, setDirectMessageList]  = useState([]);
    const [loggedInUserId, setLoggedInUserId] = useState(0);

    const NavHeader = () => {
        return (
            <header className="d-flex align-middle">
                Avion Slack
                <button>
                    <IoCreateOutline className="io-create" class="tooltiptext"/>
                    
                </button>
            </header>
        );
    }

    useEffect(() => {
       getDirectMessages();  
    }, []);

    const handleToggling = () => {
        setIsToggled(!isToggled);
    }

    const showCloseIcon = () => {
        console.log('hovered');
    }

    const setHistory = () => {
        history.push(window.location.pathname);
    }

    const rearrangeArray = (array) => {
        array = array.filter(item => item.uid === Cookies.get('uid'))
            .concat(array.filter(item => item.uid !== Cookies.get('uid')));
            
        array.map(item => {
            item.name=faker.fake("{{name.firstName}} {{name.lastName}}");
            item.image=faker.fake("{{image.avatar}}");
        });
        setLoggedInUserId(array[0].id); 
        setDirectMessageList(array);
    }
    
    const getDirectMessages = async () => {
        await UserApi.recentMessages()
          .then(res =>rearrangeArray(res.data.data))
          .catch(error => console.log(error.response.data.errors))
    }

    return (
        <div>
            <nav>
                <NavHeader />
                <NavLink to="/" exact activeClassName={style.isActive} onClick={setHistory}>
                    <TiMessage /> Threads
                </NavLink>
                <NavLink to="/shared" exact activeClassName={style.isActive} onClick={setHistory}>
                    <TiMessages /> All DMs
                </NavLink>
                <div className="parent-navlink" onClick={handleToggling}>
                    <div className="d-flex align-middle parent-navlink-item">
                        { !isToggled ? 
                            <VscTriangleRight className="vsc-triangle" /> :
                            <VscTriangleDown className="vsc-triangle" />
                        }
                        Direct Messages
                    </div>
                    { isToggled &&
                        <DirectMessageList showCloseIcon={showCloseIcon} directMessageList={directMessageList} loggedInUserId={loggedInUserId} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;
