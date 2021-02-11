import React, {useEffect} from 'react';
import User from './User';
import {connect} from 'react-redux';
import {getStatus, updateStatus} from '../../Redux/userReducer';
import { compose } from 'redux';
import {withAuthRedirectComponent} from '../../hoc/withRedirectComponent';



const UserConteiner = React.memo((props) => {
  
useEffect(() => {
  props.getStatus(props.authId);
},[props]);

   
        return(
            <div>
              <User {...props}
               updateStatus = {props.updateStatus}
                />    
            </div>
        );
  
    });
 
let mapStateToProps = (state) => {
    return{
        user: state.user.user,
        authId: state.auth.id,
    };
};

export default compose(
    connect(mapStateToProps, {getStatus, updateStatus}),
    withAuthRedirectComponent
)(UserConteiner);
