import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToProps =(state) => {
    return {
        isAuth: state.auth.isAuth,
       
    };
};


export const  withAuthRedirectComponent = (Component) => {

class RedirectComponent extends React.Component {
             

    render(){
       
        return(
            !this.props.isAuth ? <Redirect to = '/login' /> :
            <div><Component {...this.props} /></div>
        );
    }
};

return connect(mapStateToProps)(RedirectComponent);;

}

