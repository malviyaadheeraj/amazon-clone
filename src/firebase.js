import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrx6bjxP_PZdgzYzJ_e-yJWazykYCbEsI",
  authDomain: "clone-c70c0.firebaseapp.com",
  projectId: "clone-c70c0",
  storageBucket: "clone-c70c0.appspot.com",
  messagingSenderId: "55291769555",
  appId: "1:55291769555:web:6ca2887c63202e3e521a26",
  measurementId: "G-Y2TF4H9DJK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
