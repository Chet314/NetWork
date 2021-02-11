import React from 'react';
import styles from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem';
import { Field } from 'redux-form';

const Dialog = (props) => {
 

       let senderMessage = props.messages.map(element =>
        <div>
            <DialogItem id={element.senderId} time= {element.time} message={element.message} avatar={element.senderAvatar} />
        </div>
    )

    return (
        <div>
            <h1>DIALOG</h1>
            {senderMessage}
            <form onSubmit = {props.handleSubmit}>
                <div className={styles.addPost}>
                    <Field component={"textarea"} name = 'addDialog' />
                <button>Submit</button>
                </div>
            </form>
        </div>

    );

}

export default Dialog;