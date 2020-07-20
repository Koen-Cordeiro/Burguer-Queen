import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../src/Pages/login/login'
import Kitchen from '../src/Pages/kitchen/kitchen'
import Saloon from '../src/Pages/saloon/saloon'
import Register from '../src/Pages/register/register'
import Page404 from '../src/Pages/404'

const App = () => {
  const [userPage, setUserPage] = useState();

  const checkWorkPlace = (user) => {
    const userCollection = firebase.firestore().collection("users-info").doc(user.uid);
    userCollection.get().then((staff) => {
      if (staff.data().workPlace === "cozinha") {
        setUserPage(<Kitchen />)
      }
      if (staff.data().workPlace === "salão") {
        setUserPage(<Saloon/>)
      }
    });
  }



  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        checkWorkPlace(user)

      } else {
        console.log('to deslogado')
        setUserPage(() => <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/register" component={Register} />
            <Route path='*' component={Page404} />
          </Switch>
        </BrowserRouter>)
      }
    });

  }, [])

  return (
    <>
      {userPage}
    </>);

};

export default App;