import React, {useState, useEffect} from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = React.memo((props) => {

    let [isFriendState, setFriendState] = useState(props.isFriendState);
    let [isAuth, setAuth] = useState(props.isAuth);

    useEffect(() =>{
        setFriendState(props.isFriendState);
    },[props.isFriendState]);
    
    useEffect(() =>{
        setAuth(props.isAuth);
    },[props.isAuth]);

   
        return (
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <span>Animal</span>
                    <img src="../imgs/pinkbird.png" alt="logo" />
                    <span>s</span>
                </div>
                <div className={styles.links}>
                    <ul>
                        <li>{isFriendState && <NavLink to="/friendsPage/"><p>Friends</p></NavLink>}</li>
                        <li><NavLink to = 'video'><p>Videos</p></NavLink></li>
                        <li><NavLink to="/profileTextArea/"><p>Messages</p></NavLink></li>
                        <li><NavLink to ='/posts/'><p>Posts</p></NavLink></li>
                        <li> <NavLink to='/users/'><p>Users</p></NavLink></li>
                        <li>{!isAuth ? <NavLink to='/login/'><p>Login</p></NavLink> : <button onClick={() => props.onLogoff(props.id)}>Sign off</button>} </li>
                        <li>{isAuth && <NavLink to='/user/'><img src={props.avatar} alt="avatar" /></NavLink>}</li>
                    </ul>
                </div>

            </div>

        );
   
});

export default Header;