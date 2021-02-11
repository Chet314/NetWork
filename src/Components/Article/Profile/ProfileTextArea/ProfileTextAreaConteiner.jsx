import React from 'react';
import {connect} from 'react-redux';
import ProfileTextArea from './ProfileTextArea';
import {addMessagePost} from '../../../../Redux/postReducer';
import {withAuthRedirectComponent} from '../../../../hoc/withRedirectComponent';
import {compose} from 'redux';
import {reduxForm} from 'redux-form';

class ProfileTextAreaConteiner extends React.Component {

 
    date = Date.now();
    addNewPost = (dataFromPost) => {
        this.props.addMessagePost(this.props.user, this.date, dataFromPost.newPost, dataFromPost.newPhoto);
    }
    
    render(){
        return(
            <div>
                <ProfileTextAreaForm {...this.props}
                onSubmit ={this.addNewPost}
                
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
       user: state.user.user
    };
};

export default compose(
    connect(mapStateToProps, {addMessagePost}),
    withAuthRedirectComponent
    )(ProfileTextAreaConteiner);

const ProfileTextAreaForm = reduxForm({form: 'profile'})(ProfileTextArea);