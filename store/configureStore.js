import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import usersReducer from "../reducers/usersReducer" 
import notesReducer from "../reducers/notesReducer"

const configureStore = () =>{
    const store = createStore(combineReducers({
        user : usersReducer,
        mynotes : notesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore