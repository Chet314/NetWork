import React from 'react';
import styles from './Posts.module.css';


const Post = (props) => {

    let postElement = props.post.map(element => {
        let date = new Date(element.time).toString().slice(0, -37); 
        let showImages = (photo) => photo !== "no photo" && <img src={photo}  alt="foto" />;
        return (
            <div key={element._id} className={styles.profile}>
                <div className={styles.posts}>
                    <img alt="emma" src={element.avatar} />
                       <div className={styles.avatarDescription}>
                         <h2>{element.name}</h2>
                         <h3>{date}</h3>
                       </div>
                    </div>
                    <p>{element.post}</p>
                <div className={styles.images}>
                    {showImages(element.photo)}
                </div>
                <div className={styles.likes}>
                    <p>Likes: {element.likes}</p>
                </div>
            </div>
    );});

    return (
        <div >
           {postElement}
        </div>
    );
};


export default Post;