import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1f2Bu4uTIZW0aMRcHzZb7ZlBBRBP9T_Y",
  authDomain: "ebookjs-8bc12.firebaseapp.com",
  projectId: "ebookjs-8bc12",
  storageBucket: "ebookjs-8bc12.appspot.com",
  messagingSenderId: "516069948710",
  appId: "1:516069948710:web:97a503fa18e84b866a55e7",
  measurementId: "G-P6DYK2E8FJ"
};


firebase.initializeApp(firebaseConfig);
const database= firebase.firestore();
export {database};