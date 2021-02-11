import React, {FC} from 'react'
import styles from './Users.module.css'
import {NavLink} from 'react-router-dom'
import {UserType} from '../../Redux/Types/type'

type PropsType = {
    countUsers: number
    pageSize: number
    pageNumber: number
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (pageNumber: number) => void
}


const Users: FC<PropsType> = React.memo(({countUsers, pageSize, onPageChanged, pageNumber, users, followingInProgress, follow, unfollow}) =>{

        let page = Math.ceil(countUsers/pageSize);
         
        let pages = [];
        for(let i = 1; i <= page; i++){
            pages.push(i);
        }
        
        return (
            <div>
                <h1>Users</h1>
                <div className={styles.pages}>
                    {pages.map(p => {return <span key={p} onClick={()=>{onPageChanged(p)}} className={pageNumber === p ? styles.br : styles.br2}>{p}</span>;})}
                 </div>
                <div className={styles.main}>
                    {
                      users.map(user =>
                            <div key={user._id} className={styles.userProperty}>  
                                <div className={styles.description}>
                                    <div className={styles.semicircle}>
                                    <div className={styles.avatar}>
                                      <NavLink to ={"/profile/" + user._id}>  <img src={user.avatar} alt="avatar" /></NavLink>
                                    </div>
                                    </div>
                                    <div className={styles.userName}>
                                        <h2>{user.name}</h2>
                                        <p>{user.status}</p>
                                    </div>
                                    <div className={styles.userButton}>
                                        {user.followed ? <button disabled = {followingInProgress.some(id => id === user._id)} onClick={() => {follow(user._id)}}>Unfollow</button>
                                                       : <button disabled = {followingInProgress.some(id => id === user._id)} onClick={() => {unfollow(user._id)}}>Follow</button>}
                                    </div>
                                    <div className = {styles.country}>
                                        <p>{user.country}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
    );
}
);

export default Users;