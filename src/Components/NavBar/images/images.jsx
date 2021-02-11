import React from 'react';
import styles from '../Nav.module.css';

const Images = React.memo((props)=>{

    let imagesElement =  <img src="../imgs/animals.jpg" alt="animals" /> ;

  if(props.images !== undefined){
    imagesElement = props.images.map(element =>
       <img key ={element._id} src ={element.image} alt ="animals" /> );}

return(
    <div className={styles.imgContainer}>
      {imagesElement}
    </div>
    
);
});


export default Images;