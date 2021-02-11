import React from 'react';
import Dialog from './Dialog';
import {connect} from 'react-redux';
import {sendMessage, getMessage} from '../../../Redux/dialogReducer';
import {reduxForm} from 'redux-form';
import {compose} from 'redux';
import {withAuthRedirectComponent} from '../../../hoc/withRedirectComponent';
import {getMessagesSelector, getUserSelector, getRecipientSelector} from '../../../Redux/dialogSelector';



 class  DialogConteiner extends React.Component {
     constructor(props){
         super(props);
         this.state={
             recipientId: this.props.recipientId
         };
     }
   
    componentDidMount (){
         this.props.getMessage(this.props.user._id, this.state.recipientId);
    }

    componentDidUpdate(prevProps){
        if(prevProps.recipientId !== this.props.recipientId){
        this.props.getMessage(this.props.user._id, this.props.recipientId);}
    }

onAddMessage = (values) => this.props.sendMessage({
    message: {
    time: Date.now(),
    senderId: this.props.user._id,
    recipientId: this.props.recipientId,
    avatar: this.props.user.avatar,
    mes: values.addDialog}
})

render(){
return(
<div>
     <ReduxDialogConteinerForm {...this.props}
      onSubmit = {this.onAddMessage} />
</div>

);
};
}

let mapStateToProps =(state) =>{
    return {
        messages: getMessagesSelector(state),
        user: getUserSelector(state),
        recipientId: getRecipientSelector(state)
    };
};
 
export default compose(
    connect(mapStateToProps, {sendMessage, getMessage}),
    withAuthRedirectComponent
)(DialogConteiner);

let ReduxDialogConteinerForm = reduxForm({form: 'dialogs'})(Dialog);