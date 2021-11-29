export default Users = [
    {
        id: 1, 
        email: 'user1@email.com',
        username: 'phucdang', 
        password: 'phuc12345', 
        userToken: 'token123'
    }
   
];


// import firebase from "../firebase";

// export function Users( email, password, loginComplete){
//     firebase.auth()
//         .signInWithEmailAndPassword(email,password)
//         .then(()=>loginComplete)
//         .catch((error)=> console.log("error:", error))

//         console.log("Email",email)
//         console.log("Password", password)
// }