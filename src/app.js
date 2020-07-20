import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../src/Pages/login/login'
import Kitchen from '../src/Pages/kitchen/kitchen'
import Register from '../src/Pages/register/register'
import Page404 from '../src/Pages/404'

const App = () => {
  const [userPage, setUserPage] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserPage(<Kitchen/>)

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




  // const checkWorkPlace = (user) => {
  //   const userCollection = firebase.firestore().collection("users-info").doc(user.uid);
  //   userCollection.get().then((staff) => {
  //     if (staff.workPlace === "cozinha") {
  //     // vai para cozinha
  //     }
  //     if (staff.workPlace === "salão") {
  //       // vai para salão
  //     }
  //   });
  // }



  return (
    <>
      {userPage}
    </>);

};

export default App;