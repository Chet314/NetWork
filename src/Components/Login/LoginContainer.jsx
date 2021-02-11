import React from 'react';
import Login from './Login';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login, getAuth} from '../../Redux/authReducer'; 
import {getStatus} from '../../Redux/userReducer';
import {compose} from 'redux'; 
import {isAuthSelector, avatarSelector, idSelector} from '../../Redux/loginSelector';


class LoginContainer extends React.Component {

    onSubmit = (submitData) => this.props.login(submitData)
    getUser = () => this.props.getStatus(this.props.id)
  
    render(){
return(
<div>
   <LoginReduxForm  {...this.props}
            onSubmit = {this.onSubmit}
            onLogoff = {this.onLogoff}
            getUser = {this.getUser}
   /> 
</div>
);
    };
}
let mapStateToProps =(state) => {
    return {

        isAuth: isAuthSelector(state),
        avatar: avatarSelector(state),
        id: idSelector(state)
    };
};

export default compose(
    connect(mapStateToProps,{login, getAuth, getStatus}),
   
)(LoginContainer);


const LoginReduxForm = reduxForm({form: 'login'})(Login);