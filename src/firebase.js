import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBq8hY69skaLM61YyJ2ai3IekJdqrQ33jk",
    authDomain: "burger-queen-labss.firebaseapp.com",
    databaseURL: "https://burger-queen-labss.firebaseio.com",
    projectId: "burger-queen-labss",
    storageBucket: "burger-queen-labss.appspot.com",
    messagingSenderId: "928101242002",
    appId: "1:928101242002:web:5b5e3b67573a679c6fc24b"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;