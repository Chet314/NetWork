import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Users from './Users'
import {getUsers, setCurrentPage, postFollowers, deleteFollowers} from '../../Redux/usersReducer'
import { withAuthRedirectComponent } from '../../hoc/withRedirectComponent'
import {usersSelector, pageNumberSelector, countUsersSelector, pageSizeSelector, followingInProgressSelector, userIdSelector } from '../../Redux/usersSelector'
import {AppStateType} from '../../Redux/reduxStore'
import {UserType} from '../../Redux/Types/type'


type MapStatePropsType = {
    users: Array<UserType>
    pageNumber: number
    countUsers: number
    pageSize: number
    followingInProgress: Array<number>
    userId: number
}

type MapDispatchPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsers: (pageNumber: number, pageSize: number, userId?: number) => void
    deleteFollowers: (userId: number, id: number) => void
    postFollowers: (userId: number, id: number) => void

}
type OwnPropsType = {
   
}


type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersConteiner extends React.PureComponent<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.pageNumber, this.props.pageSize, this.props.userId);
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.getUsers(p, this.props.pageSize)
    }
         
    onFollowChanged = (id: number) =>{this.props.deleteFollowers(this.props.userId, id);};
    onUnfollowChanged = (id: number) => {this.props.postFollowers(this.props.userId, id);};

    render(){
       return (
        <div>
            <Users {...this.props}
                   follow = {this.onFollowChanged}
                   unfollow = {this.onUnfollowChanged}
                   onPageChanged = {this.onPageChanged}    
            />
         </div> 
        );
    };
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: usersSelector(state),
        pageNumber: pageNumberSelector(state),
        countUsers: countUsersSelector(state),
        pageSize: pageSizeSelector(state),
        followingInProgress: followingInProgressSelector(state),
        userId: userIdSelector(state)
    };
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {setCurrentPage, deleteFollowers, postFollowers, getUsers}),
    withAuthRedirectComponent
)(UsersConteiner)





