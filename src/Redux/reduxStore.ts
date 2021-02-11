import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from './profileReducer'
import {dialogReducer} from './dialogReducer'
import {usersReducer} from './usersReducer'
import {friendsReducer} from './friendsReducer'
import {authReducer} from './authReducer'
import {userReducer} from './userReducer'
import {postReducer} from './postReducer'
import {imagesReducer} from './imagesReducer'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
   profileReducer: profileReducer,
   dialogReducer: dialogReducer,
   usersReducer: usersReducer,
   friendsReducer: friendsReducer,
   auth: authReducer,
   user: userReducer,
   post: postReducer,
   form: formReducer,
   images: imagesReducer
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// @ts-ignore
window._store_ = store

export default store