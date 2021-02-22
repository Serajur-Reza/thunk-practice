export const userAction = (users:any) =>{
    return{
        type: "SHOW_USERS",
        payload: users
    }
}