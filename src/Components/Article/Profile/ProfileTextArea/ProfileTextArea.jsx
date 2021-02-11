import React from 'react';
import styles from './ProfileTextArea.module.css';
import {Field} from 'redux-form'; 
import {FileInput} from "./FieldInput";

const ProfileTextArea = (props) => {

    return (
    <form onSubmit={props.handleSubmit}>
        <div className={styles.addPost}>
            <Field component ={"textarea"} name = {"newPost"} />
            <Field component = {FileInput} type = {"file"} name ={"newPhoto"} />
            <button >Submit</button>
        </div>
    </form>

    );

}

export default ProfileTextArea;