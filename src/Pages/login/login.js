import React from "react";
import { Link } from "react-router-dom";
import Input from "../Components/input";

const Login = () => {
  
  

  const login = (staff) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(staff.email, staff.password)
      .then((user) => {
        callback(user);
        checkUser(user);
      })
      .catch((error) => {
        callback(error);
      });
    };
  }

  const arrText = [
    { text: "E-mail", type: "email" },
    { text: "Senha", type: "password" },
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

// signin email firebase
const toggleSignIn = ({ email, password }, callback) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      callback(user);
      checkUser(user);
    })
    .catch((error) => {
      callback(error);
    });

// check if user exists on firebase salão & cozinha
const checkUser = (user) => {
  const load = firebase.firestore().collection("users-info").doc(user.uid);
  load.get().then((doc) => {
    if (!doc.exists) {
      newUser(user);
    }
  });
};

export default Login;
