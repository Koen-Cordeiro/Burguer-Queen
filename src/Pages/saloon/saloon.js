import React from 'react'
import firebase from 'firebase'

const Saloon = () => {
  return (
    <main>
      <h1>Bem vindo senhor das mesas</h1>
      <button onClick={() => firebase.auth().signOut()}> Sair</button>
    </main>
  );
};

export default Saloon