import {connect} from 'react-redux';
import React from 'react';
import Friends from './friends';
import {setFriend, isFriend} from '../../Redux/friendsReducer';
import {friendsSelector, idFriendSelector} from '../../Redux/friendsSelector';

class FriendsConteiner extends React.Component {

     onFriendChanged = (id) => {this.props.setFriend(id)}

    render(){
        return(
        <div>
            <Friends friends ={this.props.friends}
                     onFriendChanged = {this.onFriendChanged}
                     isFriend = {this.props.isFriend}
            />            
        </div>
        );
    };
};

let mapStateToProps =(state)=>{
 return { 
        friends: friendsSelector(state),
        idFriend: idFriendSelector(state)
    };
};


export default connect(mapStateToProps, {setFriend, isFriend})(FriendsConteiner);

