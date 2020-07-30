import React, { useState } from 'react'
import firebase from 'firebase'

const signIn = (staff) => {
  const [error, setError] = useState('');

  firebase
    .auth()
    .signInWithEmailAndPassword(staff.email, staff.password)
    .then((user) => {
      //user
    })
    .catch((error) => {
      let errorCode = error.code;
      if (!errorsLogin[errorCode]) {
        setError('Ocorreu um erro');
      } else {
        setError(errorsLogin[errorCode]);
      }
    });
}

export default signIn