import firebase from "firebase/compat/app"; 

const firebaseConfig = {
  apiKey: "AIzaSyClVNCxrwmDz8iWQrg7zv7nja-IqrfLP74",
  authDomain: "reactnative-finder.firebaseapp.com",
  projectId: "reactnative-finder",
  storageBucket: "reactnative-finder.appspot.com",
  messagingSenderId: "270432321249",
  appId: "1:270432321249:web:b58a8040b29a76aa9f41a0"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;











// import firebase from 'firebase';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyClVNCxrwmDz8iWQrg7zv7nja-IqrfLP74",
//   authDomain: "reactnative-finder.firebaseapp.com",
//   projectId: "reactnative-finder",
//   storageBucket: "reactnative-finder.appspot.com",
//   messagingSenderId: "270432321249",
//   appId: "1:270432321249:web:b58a8040b29a76aa9f41a0"
// };

// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig)
// } else {
//   app = firebase.app();
// }

// const db = app.firestore();
// const auths = firebase.auth();

// export { db, auths };