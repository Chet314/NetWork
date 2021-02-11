import React from 'react';
import styles from './friends.module.css';



class Friends extends React.Component {
   
   render(){
    let elementsFriends = this.props.friends.map(element => {return (
        <div key = {element._id} className={styles.friend}>
        <img src={element.avatar} alt='avatar' />
        <span onClick={() => {this.props.onFriendChanged(element._id)}}><p>{element.name}</p></span>
    </div>         
    );
});

let friendStatus = elementsFriends.length !== 0 ? true : false;

this.props.isFriend(friendStatus);

    let friendsOnLine = this.props.friends.filter(friend => friend.onLine && friend)

    let elementFriendsOnLine = friendsOnLine.map(element => {return(
        <div key = {element._id} className={styles.friend}>
                <img src={element.avatar} alt='avatar' />
                <span><p>{element.name}</p></span>
        </div>);}
);
    return (
        <div>
            <div className={styles.friends}>
                <div className={styles.head}>
                    <h2>Friends</h2>
                    <div>
                        {elementsFriends.length}
                    </div>
                </div>
                {elementsFriends}
            </div>

            <div className={styles.online}>
                <div className={styles.head}>
                    <h2>ONLINE</h2>
                    <div>
                       {friendsOnLine.length}
                    </div>
                </div>
              {elementFriendsOnLine}
            </div>
        </div>

    );
}

}

export default Friends;