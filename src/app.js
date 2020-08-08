import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../src/Pages/login/login'
import Kitchen from '../src/Pages/kitchen/kitchen'
import Saloon from '../src/Pages/saloon/saloon'
import Register from '../src/Pages/register/register'
import Page404 from '../src/Pages/404'

const App = () => {
  const [userPage, setUserPage] = useState();

  const checkWorkPlace = async (user) => {
    const userInfo = await firebase.firestore().collection('users-info').doc(user.uid).get()
    if (userInfo.data().workPlace === 'Cozinha') {
      setUserPage(() => <BrowserRouter>
        <Redirect to='/kitchen' />
        <Route path='/kitchen' component={Kitchen} />
      </BrowserRouter>)
    } else if (userInfo.data().workPlace === 'Salão') {
      setUserPage(() => <BrowserRouter>
        <Redirect to='/saloon' />
        <Route path='/saloon' component={Saloon} />
      </BrowserRouter>)
    } else {
      setUserPage(() => <Route path='/error' component={404} />)
    };
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        checkWorkPlace(user)

      } else {
        setUserPage(() => <BrowserRouter>
          <Redirect to={window.location.pathname === '/register' ? '/register' : '/'} />
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