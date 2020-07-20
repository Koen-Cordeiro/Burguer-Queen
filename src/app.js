import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../src/Pages/login/login'
import Kitchen from '../src/Pages/kitchen/kitchen'
import Saloon from '../src/Pages/saloon/saloon'
import Register from '../src/Pages/register/register'
import Page404 from '../src/Pages/404'

const App = () => {
  const [userPage, setUserPage] = useState();

  const checkWorkPlace = (user) => {
    const userCollection = firebase.firestore().collection('users-info').doc(user.uid);
    userCollection.get().then((staff) => {
      if (staff.data().workPlace === 'cozinha') {
        setUserPage(() => <BrowserRouter>
        <Redirect to='/kitchen'/>
      <Switch>
        <Route path='/kitchen' component={Kitchen} />
        <Route path='*' component={Page404} />
      </Switch>
    </BrowserRouter>)
      }
      if (staff.data().workPlace === 'salão') {
        setUserPage(() => <BrowserRouter>
          <Redirect to='/saloon'/>
        <Switch>
          <Route path='/saloon' component={Saloon} />
          <Route path='*' component={Page404} />
        </Switch>
      </BrowserRouter>)
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
        <Redirect to='/'/>
          <Switch>
            <Route path='/' exact={true} component={Login} />
            <Route path='/register' component={Register} />
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