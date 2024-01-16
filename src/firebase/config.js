import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApYZvV9ymajnQ_vb04cgSv1q1CN-ePjAc",
  authDomain: "vue-blog-system-f1e4d.firebaseapp.com",
  projectId: "vue-blog-system-f1e4d",
  storageBucket: "vue-blog-system-f1e4d.appspot.com",
  messagingSenderId: "1015520273558",
  appId: "1:1015520273558:web:dc255c72d9cfb2eefd8eb7",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp, auth };
