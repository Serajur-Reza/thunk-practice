import { userAction } from './../Actions/users';
const initialState = {
    users: []
}

export const userReducer = (state=initialState, action:any) =>{
    switch(action.type){
        case "SHOW_USERS":
            return {...state, users: action.payload}

        default:
            return state
    }
}

export const loadUsers =()=> async (dispatch:any, getState:any)=>{
    const users = await fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json())
    dispatch(userAction(users))
}