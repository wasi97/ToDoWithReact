import firebase from "firebase"
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDcm9HzE2kG1FLRTjm47hXwUm6LcbmSPxw",
    authDomain: "wasiclass-a5009.firebaseapp.com",
    databaseURL: "https://wasiclass-a5009.firebaseio.com",
    projectId: "wasiclass-a5009",
    storageBucket: "wasiclass-a5009.appspot.com",
    messagingSenderId: "984206375594",
    appId: "1:984206375594:web:e0ccb2b7f6d226b1142ed3",
    measurementId: "G-TBYT9PL943"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);