import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {isAuthSelector, avatarSelector, isFriendSelector} from '../../Redux/headerSelector';
import {logout} from '../../Redux/authReducer';

class HeaderContainer extends React.PureComponent {

    onLogoff = (id) =>  this.props.logout(id)

    render(){
        return(
            <div>
                <Header {...this.props}
                onLogoff = {this.onLogoff} />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
return {
 isAuth: isAuthSelector(state),
 avatar: avatarSelector(state),
 isFriendState: isFriendSelector(state),
 id: state.auth.id
}
}

export default connect(mapStateToProps, {logout})(HeaderContainer);