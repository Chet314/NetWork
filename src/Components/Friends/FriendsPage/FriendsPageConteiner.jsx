import {connect} from 'react-redux';
import React from 'react';
import FriendsPage from './FriendsPage';



class FriendsPageConteiner extends React.Component{
    render(){
        return(
            <div><FriendsPage {...this.props}/></div>
        );
    };
}


let mapStateToProps =(state)=>{
return {
    friends: state.friendsReducer.friends,
    idFriend: state.friendsReducer.idFriend
};
};

export default connect(mapStateToProps)(FriendsPageConteiner);

