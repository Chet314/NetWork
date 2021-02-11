import * as Axios from 'axios';

Axios.defaults.withCredentials = true;

const instance = Axios.create({
    baseURL: "http://localhost:3001/",
    crossDomain: true
   
});


export const usersAPI = {
    
    getUsers(pageNumber, pageSize){
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`);
    },   

   getFollowers(id){
       if(id !== undefined){
        return instance.get(`follow/${id}`);}
    },
    
     postFollowers(userId, id){
        return instance.post(`follow/`, {userId, id});
    },
    
    deleteFollowers(userId, id){
       return  instance.delete(`follow/`, {data: {userId: userId, id: id}});
    }
};

export const authAPI = {

    me(){
       return instance.get("auth/me");  
    },

    login(submitData){
       return instance.post('auth/login/', {submitData});
    },
    
    logout(){
        return instance.delete('auth/logout');
    }
};

export const profileAPI = {
    getProfile(id) {
        return  instance.get(`profile/${id}`);
    },

    putStatus(user){
        return instance.put(`status`, {user: user});
    }

};

export const dialogsAPI = {
    getDialogs(senderId, recipientId){
    return instance.get(`message?senderId=${senderId}&recipientId=${recipientId}`);
    },   

     postDialogs(message){
        return instance.post('message', {message});
    }
};

export const postAPI = {
 getPosts(){
   return instance.get("posts");
},

 getPost(id, time) {
     return instance.get(`posts/post?id=${id}&time=${time}`);
},

 postMessage(user, time, post){
     return instance.post('posts/post',{user, time, post});
},

 putPhoto(id, time, savedPhoto){
   const formData = new FormData();
    formData.append("image", savedPhoto);

     return instance.put(`uploads?id=${id}&time=${time}`, formData, {headers: {
         "Content-Type": "multipart/form-data"
     }});
}
};

export const imagesAPI = {
     getImages(){
         return instance.get("uploads");
     }
    };



