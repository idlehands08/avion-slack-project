import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import DirectMessageList from './component/DirectMessageList';
import UserApi from '../../api/UserApi';
import { VscTriangleRight, VscTriangleDown } from 'react-icons/vsc';
import { TiMessages, TiMessage } from 'react-icons/ti';
import { FaRegUser } from 'react-icons/fa';
import style from './Sidebar.scoped.css';
import Cookies from 'js-cookie';

function Sidebar ({ routes }) {
    let history = useHistory()
    const [isToggled, setIsToggled] = useState(false);
    const [directMessageList, setDirectMessageList]  = useState([]);

    const NavHeader = () => {
        return (
            <header className="d-flex align-middle">
                Avion Slack
            </header>
        );
    }

    useEffect(() => {
       getDirectMessages();
    }, [])

    const handleToggling = () => {
        setIsToggled(!isToggled)
        rearrangeArray(directMessageList)
    }

    const showCloseIcon = () => {
        console.log('hovered')
    }

    const setHistory = () => {
        history.push(window.location.pathname)
    }

    const rearrangeArray = (array) => {
        let tempArray = [];
        tempArray = array.filter(item => {
            if(item.uid === Cookies.get('uid')){
                return item;
            }
        }).concat(array.filter(item => {
            if(item.uid !== Cookies.get('uid')) {
                return item;
            }
        }));
        setDirectMessageList(tempArray);
    }
    
    const getDirectMessages = async () => {

        await UserApi.recentMessages()
          .then(res =>{rearrangeArray(res.data.data)})
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
                        <DirectMessageList showCloseIcon={showCloseIcon} directMessageList={directMessageList} />
                    }
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;
