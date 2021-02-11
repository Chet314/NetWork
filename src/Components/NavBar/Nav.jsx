import React from 'react';
import styles from './Nav.module.css';
import Images from './images/images';
import {getImages} from '../../Redux/imagesReducer';
import {connect} from 'react-redux';
import {compose} from 'redux';

class Nav extends React.PureComponent{

   componentDidMount(){
       this.props.getImages();
   }

   componentDidUpdate(prevProps){
       if(prevProps.post !== this.props.post){
        this.props.getImages();
       }
   }

    render() { 
            return(
            <div>  
                
    <div className={styles.news}>
        <h2>News</h2>

        <div className={styles.newsContainer}>
            <img src="../imgs/pinkbird.png" alt="logonews" />
            <p>There ia a meet up in your city on Friday at 19:00.</p>
        </div>

        <div className={styles.newsContainer}>
            <img src="../imgs/pinkbird.png" alt="logonews" />
            <p>There ia a meet up in your city on Friday at 19:00.</p>
        </div>
    </div>

    <div className={styles.gallery}>
        <h2>Gallery</h2>
            
        <Images {...this.props} />
      
    </div>

    <div className={styles.videos}>
        <h2>Videos</h2>
        <div className={styles.videoContainer}>
            <video width="400" height="300" controls="controls" poster="video/duel.jpg">
                <source src="#" type='video/ogg; codecs="theora, vorbis"' />
            </video>

            <video width="400" height="300" controls="controls" poster="video/duel.jpg">
                <source />

            </video>
        </div>
    </div>

</div>

        );}
    }

    let mapStateToProps = (state) => {
        return{
          images: state.images.images,
          post: state.post.post
        };
    } 
    
    export default compose(
        connect(mapStateToProps, {getImages})
        )(Nav);

