import React from 'react';
import styles from './Login.module.css';
import {Field} from 'redux-form';
import {Redirect} from 'react-router-dom';


const Login = React.memo((props) => {

    props.isAuth && props.getUser();


    return (
        <div className={styles.wrapper}>
            <div className={styles.loginMain}>
                
                <div className={styles.images}>
                    <img className={styles.img1} src="../imgs/bird.jpg" alt="bird" />
                    <div className={styles.wrapperImg2}>
                        <img className={styles.img2} src="../imgs/kiss-2719099_1280.jpg" alt="boy" />
                        <img className={styles.img2} src="../imgs/tortle.jpg" alt="tortle" />
                    </div>
                </div>
                {!props.isAuth ?
                <div className={styles.account}>
                    <h1> Animal<img className={styles.labelImg} src="../imgs/pinkbird.png" alt="logo" />s</h1>
                    <h2>Do your have an account here?</h2>
                    <form onSubmit = {props.handleSubmit}>  

                    <div className={styles.inputWrapper}>
                        <Field component ={"input"} name = {"email"} placeholder="Email" type="email" pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})" required />
                        <Field component ={"input"} name = {"password"} placeholder="Password" type="password" pattern="[0-9a-zA-Z]{4,8}" required />
                    </div>

                    <div className={styles.remember}>
                       <label><Field component ={"input"} name = {"rememberMe"} type ="checkbox"/>Remember me</label>
                        <a href="#" >Forgot password?</a>
                    </div>

                    <div className={styles.buttonWrapper} >
                        <button >Sign in</button>
                        <button >Sign up</button>
                    </div>
                    </form>
                </div>

                : <Redirect to = "/users/" />
                   
                }
               
            </div>
        </div>
);

});


export default Login;