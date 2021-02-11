import React from 'react';
import styles from './FriendsPage.module.css';

const FriendsPage = (props) => {

   let id = props.idFriend;

if(id!== 0){ let elementFriend = props.friends.find(element => element._id === id && element);
   
    return  (
      <div key={elementFriend._id} className={styles.aboutMe}>
      <img src={elementFriend.myPhoto} alt="foto" />
      <h2>{elementFriend.name }</h2>
      <p>{elementFriend.country || ""}</p>
      <h2>About me</h2>
      <p>{elementFriend.about}</p>
 </div>
    );
}else {
  return (
    <div>
      <h1>Choose a friend</h1>
    </div>

  );
}
}

export default FriendsPage;