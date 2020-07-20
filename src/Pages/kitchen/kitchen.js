import React from 'react'
import firebase from 'firebase'

const Kitchen = () => {
  return (
    <main>
      <h1>Bem vindo rei do masterchef</h1>
      <button onClick={() => firebase.auth().signOut()}> Sair</button>
    </main>
  );
};

export default Kitchen