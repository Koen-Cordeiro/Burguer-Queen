import React from "react";
import firebase from "firebase/app";
import Button from "../../Components/button/button";

const Page404 = () => (
  <div className="error">
    <img
      alt="Scooby Doo comendo um sanduíche"
      src="https://media0.giphy.com/media/3ohs4h1Dt995D5iGA0/giphy.gif"
      width="480"
      height="360"
    />
    <h1>Ops, parece que houve um problema.</h1>
    <Button
      type="submit"
      handleClick={() => firebase.auth().signOut()}
      text="Voltar"
    />
  </div>
);

export default Page404;
