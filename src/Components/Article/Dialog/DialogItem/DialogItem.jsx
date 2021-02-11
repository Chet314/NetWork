import React from 'react';
import styles from './DialogItem.module.css';


const DialogItem = (props) => {

    return (
        <div key={props.time} className={styles.dialog}>
          <img src = {props.avatar} alt ='avatar' />
             
            <p>{props.message}</p>
        </div>
    );
};

export default DialogItem;