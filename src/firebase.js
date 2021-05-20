import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjhusLqL9hVaBJgQTn7W-aPYEsdeVxY5U",
    authDomain: "disneyplus-clone-28246.firebaseapp.com",
    projectId: "disneyplus-clone-28246",
    storageBucket: "disneyplus-clone-28246.appspot.com",
    messagingSenderId: "310067793682",
    appId: "1:310067793682:web:32227f1fd330b2e1eaadcb",
    measurementId: "G-WPEPW7HMBY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };

  export default db;