import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPew7tFSr9EfRQtrm6KaOBtxHt5uvqEA8",
  authDomain: "instagram-clone-a5f3d.firebaseapp.com",
  databaseURL: "https://instagram-clone-a5f3d.firebaseio.com",
  projectId: "instagram-clone-a5f3d",
  storageBucket: "instagram-clone-a5f3d.appspot.com",
  messagingSenderId: "205946504341",
  appId: "1:205946504341:web:c848f95e724db7edddc79c",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
