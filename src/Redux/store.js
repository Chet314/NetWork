import {profileReducer} from './profileReducer';
import {dialogReducer} from './dialogReducer';
import {namesReducer} from './namesReducer';

let store= {
    _state: {
        dialogMessageData: {
            message: [
           {id: 1, message: 'Hi everyone', avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg"  },
           {id: 2, message: 'Hello', avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg"},
           {id: 3, message: 'I want to eat', avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg" },
           {id: 4, message: "Let's cook something", avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg"  }
       ],
    
       newMessage: "Write your message"
    },
   
       profileMessageData: {
           post: [
           {id: 1 , massage: "I was born to love you", avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg" },
           {id: 2 , massage: "Born to be free", avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg"},
           {id: 3 , massage: "Hello", avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg"}
       ],
            newPost: "Write your post"
    },
       
        namesData:{
          names: [
           {id: 1, name: "Bruce Willis", avatar: "../imgs/scale_1200.webp", location: 'New York, USA',
           about: "I'm actor. But I'm carried about our nature and animalsFrom my poin of view it's very important for every one.We must save everything on our planet for future generation.",
           myPhoto: "../imgs/scale_1200.webp"},
           {id: 2, name: "Emma Stone", avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg",  location: 'LA, USA',
           about: "I am blessed with a great family and great people around me that would be able to kick me in the shins if I ever for one minute got lost up in the clouds. I've been really lucky in that sense.",
           myPhoto: "../imgs/EmmaStone.jpg" },
           {id: 3, name: "John", avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg" },
           {id: 4, name: "Silvester", avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg" },
           {id: 5, name: "Auron", avatar: "../imgs/1603135165_1-p-emma-stoun-2.jpg" },
           {id: 6, name: "Anna", avatar:"../imgs/1603135165_1-p-emma-stoun-2.jpg" }
           ],
           
           newID: 0

          }
        
    },

    getState(){
        return this._state;
    },
       
   _subscriber(){
        console.log('state changed');
    },
    
    subscribe(observer){
        this._subscriber = observer;
    },


  dispatch(action){

    this._state.profileMessageData = profileReducer(this._state.profileMessageData, action);
    this._state.dialogMessageData =  dialogReducer(this._state.dialogMessageData, action);
    this._state.namesData = namesReducer( this._state.namesData, action);

      this._subscriber(this._state);

  }
};

export default store;