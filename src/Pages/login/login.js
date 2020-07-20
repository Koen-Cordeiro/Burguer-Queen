import React from "react";
import { Link } from "react-router-dom";
import Input from "../Components/input";

const Login = () => {
  
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
    { text: "E-mail", type: "email"},
    { text: "Senha", type: "password"},
  ];

  return (
    <main>
      <section>
        <h1>Burguer Queen</h1>
        <form className={}>
          {arrText.map((e, index) => (
            <Input key={index} text={e.text} type={e.type} />
          ))}
          <Link to="MAP PRA RECEBER COZINHA OU SALÃO">
            <button>Login</button>
          </Link>
        </form>
      </section>
      <section>Lateral</section>
    </main>
  );

};

export default Login
