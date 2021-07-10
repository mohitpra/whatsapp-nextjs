import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAfL2YqSvthFn4VLOmAOaZFXJcUMyh-jB0",
    authDomain: "whatsapp-nextjs-6f410.firebaseapp.com",
    projectId: "whatsapp-nextjs-6f410",
    storageBucket: "whatsapp-nextjs-6f410.appspot.com",
    messagingSenderId: "596679682947",
    appId: "1:596679682947:web:55c86ffd66d57a492024b6"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};