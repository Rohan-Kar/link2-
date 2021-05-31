import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCgdgZBE6hSl-_vRrCDHsmRtqca89r0Ows",
    authDomain: "social-app-a80b8.firebaseapp.com",
    projectId: "social-app-a80b8",
    storageBucket: "social-app-a80b8.appspot.com",
    messagingSenderId: "1028437962351",
    appId: "1:1028437962351:web:a329733c25bd1a0ae9e79a",
    measurementId: "G-MRFY474PTM"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth , provider , storage } ;
  export default db ;