import React, {useEffect} from "react";
import Nav from "./Components/NavBar/Nav";
import ProfileConteiner from "./Components/Article/Profile/ProfileConteiner";
import FriendsPageConteiner from "./Components/Friends/FriendsPage/FriendsPageConteiner";
import FriendsConteiner from "./Components/Friends/friendsConteiner";
import DialogConteiner from "./Components/Article/Dialog/DialogConteiner";
import UserConteiner from "./Components/User/UserContainer";
import PostsConteiner from "./Components/Article/Profile/ProfileMessage/PostsConteiner";
import ProfileTextAreaConteiner from "./Components/Article/Profile/ProfileTextArea/ProfileTextAreaConteiner";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import UsersConteiner from "./Components/Users/UsersConteiner";
import { Route } from "react-router-dom";
import { compose } from "redux";
import {connect} from "react-redux";
import {getAuth} from "./Redux/authReducer";

const App = React.memo((props) => {

    useEffect(()=>{
        props.getAuth();
    },[props]);
    
   
    return (
        <React.Fragment>
              <Route path ='/login' render = { () => <LoginContainer />} /> 
            <header>
                <HeaderContainer />
            </header>
            <nav>
                <Route path='/friendsPage' render={() => <FriendsPageConteiner />} />
                <Nav />
            </nav>
            <article>
                <Route path = '/user/' render = {() => <UserConteiner />} />
                <Route path ='/profile/:id' render = {() => <ProfileConteiner />} />
                <Route path ='/posts/' render = {() => <PostsConteiner />} />
                <Route path='/profileTextArea/' render={() => <ProfileTextAreaConteiner />} />
                <Route path='/friendsPage/' render={() => <DialogConteiner  />} />
                <Route path='/users/' render={() => <UsersConteiner  />} />
            </article>
            <section>
                <FriendsConteiner />
            </section>
        </React.Fragment>
    );
});




export default compose(
    connect(null, {getAuth})
)(App);



