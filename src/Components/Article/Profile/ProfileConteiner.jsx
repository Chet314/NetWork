import {connect} from 'react-redux';
import React from 'react';
import {compose} from 'redux';
import Profile from './Profile';
import {withRouter} from 'react-router-dom';
import {getProfile} from '../../../Redux/profileReducer';
import {withAuthRedirectComponent} from '../../../hoc/withRedirectComponent';
import {userSelector} from '../../../Redux/profileSelector';

class ProfileConteiner extends React.PureComponent {

componentDidMount(){
    let id = this.props.match.params.id;
    if(!id){id = 1;}
    this.props.getProfile(id);
}

render(){
    return(
        <div>
           <Profile user = {this.props.user} /> 
        </div>
        );
    };
};

let mapStateToProps = (state)=> {
    return {
        user: userSelector(state)
    };
};


export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirectComponent
)(ProfileConteiner)

