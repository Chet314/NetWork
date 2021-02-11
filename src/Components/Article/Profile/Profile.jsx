import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Profile.module.css';


const Profile =(props) => {
 
let user = props.user;

        return(
         <div key ={user._id} className={styles.aboutMe}>
          <NavLink to ="/users/"> <img src={user.myPhoto} alt="foto" /></NavLink>
           <h2>{user.name}</h2>
           <p>{user.country}</p>
           <h2>About me</h2>
           <p>{user.about}</p>
 </div>
        );
}

export default Profile;