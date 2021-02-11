import {connect} from 'react-redux';
import React from 'react';
import {compose} from 'redux';
import Post from './Post';
import {withAuthRedirectComponent} from '../../../../hoc/withRedirectComponent';
import {getPosts} from "../../../../Redux/postReducer";
import styles from './Posts.module.css';


class PostConteiner extends React.Component {

    componentDidMount(){
        this.props.getPosts();
    }

    render(){
        
        return (
            <div className={styles.addPost}>
                    <h1>PROFILE</h1>
                <Post {...this.props}  />
            </div>
        );
    
    }
}

let mapStateToProps = (state)=> {
    return {
        post: state.post.post
    };
};

export default compose(
    connect(mapStateToProps,{getPosts}),
    withAuthRedirectComponent
)(PostConteiner)
