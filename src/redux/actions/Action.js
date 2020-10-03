
 export const ADD_USER = "add_user"

export  const addUsers =(data)=>{
 return{
     type : ADD_USER,
     payload: data
 }
}

