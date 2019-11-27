const firebase = require("firebase/app");
require("firebase/auth");
//require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDECeRBhK74zwlxlq1llPPIWOevqfFytJo",
    authDomain: "test2brains.firebaseapp.com",
    databaseURL: "https://test2brains.firebaseio.com",
    projectId: "test2brains",
    storageBucket: "test2brains.appspot.com",
    messagingSenderId: "144348765468",
    appId: "1:144348765468:web:f40a6413e5ec08fc136ed9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//const db = firebase.firestore();
const auth = firebase.auth();


export { firebase }
export { auth }
