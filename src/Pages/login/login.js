import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Input from "../Components/input";

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (staff) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(staff.email, staff.password)
      .then((user) => {
        checkWorkPlace(user);
      })
      .catch((error) => {
        callback(error);
    });
  }

  const checkWorkPlace = (user) => {
    const userCollection = firebase.firestore().collection("users-info").doc(user.uid);
    userCollection.get().then((staff) => {
      if (staff.workPlace == "cozinha") {
      // vai para cozinha
      }
      if (staff.workPlace == "salão") {
        // vai para salão
      }
    });
  }

  const arrText = [
    { text: "E-mail", type: "email", value: email, handleChange: (e) => setEmail(e.currentTarget.value)},
    { text: "Senha", type: "password", value: password, handleChange: (e) => setPassword(e.currentTarget.value)},
  ];

  return (
    <main>
      <section>
        <h1>Burguer Queen</h1>
        <form className={}>
          {arrText.map((e, index) => (
            <Input key={index} text={e.text} type={e.type} value={e.value} handleChange={e.handleChange} />
          ))}
          <button type="submit" onClick={(e) => {
            e.preventDefault()
            login({email, password})}}>
            Entrar
          </button>
        </form>
        <p>Não possui uma conta?<br/><Link to='/'>Registre-se</Link></p>
      </section>
      <section>Lateral</section>
    </main>
  );

};

export default Login
