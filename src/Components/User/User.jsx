import React from 'react';
import styles from './User.module.css';


class User extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            editModePhoto: false,
            editModeName: false,
            editModeCountry: false,
            editModeAbout: false,
            editModeAvatar: false,
            user: this.props.user
        };
    }
    
    activateEditMode = (state) => {
        switch(state){
        case "Photo":
            this.setState({editModePhoto: true});
            break;
        case "Name":
            this.setState({editModeName: true});
            break;
        case "Country":
            this.setState({editModeCountry: true});
            break;
        case "About":
            this.setState({editModeAbout: true});
            break;
        case "Avatar":
            this.setState({editModeAvatar: true});
            break;
        default: break;
    }
}
        diactivateEditMode = (state) => {
    switch(state){
    case "Photo":
        this.setState({editModePhoto: false});
        this.props.updateStatus(this.state.user);
        break;
    case "Name":
        this.setState({editModeName: false});
        this.props.updateStatus(this.state.user);
        break;
    case "Country":
        this.setState({editModeCountry: false});
        this.props.updateStatus(this.state.user);
        break;
    case "About":
        this.setState({editModeAbout: false});
        this.props.updateStatus(this.state.user);
        break;
    case "Avatar":
        this.setState({editModeAvatar:false});
        this.props.updateStatus(this.state.user);
        break;
    default: break;
}
}
onChange = (e, state) => {
    switch(state){
    case "Photo":
        this.setState({
                user: {
                ...this.state.user,
                myPhoto: e.currentTarget.value
                }});
        break;
    case "Name":
        this.setState({
            user: {
                ...this.state.user,
                name: e.currentTarget.value
            }});
        break;
    case "Country":
        this.setState({
            user: {
            ...this.state.user,
            country: e.currentTarget.value}});
        break;
    case "About":
        this.setState({
            user: {
                ...this.state.user,
        about: e.currentTarget.value}});
        break;
    case "Avatar":
        this.setState({
                user: {
                ...this.state.user,
                avatar: e.currentTarget.value
                }});
        break;
    default: break;
}
}

componentDidUpdate(prevProps){
    if(prevProps.state !== this.props.state){
        this.setState({
            state: this.props.state
        });
    }
}

   
    render(){ 
        return (
        <div>
            <h1>USER PROFILE</h1>
            <div className={styles.aboutMe}>
                <div className={styles.userPhoto}>
                    {!this.state.editModePhoto &&
                    <div>
                        <span onDoubleClick={() => this.activateEditMode("Photo")} ><img src={this.props.user.myPhoto } alt="foto" /></span>
                    </div>}
                    {this.state.editModePhoto &&
                    <div>
                        <input onChange = {(e) => this.onChange(e,"Photo")} autoFocus={true} onBlur={() => this.diactivateEditMode("Photo")} value ={this.state.user.myPhoto}></input>
                    </div>}
                </div>
                <div className={styles.userPhoto}>
                    {!this.state.editModeAvatar &&
                    <div>
                        <span onDoubleClick={() => this.activateEditMode("Avatar")} ><img src={this.props.user.avatar } alt="avatar" /></span>
                    </div>}
                    {this.state.editModeAvatar &&
                    <div>
                        <input onChange = {(e) => this.onChange(e, "Avatar")} autoFocus={true} onBlur={() => this.diactivateEditMode("Avatar")} value ={this.state.user.avatar}></input>
                    </div>}
                </div>
                <div className={styles.userForm}>
                   {!this.state.editModeName &&
                    <div className={styles.name}>
                        <span onDoubleClick={() => this.activateEditMode("Name")}>{this.props.user.name}</span>
                    </div>}
                    {this.state.editModeName && 
                    <div className={styles.name}>
                        <input onChange = {(e) => this.onChange(e,"Name")} autoFocus={true} onBlur={() => this.diactivateEditMode("Name")} value={this.state.user.name}></input>
                    </div>}
                   {!this.state.editModeCountry &&
                    <div className={styles.country}>
                        <span onDoubleClick={() => this.activateEditMode("Country")}>{this.props.user.country}</span>
                    </div>}
                    {this.state.editModeCountry && 
                    <div className={styles.country}>
                        <input onChange = {(e) => this.onChange(e, "Country")} autoFocus={true} onBlur={() => this.diactivateEditMode("Country")} value={this.state.user.country}></input>
                    </div>}
                    {!this.state.editModeAbout && 
                    <div className={styles.about}>
                        <span onDoubleClick={() => this.activateEditMode("About")}>{this.props.user.about}</span>
                    </div>}
                    {this.state.editModeAbout && 
                    <div className={styles.about}>
                        <input onChange = {(e) => this.onChange(e, "About")} autoFocus={true} onBlur={() => this.diactivateEditMode("About")} value={this.state.user.about}></input>
                    </div>}
                </div>
            </div>
        </div>
        );
    };
}

export default User;