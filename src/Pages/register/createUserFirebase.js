import React, { useState } from 'react'
import firebase from 'firebase'

const createUser = (document) => {
  const [error, setError] = useState('');
  const userCollection = firebase.firestore().collection('users-info');

  firebase
    .auth()
    .createUserWithEmailAndPassword(document.email, document.password)
    .then((cred) => {
      cred.user.updateProfile({ displayName: document.name });
    })
    .then(() => {
      const uid = firebase.auth().currentUser.uid;
      userCollection.doc(uid).set(document);
    })
    .catch((error) => {
      let errorCode = error.code;
      setError(errorsRegister[errorCode]);
    });
}

export default createUser
