import * firebase as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD-HZuquNtKRhkzDcvM5FeM_cLW5ZQjsVQ",
  authDomain: "react-firebase-auth-f08a4.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-f08a4.firebaseio.com",
  projectId: "react-firebase-auth-f08a4",
  storageBucket: "react-firebase-auth-f08a4.appspot.com",
  messagingSenderId: "25169923871"
};

if (!firebase.apps.lenght){
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth, };